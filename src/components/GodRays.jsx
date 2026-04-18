import { useEffect, useRef } from 'react'
import styles from './GodRays.module.css'

export default function GodRays() {
  const canvasRef = useRef(null)
  const raysRef   = useRef([])
  const rafRef    = useRef(0)
  const timeRef   = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const isMobile  = window.matchMedia('(max-width: 600px)').matches
    const RAY_COUNT = isMobile ? 10 : 16
    const SIZE      = isMobile ? 560 : 900
    const CX        = SIZE / 2
    const CY        = SIZE / 2

    canvas.width  = SIZE
    canvas.height = SIZE

    raysRef.current = Array.from({ length: RAY_COUNT }, (_, i) => ({
      baseAngle:    (i / RAY_COUNT) * 360,
      wobbleSpeed:  0.04 + Math.random() * 0.05,
      wobblePhase:  Math.random() * Math.PI * 2,
      wobbleRange:  6 + Math.random() * 16,
      opacitySpeed: 0.016 + Math.random() * 0.012,
      opacityPhase: Math.random() * Math.PI * 2,
      width:        60 + Math.random() * 80,
      length:       280 + Math.random() * 160,
      brightness:   0.7 + Math.random() * 0.3,
    }))

    const animate = () => {
      timeRef.current += 0.007
      const t    = timeRef.current
      const spin = t * 14

      ctx.clearRect(0, 0, SIZE, SIZE)
      ctx.globalCompositeOperation = 'lighter'

      raysRef.current.forEach(ray => {
        const angle =
          ray.baseAngle +
          spin +
          Math.sin(t * ray.wobbleSpeed + ray.wobblePhase) * ray.wobbleRange

        const opacity =
          (0.55 + Math.sin(t * ray.opacitySpeed * 50 + ray.opacityPhase) * 0.15)
          * ray.brightness

        const rad = (angle * Math.PI) / 180

        const A = 0.7
        const B = 1.9
        const ellipseFactor = (A * B) / Math.sqrt((B * Math.cos(rad)) ** 2 + (A * Math.sin(rad)) ** 2)
        const rayLength = ray.length * ellipseFactor

        ctx.save()
        ctx.translate(CX, CY)
        ctx.rotate(rad)

        const grad = ctx.createLinearGradient(0, 0, 0, rayLength)
        grad.addColorStop(0.00, `rgba(57,255,20,${opacity.toFixed(3)})`)
        grad.addColorStop(0.15, `rgba(57,255,20,${(opacity * 0.72).toFixed(3)})`)
        grad.addColorStop(0.40, `rgba(57,255,20,${(opacity * 0.38).toFixed(3)})`)
        grad.addColorStop(0.70, `rgba(57,255,20,${(opacity * 0.13).toFixed(3)})`)
        grad.addColorStop(1.00, 'rgba(57,255,20,0)')

        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(-ray.width / 2, rayLength)
        ctx.lineTo( ray.width / 2, rayLength)
        ctx.closePath()
        ctx.fillStyle = grad
        ctx.fill()
        ctx.restore()
      })

      ctx.globalCompositeOperation = 'source-over'
      rafRef.current = requestAnimationFrame(animate)
    }

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafRef.current)
      } else {
        rafRef.current = requestAnimationFrame(animate)
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
}
