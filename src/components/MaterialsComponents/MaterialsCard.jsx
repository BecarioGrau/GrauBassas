import React from "react";
import useIsMobile from "../../hooks/useIsMobile";

const MaterialsCard = ({ producto, icon }) => {
  const isMobile = useIsMobile();
  return (
    <a
      href={producto.href}
      className="group relative bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all cursor-pointer overflow-hidden block"
    >
      <div
        className={
          isMobile
            ? "absolute top-0 right-0 w-16 h-16  rounded-bl-full bg-primary "
            : "absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full group-hover:bg-primary  transition-colors duration-300"
        }
      >
        {icon && (
          <div className="z-20 scale-90 translate-x-1 translate-y-1">
            {icon}
          </div>
        )}
      </div>
      <span
        className={
          isMobile
            ? "block text-xl font-bold font-display text-primary z-10 relative"
            : "block text-xl font-bold font-display text-slate-700 group-hover:text-primary transition-colors z-10 relative"
        }
      >
        {producto.label}
      </span>
      <span className="block text-[10px] uppercase tracking-tighter text-slate-400 mt-1 z-10 relative">
        {producto.tag || "Ver detalles"}
      </span>
    </a>
  );
};
export default MaterialsCard;
