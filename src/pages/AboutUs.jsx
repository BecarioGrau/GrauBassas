import Hero from "../components/HeroComponents/Hero";
import { UsersIcon, WorkIcon, CheckIcon } from "../components/Icons";
import { useNavigate } from "react-router-dom";

const heroTile = "Compromiso, Calidad y Experiencia";
const heroDescription =
  "Conoce la historia de Almacenes Grau Bassas: especialistas en hierro, acero y plásticos técnicos al servicio de las islas desde 1959.";
const desktopHeroHeight = "440px";
const mobileHeroHeight = "auto";

const AboutUS = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero
        title={heroTile}
        description={heroDescription}
        desktopHeroHeight={desktopHeroHeight}
        mobileHeroHeight={mobileHeroHeight}
      />

      <main className="container mx-auto px-4 pb-10">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight uppercase">
            Sobre Nosotros
          </h2>
          <div className="w-16 h-1 bg-primary mb-4 mx-auto md:mx-0"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <section className="mb-16">
            <h2 className="h2-about-us">
              <div className="flex-shrink-0">
                <UsersIcon />
              </div>
              ¿Quiénes somos?
            </h2>
            <div className="bg-white border border-gray-200 p-6 rounded-b-lg shadow-sm">
              <p className="text-gray-700 text-justify text-lg leading-relaxed">
                Fundada en 1959, <b>Almacenes Grau Bassas S.L.</b> nació con el
                compromiso de ser un aliado estratégico para la industria y la
                construcción en las Islas. Con más de seis décadas de
                trayectoria, nos hemos consolidado como una empresa referente en
                la venta y distribución de materias semi-metalúrgicas,
                evolucionando junto a las necesidades de nuestros clientes y del
                mercado actual.
              </p>
            </div>
          </section>

          <section className="mb-16 bg-gray-50 border-l-8 border-primary p-8 rounded-r-lg shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              Logística Integral en toda Canarias
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              La rapidez y la eficiencia en el transporte son tan críticas como
              la calidad del material. Optimizamos nuestros procesos para
              garantizar entregas seguras en todo el archipiélago:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>{" "}
                <b>Distribución Interinsular:</b> Suministro a las siete islas.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>{" "}
                <b>Stock Permanente:</b> Disponibilidad inmediata en almacén.
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="h2-about-us">
              <div className="flex-shrink-0">
                <WorkIcon />
              </div>
              Nuestra Especialización
            </h2>
            <div className="bg-white border border-gray-200 p-6 rounded-b-lg shadow-sm">
              <p className="text-gray-700 text-lg mb-6">
                Comercializamos al por mayor y al detalle materiales críticos
                para el desarrollo industrial:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                  <h3 className="font-bold text-primary mb-2">
                    Hierro y Acero
                  </h3>
                  <p className="text-sm text-gray-600">
                    Soluciones robustas para estructuras y construcción.
                  </p>
                </div>
                <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                  <h3 className="font-bold text-primary mb-2">
                    Metal y Aluminio
                  </h3>
                  <p className="text-sm text-gray-600">
                    Variedad y precisión para todo tipo de aplicaciones.
                  </p>
                </div>
                <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                  <h3 className="font-bold text-primary mb-2">
                    Plásticos Técnicos
                  </h3>
                  <p className="text-sm text-gray-600">
                    Materiales avanzados para ingeniería específica.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-6 bg-white border border-gray-100 shadow-sm rounded-lg">
              <p className="text-3xl font-black text-primary">+65</p>
              <p className="text-xs uppercase text-gray-500 font-bold">Años</p>
            </div>
            <div className="text-center p-6 bg-white border border-gray-100 shadow-sm rounded-lg">
              <p className="text-3xl font-black text-primary">1959</p>
              <p className="text-xs uppercase text-gray-500 font-bold">
                Fundación
              </p>
            </div>
            <div className="text-center p-6 bg-white border border-gray-100 shadow-sm rounded-lg">
              <p className="text-3xl font-black text-primary">100%</p>
              <p className="text-xs uppercase text-gray-500 font-bold">
                Canario
              </p>
            </div>
            <div className="text-center p-6 bg-white border border-gray-100 shadow-sm rounded-lg">
              <p className="text-3xl font-black text-primary">7</p>
              <p className="text-xs uppercase text-gray-500 font-bold">Islas</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="h2-about-us">
              <div className="flex-shrink-0">
                <CheckIcon />
              </div>
              ¿Por qué elegir Grau Bassas?
            </h2>
            <div className="bg-white border border-gray-200 p-6 rounded-b-lg shadow-sm">
              <ul className="space-y-6 p-about-us">
                <li className="flex gap-4">
                  <div className="text-primary font-bold text-xl">01</div>
                  <div>
                    <b className="text-gray-900">Experiencia y Conocimiento:</b>
                    <p className="text-gray-600">
                      Respaldo de un equipo técnico que entiende profundamente
                      los materiales.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-primary font-bold text-xl">02</div>
                  <div>
                    <b className="text-gray-900">Calidad Certificada:</b>
                    <p className="text-gray-600">
                      Productos que cumplen con los más altos estándares de
                      seguridad.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-primary font-bold text-xl">03</div>
                  <div>
                    <b className="text-gray-900">Servicio Personalizado:</b>
                    <p className="text-gray-600">
                      Asesoramiento especializado para encontrar la solución
                      perfecta.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10 bg-gray-800 p-8 rounded-xl shadow-lg text-white text-center">
            <p className="text-lg italic opacity-90 mb-6">
              "En Almacenes Grau Bassas seguimos mirando al futuro, apostando
              por la innovación para seguir siendo su proveedor de confianza en
              Canarias."
            </p>
            <button
              className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors uppercase text-sm tracking-widest cursor-pointer"
              onClick={() => navigate("/contacto")}
            >
              Contacto
            </button>
          </section>
        </div>
      </main>
    </>
  );
};

export default AboutUS;
