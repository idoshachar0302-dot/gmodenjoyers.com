import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Divider from './components/Divider'
import Servers from './pages/Servers'
import Vip from './pages/Vip'
import NotFound from './pages/NotFound'

function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/vip"     element={<Vip />} />
        <Route path="*"        element={<NotFound />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}
