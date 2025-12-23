import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';

export default function Home() {
  return (
    <main>
      <Hero />

      <Cards />

      <section className="relative bg-cover bg-center py-0 flex flex-col md:flex-row h-[550px] overflow-hidden" style={{ backgroundImage: `url('/src/assets/img/o_1fvd17a7c12qldta14eq11nf6hna.jpeg')` }}>
        <div className="absolute top-0 left-0 w-1/3 h-24 bg-primary z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}></div>

        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center z-10 relative">
          <div className="absolute inset-0 bg-gray-800/95 clip-path-news-bg" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }}></div>
          <div className="relative z-20 text-white max-w-lg">
            <h3 className="text-4xl font-bold mb-6">Descubra todas <br />nuestras novedades</h3>
            <p className="text-sm leading-relaxed mb-10 text-gray-300">
              Almacenes Grau Bassas SL cuenta con más de 65 años de experiencia en la venta y distribución de hierro, acero, metal, aluminio y plásticos técnicos. Hemos logrado convertirnos en una de las empresas punteras del mercado. Trabajamos para ofrecer a nuestros clientes el mejor servicio posible, y apostamos siempre por la calidad y la variedad en todos nuestros productos.
            </p>
            <a href="#" className="bg-white text-primary px-8 py-3 font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition">Saber más</a>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full">
          <img src="https://images.unsplash.com/photo-1535136814030-cf2c78a032f9?q=80&w=2696&auto=format&fit=crop" className="w-full h-full object-cover" alt="Novedades" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 bg-gray-200 flex items-center justify-center rounded-full border-8 border-gray-100">
              <span className="text-6xl font-black text-gray-300">A65</span>
              <span className="absolute bottom-4 text-xs font-bold text-primary bg-gray-100 px-2">años</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Nuestro recorrido en <br />la industria</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo cum doloremque quia consequatur illum fugiat in...</p>
            <a href="#" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-xs font-bold tracking-widest uppercase">Saber más</a>
          </div>
        </div>
      </section>
    </main>
  );
}
