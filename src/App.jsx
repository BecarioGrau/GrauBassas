import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
