import React, { useState, useEffect } from "react";
import ProductsDetailsHero from "./HeroComponents/ProductsDetailsHero";
import { useParams } from "react-router-dom";
import DynamicTable from "./DynamicTable";

const ProductDetails = () => {
  const { title } = useParams();
  const [calidad, setCalidad] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // IMPORTANTE: Importamos CalidadesData solo cuando se monta este componente
        const module = await import("../data/CalidadesData");
        const found = module.CalidadesData.find((item) => item.title === title);
        setCalidad(found);
      } catch (error) {
        console.error("Error cargando los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [title]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        Cargando catálogo...
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
      {/* Pasamos 'calidad' como prop para no tener que volver a buscarla dentro del Hero */}
      <ProductsDetailsHero calidad={calidad} title={title} />

      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Catálogo de Cortes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {calidad.cortes?.map((corte, idx) => (
              <a
                key={idx}
                className="h-[200px] group relative flex flex-col bg-surface-light rounded-xl overflow-hidden border border-border-light hover:border-primary/50 hover:shadow-lg hover:text-white hover:bg-primary transition-all duration-300"
                href={corte.href}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <div
                    className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${corte.image})` }}
                  />
                </div>
                <div className="p-1 flex flex-col gap-1">
                  <div className="flex justify-center items-center">
                    <h3 className="text-lg font-bold">{corte.label}</h3>
                  </div>
                </div>
              </a>
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
