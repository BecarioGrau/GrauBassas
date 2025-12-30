import { Routes, Route } from 'react-router-dom'
import Marquee from './components/Marquee'
import { marqueeItems } from './data/data'
import Header from './components/Header'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetails from './components/Product_datails'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Marquee items={marqueeItems} />
      <Header />

      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/products/F-1110" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
