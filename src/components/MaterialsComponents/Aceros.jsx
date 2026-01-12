import React, { useEffect } from "react";
import Hero from "../HeroComponents/Hero";
import { productsData } from "../../data/ProductsData";
import { useNavigate, useLocation } from "react-router-dom";
import CategorySection from "./CategorySection";
import CorteSection from "./CorteSection";

const Aceros = () => {
  const heroTile = "Aceros";
  const heroDescription =
    "Descubre nuestro catálogo de aceros, donde reunimos una amplia selección de calidades y aplicaciones pensadas para distintos sectores. Aquí encontrarás una muestra de los productos disponibles en nuestros almacenes, cuidadosamente seleccionados para garantizar calidad y disponibilidad. ";

  const productosCategory = productsData.find(
    (item) => item.label === "Productos"
  );
  const aceroData = productosCategory?.children.find(
    (item) => item.label === "Aceros"
  );
  const gruposAcero = aceroData?.children || [];
  const iconMap = {
    "Al Carbono": "precision_manufacturing",
    Cementación: "Foundation",
    Resistencia: "fitness_center",
    Rodamientos: "settings_backup_restore",
    "Alta elasticidad": "Timeline",
    Nituración: "science",
    Herramientas: "Handyman",
  };

  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash, gruposAcero]);

  return (
    <>
      <Hero title={heroTile} description={heroDescription} />
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold">Selector de categorías</h2>
      </div>
      <div className="container mx-auto px-4 py-8">
        {gruposAcero.map((grupo, index) => {
          const iconName = iconMap[grupo.label] || "";

          return (
            <CategorySection key={index} grupo={grupo} iconName={iconName} />
          );
        })}
      </div>
      <CorteSection />
    </>
  );
};
export default Aceros;
