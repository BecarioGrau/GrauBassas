import React from "react";
import Hero from "../HeroComponents/Hero";
import { menuData } from "../../data/MenuData";

const Aceros = () => {
  const heroTile = "Aceros";
  const heroDescription =
    "Descubre nuestro catálogo de aceros, donde reunimos una amplia selección de calidades y aplicaciones pensadas para distintos sectores. Aquí encontrarás una muestra de los productos disponibles en nuestros almacenes, cuidadosamente seleccionados para garantizar calidad y disponibilidad. ";

  const aceroGroups = menuData
    .find((item) => item.label === "Productos")
    ?.children.find((item) => item.label === "Aceros")?.children;
  console.log(aceroGroups);

  return (
    <>
      <Hero title={heroTile} description={heroDescription} />
      <div className="mx-auto mb-10">
        <h1 className="text-2xl font-bold text-center mb-6">
          Aceros al Carbono
        </h1>
        <div className="flex flex-wrap gap-6 justify-center flex">
          <a
            href="/products/F-1110"
            className="bg-gray-200 rounded-md p-2 hover:bg-primary hover:text-white"
          >
            F-1110
          </a>
          <a
            href="/products/F-1120"
            className="bg-gray-200 rounded-md p-2 hover:bg-primary hover:text-white"
          >
            F-1120
          </a>
          <a
            href="/products/F-1130"
            className="bg-gray-200 rounded-md p-2 hover:bg-primary hover:text-white"
          >
            F-1130
          </a>
          <a
            href="/products/F-1140"
            className="bg-gray-200 rounded-md p-2 hover:bg-primary hover:text-white"
          >
            F-1140
          </a>
          <a
            href="/products/F-1150"
            className="bg-gray-200 rounded-md p-2 hover:bg-primary hover:text-white"
          >
            F-1150
          </a>
          <a
            href="/products/ST52-3"
            className="bg-gray-200 rounded-md p-2 hover:bg-primary hover:text-white"
          >
            ST52-3
          </a>
        </div>
      </div>
    </>
  );
};
export default Aceros;
