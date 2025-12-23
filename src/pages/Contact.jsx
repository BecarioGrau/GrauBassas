import React from 'react';
import ContactHero from '../components/ContactHero';

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    // For now just log the values - replace with API call when ready
    const payload = Object.fromEntries(form.entries());
    // eslint-disable-next-line no-console
    console.log('Contact form submitted:', payload);
    alert('Mensaje enviado (demo).');
    e.target.reset();
  }

  return (
    <>
      <ContactHero />

      <main className="flex-grow container mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border-t-4 border-primary">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase">Envíenos un mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Nombre</label>
                  <input className=" h-9 w-full text-ce border-gray-300 rounded-sm shadow-lg focus:border-primary focus:ring-primary" id="name" name="name" placeholder="Nombre completo" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company">Empresa (Opcional)</label>
                  <input className="h-9 w-full border-gray-300 rounded-sm shadow-lg focus:border-primary focus:ring-primary" id="company" name="company" placeholder="Nombre de la empresa" type="text" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                  <input className="h-9 w-full border-gray-300 rounded-sm shadow-lg focus:border-primary focus:ring-primary" id="email" name="email" placeholder="ejemplo@correo.com" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Teléfono</label>
                  <input className="h-9 w-full border-gray-300 rounded-sm shadow-lg focus:border-primary focus:ring-primary" id="phone" name="phone" placeholder="+34 600 000 000" type="tel" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">Asunto</label>
                <select className="h-9 w-full border-gray-300 rounded-sm shadow-lg focus:border-primary focus:ring-primary" id="subject" name="subject">
                  <option>Información General</option>
                  <option>Solicitar Presupuesto</option>
                  <option>Suministros</option>
                  <option>Departamento Técnico</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Mensaje</label>
                <textarea className="h-24 w-full border-gray-300 rounded-sm shadow-lg focus:border-primary focus:ring-primary" id="message" name="message" placeholder="¿En qué podemos ayudarle?" rows="4" />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" id="privacy" name="privacy" type="checkbox" />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-medium text-gray-700 dark:text-gray-800" htmlFor="privacy">He leído y acepto la <a className="text-primary hover:underline" href="#">política de privacidad</a>.</label>
                </div>
              </div>

              <div>
                <button className=" rounded-sm w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-wider transition-colors shadow-md" type="submit">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 border-l-4 border-primary shadow-lg rounded-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="material-icons text-primary">location_on</span>
                  <h3 className="font-bold text-gray-800 uppercase">Ubicación</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Calle Prof. Lozano, 18<br />
                  35008, Las Palmas<br />
                  Gran Canaria
                </p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-primary shadow-lg rounded-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="material-icons text-primary">phone</span>
                  <h3 className="font-bold text-gray-800 uppercase">Teléfono</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-1">
                  Oficina: <span className="font-semibold text-gray-800">928 460 044</span>
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">Fax: 928 462 133</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-primary shadow-lg rounded-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="material-icons text-primary">email</span>
                  <h3 className="font-bold text-gray-800 uppercase">Email</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <a className="hover:text-primary transition-colors" href="mailto:info@graubassas.com">info@graubassas.com</a>
                </p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-primary shadow-lg rounded-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="material-icons text-primary">schedule</span>
                  <h3 className="font-bold text-gray-800 uppercase">Horario</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lunes - Viernes:<br />
                  07:30 - 15:30
                </p>
              </div>
            </div>

            <div className="w-full h-80 bg-gray-200 rounded shadow-md overflow-hidden relative group">
              <img alt="Mapa de ubicación de la empresa" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACb0aGcIR8Czoh9qmxAKdse-cTZEJauAhCuEMAvA8IQjPgNP9OIqPmhIN7Gk2qwLQJ1scRUk_G04knxCCpVqcSz4E6H0L-ESPv2oRSSyQz4C410c_s0G337G9YKAsp5jEouKnnp1zSCP29UON-CK1kCIFsD64JSuoD0jB3TT3Hq7ohk0hgcwVa4xVKlSPfhWWvOvvRORFzilOIGj8Mat6UApjLTQUF9lhkdTi29CLRKaCr__RbTxnYHEAj5dCpUfiUtDFmzWdHn4E" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white px-4 py-2 rounded shadow-lg flex items-center space-x-2">
                  <span className="material-icons text-primary">location_on</span>
                  <span className="font-bold text-gray-800 text-sm">AGB almacenes</span>
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                <a className="bg-white text-gray-700 text-xs px-2 py-1 shadow rounded inline-block" href="https://www.google.com/maps" target="_blank" rel="noreferrer">Ver en Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}