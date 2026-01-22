import React, { useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import Hero from "../HeroComponents/Hero";
import { useNavigation } from "../../context/NavigationContext";
import MaterialsSection from "./MaterialsSection";
import MedidaSection from "./MedidaSection";
import {
  PrecisionManufacturingIcon,
  FoundationIcon,
  FitnessCenterIcon,
  SettingsBackupRestoreIcon,
  TimelineIcon,
  ScienceIcon,
  HandymanIcon,
} from "../Icons";

const slugify = (text) => {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_")
    .replace(/[^\w\d_]/g, "");
};

const ICON_MAP = {
  "Al Carbono": <PrecisionManufacturingIcon />,
  Cementación: <FoundationIcon />,
  Resistencia: <FitnessCenterIcon />,
  Rodamientos: <SettingsBackupRestoreIcon />,
  "Alta elasticidad": <TimelineIcon />,
  Nituración: <ScienceIcon />,
  Herramientas: <HandymanIcon />,
};

const Materials = () => {
  const { title } = useParams();
  const { productsData, loading } = useNavigation();
  const { hash } = useLocation();

  const material = useMemo(() => {
    if (!productsData || loading) return null;

    const productosNode = productsData.find(
      (item) => item.label === "Productos",
    );
    const targetSlug = slugify(title);

    return productosNode?.children.find(
      (item) => slugify(item.label) === targetSlug,
    );
  }, [productsData, title, loading]);

  useEffect(() => {
    if (hash && material) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [hash, material]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">
          Cargando materiales...
        </div>
      </div>
    );
  }

  if (!material) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-3xl font-bold text-gray-800">
          Material no encontrado
        </h2>
      </div>
    );
  }

  const desktopHeroHeight = "380px";
  const mobileHeroHeight = "auto";
  const gruposAcero = material.children || [];
  const heroDescription = `Descubre nuestro catálogo de ${material.label.toLowerCase()} seleccionado para garantizar calidad y disponibilidad.`;

  return (
    <>
      <Hero
        title={material.label}
        description={heroDescription}
        desktopHeroHeight={desktopHeroHeight}
        mobileHeroHeight={mobileHeroHeight}
      />

      <main className="container mx-auto px-4 pb-8">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight uppercase">
            Selector de calidades
          </h2>
          <div className="w-16 h-1 bg-primary mb-4 mx-auto md:mx-0"></div>
        </div>

        <section className="space-y-12">
          {gruposAcero.map((grupo, index) => (
            <MaterialsSection
              key={grupo.id || `grupo-${index}`}
              grupo={grupo}
              iconName={ICON_MAP[grupo.label] || null}
            />
          ))}
        </section>
      </main>

      <MedidaSection />
    </>
  );
};

export default Materials;
