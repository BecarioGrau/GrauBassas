import { Routes, Route } from "react-router-dom";
import Marquee from "./components/Marquee";
import { marqueeItems } from "./data/MarqueeData";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./components/ProductDetails";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AvisoLegal from "./pages/AvisoLegal";
import Materials from "./components/MaterialsComponents/Materials";

function App() {
  return (
    <>
      <Marquee items={marqueeItems} />
      <Header />

      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/products/:title" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/materiales/:title" element={<Materials />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
