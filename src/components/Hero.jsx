import React, { useEffect, useRef } from 'react';
import img1 from '../assets/img/o_1fvaougrmgun1s7q1o9l1fb21edqa.jpeg';
import img2 from '../assets/img/o_1fvsfhcj91j0n17is1jq81lotllpb.jpg';
import img3 from '../assets/img/o_1fvsfhcj917q7ovtg4f18qna4c.jpg';

export default function Hero() {
  const bg1Ref = useRef(null);
  const bg2Ref = useRef(null);

  useEffect(() => {
    const bg1 = bg1Ref.current;
    const bg2 = bg2Ref.current;
    if (!bg1 || !bg2) return;

    const images = [img1, img2, img3];
    let currentIndex = 0;
    let isFirstLayer = true;

    bg1.style.backgroundImage = `url(${images[0]})`;
    bg1.style.opacity = '0.8';
    bg2.style.opacity = '0';

    const id = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;

      if (isFirstLayer) {
        bg2.style.backgroundImage = `url(${images[currentIndex]})`;
        bg2.style.opacity = '0.8';
        bg1.style.opacity = '0';
      } else {
        bg1.style.backgroundImage = `url(${images[currentIndex]})`;
        bg1.style.opacity = '0.8';
        bg2.style.opacity = '0';
      }

      isFirstLayer = !isFirstLayer;
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-[490px] overflow-hidden bg-gray-800 text-white">
      <div id="hero-bg-1" ref={bg1Ref} className="absolute inset-0 bg-cover bg-center opacity-80 transition-opacity duration-1000"></div>
      <div id="hero-bg-2" ref={bg2Ref} className="absolute inset-0 bg-cover bg-center opacity-80 transition-opacity duration-1000"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      <div className="absolute top-0 right-0 bg-white px-5 py-1 shadow-lg flex items-center gap-5 text-sm z-20">
        <span className="flex items-center gap-2 text-gray-700">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          <span className="font-medium">info@graubassas.com</span>
        </span>
        <span className="flex items-center gap-2 text-gray-700">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          <span className="font-medium">928460044</span>
        </span>
      </div>

      <div className="container mx-auto h-full flex flex-col pt-10 relative z-10 px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg max-w-3xl">
          Venta y distribución de <br />
          materiales semimetalúrgicos
        </h2>
        <p className="mt-6 text-lg md:text-xl max-w-2xl bg-black/30 p-4 border-l-4 border-primary backdrop-blur-sm">
          Comercialización al por mayor y al detalle de productos derivados del acero, el metal, el aluminio y plásticos técnicos.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 50%, 30% 0, 0 50%)' }}></div>
    </section>
  );
}
