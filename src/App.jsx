import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Divider from './components/Divider'
import Servers from './pages/Servers'
import Vip from './pages/Vip'
import NotFound from './pages/NotFound'
import Secret from './pages/Secret'

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

function Layout() {
  const { pathname } = useLocation()
  return (
    <>
      {pathname !== '/secret' && <Navbar />}
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/vip"     element={<Vip />} />
        <Route path="/secret"  element={<Secret />} />
        <Route path="*"        element={<NotFound />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
