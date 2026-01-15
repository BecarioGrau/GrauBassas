import React from "react";
import logo from "../assets/img/imagotipo_GrauBassas_vertical_blanco.webp";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-12 bg-white"
        style={{ clipPath: "polygon(0 0, 20% 0, 0 100%)" }}
      ></div>
      <div
        className="absolute top-0 right-0 w-full h-full bg-black/10 pointer-events-none"
        style={{ clipPath: "polygon(70% 0, 100% 0, 100% 100%, 60% 100%)" }}
      ></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 relative z-10">
        <div className="flex flex-col mb-8 md:mb-0">
          <img src={logo} alt="GrauBassas Logo" className="h-20 md:h-30 " />
        </div>

        <div className="hidden md:block w-px h-24 bg-white/30 mx-8"></div>

        <div className="flex flex-col gap-4 text-sm font-light">
          <div className="flex items-center gap-3">
            <span className="text-2xl material-icons">email</span>
            <span>info@graubassas.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl material-icons">phone</span>
            <span>928460044</span>
          </div>
        </div>

        <div className="hidden md:block w-px h-24 bg-white/30 mx-8"></div>

        <div className="flex flex-col gap-4 text-sm font-light">
          <div className="flex items-start gap-3">
            <span className="text-2xl material-icons">location_on</span>
            <a href="https://maps.app.goo.gl/e47h6BHSc3ox4LrJ6">
              Calle Prof. Lozano, 18, 35008, Las
              <br />
              Palmas Gran Canaria, Las Palmas
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl material-icons">facebook</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-2 pt-1 border-t border-white/20 text-center text-xs text-white/60 flex justify-between">
        <div className="space-x-4">
          <a href="/contact">Contacto</a> |{" "}
          <a href="/aviso-legal">Aviso Legal</a> |{" "}
          <a href="#">Terminos y Condiciones</a>
        </div>
        <div>Grau Bassas. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
