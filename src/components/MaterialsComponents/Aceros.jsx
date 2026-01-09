import React from "react";
import Hero from "../HeroComponents/Hero";
import { productsData } from "../../data/ProductsData";

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
    AlCarbono: "precision_manufacturing",
    Cementacion: "heat_pump",
    Resistencia: "fitness_center",
    Rodamientos: "settings_backup_restore",
    AltaElasticidad: "spring",
    Nituración: "science",
    Herramientas: "construction",
  };

  return (
    <>
      <Hero title={heroTile} description={heroDescription} />
      <div className="items-center mb-16 text-center flex flex-col">
        <h2 className="text-4xl font-bold font-display text-scale-900 ">
          Selector de Calidades
        </h2>
      </div>
      <section className="mx-auto mb-10">
        <div className="mx-auto mb-10">
          {gruposAcero.map((grupo, index) => (
            <div key={index} className="mb-6">
              <h1 className="text-2xl font-bold text-center mb-6">
                {grupo.label}
              </h1>
              <div className="flex justify-center gap-6 ">
                {grupo.children.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="p-2 border-b border-gray-200 hover:bg-primary hover:text-white rounded-md bg-gray-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Aceros;
