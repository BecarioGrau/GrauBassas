import React from "react";
import MaterialsCard from "./MaterialsCard";

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_")
    .replace(/[^\w\d_]/g, "");
};

const MaterialsSection = ({ grupo, iconName }) => {
  const sectionId = slugify(grupo.label);
  return (
    <section id={sectionId} className="mb-12 scroll-mt-28">
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
            <MaterialsCard key={subIndex} producto={producto} />
          ))}
      </div>
    </section>
  );
};
export default MaterialsSection;
