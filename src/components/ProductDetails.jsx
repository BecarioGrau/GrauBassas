import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsDetailsHero from "./HeroComponents/ProductsDetailsHero";
import { useParams, useLocation } from "react-router-dom";
import DynamicTable from "./DynamicTable";
import MaterialsCard from "./MaterialsComponents/MaterialsCard";
import {
  LayersIcon,
  TriangleIcon,
  SquareIcon,
  HexagonIcon,
  CircleIcon,
} from "./Icons";

const ICON_MAP = {
  Macizo: "M",
  Chapa: <LayersIcon />,
  Ángulo: <TriangleIcon />,
  Cuadrado: <SquareIcon />,
  Hexágono: <HexagonIcon />,
  Redondo: <CircleIcon />,
};

const ProductDetails = () => {
  const { title } = useParams();
  const location = useLocation();
  const [calidad, setCalidad] = useState(null);
  const [loading, setLoading] = useState(true);

  const pathParts = location.pathname.split("/");
  const categorySlug = pathParts[3];
  const categoryName = categorySlug
    ? categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)
    : "";

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    let jsonToFetch = "";

    if (path.includes("aceros")) {
      jsonToFetch = "aceros.json";
    } else if (path.includes("aluminios")) {
      jsonToFetch = "aluminios.json";
    }

    if (!jsonToFetch) {
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(`/data/${jsonToFetch}`)
      .then((res) => {
        if (!res.ok) throw new Error("Archivo no encontrado");
        return res.json();
      })
      .then((data) => {
        const found = data.find(
          (item) =>
            item.title.trim().toLowerCase() === title.trim().toLowerCase(),
        );
        setCalidad(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [title, location.pathname]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        Cargando Producto...
      </div>
    );

  if (!calidad) {
    return (
      <h2 className="flex justify-center items-center h-screen text-3xl font-bold text-gray-900">
        Calidad no encontrada
      </h2>
    );
  }

  return (
    <main className="layout-container flex h-full grow flex-col">
      <ProductsDetailsHero calidad={calidad} title={title} />

      <section className="px-6 flex items-center gap-2 text-sm font-semibold">
        <Link to="/productos" className="text-gray-900 hover:text-primary">
          Productos
        </Link>
        <span className="text-gray-400 ">/</span>
        <Link
          to="/productos/materiales"
          className="text-gray-900 hover:text-primary"
        >
          Materiales
        </Link>

        {categoryName && (
          <>
            <span className="text-gray-400">/</span>
            <Link
              to={`/productos/materiales/${categorySlug}`}
              className="text-gray-900 hover:text-primary"
            >
              {categoryName}
            </Link>
          </>
        )}
        <span className="text-gray-400">/</span>

        <span className="font-semibold text-gray-900 capitalize">{title}</span>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
              Formatos de corte
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {calidad.cortes.map((corte, idx) => (
              <MaterialsCard
                key={idx}
                producto={{
                  label: corte.label,
                  href: corte.href || "#",
                  tag: "Ver medidas",
                }}
                icon={ICON_MAP[corte.label]}
              />
            ))}
          </div>
        </div>
      </section>

      {calidad.tableConfig ? (
        <DynamicTable data={calidad.tableConfig} />
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-gray-900">
            No hay especificaciones técnicas disponibles
          </h2>
        </div>
      )}
    </main>
  );
};

export default ProductDetails;
