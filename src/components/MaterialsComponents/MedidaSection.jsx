import React from "react";
import { useNavigate } from "react-router-dom";

const MedidaSection = () => {
  const navigate = useNavigate();
  return (
    <section className="pb-12 ">
      <div className="container md:mx-auto mx-auto bg-gray-900 text-white p-6 rounded-md flex flex-col items-center">
        <h4>¿Necesitas un corte a medida?</h4>
        <p>
          Ofrecemos servicios de sierra de cinta y logística rápida para que tu
          proyecto no se detenga
        </p>
        <button
          className="bg-primary text-white hover:bg-primary/70 transition-colors duration-300 px-4 py-2 rounded-md mt-4 cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Contactnos
        </button>
      </div>
    </section>
  );
};
export default MedidaSection;
