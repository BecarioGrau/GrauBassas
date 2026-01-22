import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Marquee from "./components/Marquee";
import { marqueeItems } from "./data/HomeContentData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NavigationProvider } from "./context/NavigationContext";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const AvisoLegal = lazy(() => import("./pages/AvisoLegal"));
const Materials = lazy(
  () => import("./components/MaterialsComponents/Materials"),
);
const AboutUs = lazy(() => import("./pages/AboutUs"));

function App() {
  return (
    <NavigationProvider>
      <Marquee items={marqueeItems} />
      <Header />
      <Routes>
        <Route path="/productos" element={<Product />} />
        <Route
          path="/productos/materiales/:category/:title"
          element={<ProductDetails />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/productos/materiales/:title" element={<Materials />} />
        <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
      <Footer />
    </NavigationProvider>
  );
}

export default App;
