import React from "react";
import { useNavigate } from "react-router-dom";

const CorteSection = () => {
  const navigate = useNavigate();
  return (
    <section className="pb-12 ">
      <div className="container mx-auto dark:bg-[#111840] text-white p-6 rounded-md flex flex-col items-center">
        <h4>¿Necesitas un corte a medida?</h4>
        <p>
          Ofrecemos servicios de sierra de cinta y logística rápida para que tu
          proyecto no se detenga
        </p>
        <button
          className="bg-primary text-white px-4 py-2 rounded-md mt-4 cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Contactnos
        </button>
      </div>
    </section>
  );
};
export default CorteSection;
