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
    "Al Carbono": "precision_manufacturing",
    Cementación: "Foundation",
    Resistencia: "fitness_center",
    Rodamientos: "settings_backup_restore",
    "Alta elasticidad": "Timeline",
    Nituración: "science",
    Herramientas: "Handyman",
  };

  return (
    <>
      <Hero title={heroTile} description={heroDescription} />
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold">Selector de categorías</h2>
      </div>
      <div className="container mx-auto px-4 py-8 mb-16">
        {gruposAcero.map((grupo, index) => {
          const iconName = iconMap[grupo.label] || "";

          return (
            <section key={index} className="mb-12">
              <div className="flex items-center space-x-4 mb-8 border-b pb-2 border-slate-200">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {iconName}
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-800">
                  {grupo.label}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {grupo.children &&
                  grupo.children.map((producto, subIndex) => (
                    <a
                      key={subIndex}
                      href={producto.href}
                      className="group relative bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all cursor-pointer overflow-hidden block"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full group-hover:bg-primary transition-colors duration-300"></div>

                      <span className="block text-xl font-bold font-display text-slate-700 group-hover:text-primary transition-colors z-10 relative">
                        {producto.label}
                      </span>

                      <span className="block text-[10px] uppercase tracking-tighter text-slate-400 mt-1 z-10 relative">
                        {producto.tag || "Ver detalles"}
                      </span>
                    </a>
                  ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};
export default Aceros;
