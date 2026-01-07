import React from "react";
import BackgroundSlideshow from "./BackgroundSlideshow";
import img1 from "../assets/img/o_1fvaougrmgun1s7q1o9l1fb21edqa.jpeg";
import img2 from "../assets/img/o_1fvsfhcj91j0n17is1jq81lotllpb.jpg";
import img3 from "../assets/img/o_1fvsfhcj917q7ovtg4f18qna4c.jpg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:h-[390px] overflow-hidden bg-gray-800 text-white flex flex-col">
      <div className="absolute inset-0 w-full h-full">
        <BackgroundSlideshow images={[img1, img2, img3]} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 md:to-transparent"></div>
      </div>

      <div className="relative w-full bg-white z-20 px-4 py-2 flex justify-center md:absolute md:top-0 md:right-0 md:w-auto md:px-5 md:py-1 md:justify-start md:shadow-lg">
        <div className="flex items-center gap-4 text-xs md:text-sm text-gray-700">
          <span className="flex items-center gap-1 md:gap-2">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span className="font-medium">info@graubassas.com</span>
          </span>
          <div className="h-4 w-px bg-gray-300 md:hidden"></div>
          <span className="flex items-center gap-1 md:gap-2">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span className="font-medium">928460044</span>
          </span>
        </div>
      </div>

      <div className="container mx-auto flex-grow flex flex-col justify-center relative z-10 px-6 py-10 md:pt-10 md:pb-0">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg max-w-3xl break-words">
          Venta y distribución de <br className="hidden md:block" />
          <span className="block mt-1">materiales semimetalúrgicos</span>
        </h2>

        <p className="mt-4 md:mt-6 text-base md:text-xl max-w-2xl bg-black/40 p-3 md:p-4 border-l-4 border-primary backdrop-blur-sm rounded-r-md">
          Comercialización al por mayor y al detalle de productos derivados del
          acero, el metal, el aluminio y plásticos técnicos.
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full bg-white h-12 md:h-24 z-20"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 50%, 30% 0, 0 50%)",
        }}
      ></div>
    </section>
  );
}
