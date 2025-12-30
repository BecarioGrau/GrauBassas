import React from 'react';
import { materialsData } from '../data/MaterialsData';

export default function Cards() {
  return (
    <section className="pb-10 min-h-[700px]">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900  mb-4 tracking-tight">Catálogo de Materiales</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-3xl leading-relaxed">
            Explora nuestra amplia gama de metales y plásticos certificados para construcción e industria. Calidad garantizada en cada pieza.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materialsData.map((material) => (
            <a key={material.title} className="h-[200px] group relative flex flex-col bg-surface-light rounded-xl overflow-hidden border border-border-light hover:border-primary/50 hover:shadow-lg hover:text-white hover:bg-primary transition-all duration-300" href={material.url}>
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${material.image})` }} />
              </div>
              <div className="p-4 flex flex-col gap-1">
                <div className="flex justify-center items-center">
                  <h3 className="text-lg font-bold text-text-main">{material.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
