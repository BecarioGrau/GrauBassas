import React, { useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import Hero from "../HeroComponents/Hero";
import { useNavigation } from "../../context/NavigationContext";
import MaterialsSection from "./MaterialsSection";
import MedidaSection from "./MedidaSection";

import PrecisionManufacturingOutlined from "@mui/icons-material/PrecisionManufacturingOutlined";
import FoundationOutlined from "@mui/icons-material/FoundationOutlined";
import FitnessCenterOutlined from "@mui/icons-material/FitnessCenterOutlined";
import SettingsBackupRestoreOutlined from "@mui/icons-material/SettingsBackupRestoreOutlined";
import TimelineOutlined from "@mui/icons-material/TimelineOutlined";
import ScienceOutlined from "@mui/icons-material/ScienceOutlined";
import HandymanOutlined from "@mui/icons-material/HandymanOutlined";

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
  "Al Carbono": <PrecisionManufacturingOutlined />,
  Cementación: <FoundationOutlined />,
  Resistencia: <FitnessCenterOutlined />,
  Rodamientos: <SettingsBackupRestoreOutlined />,
  "Alta elasticidad": <TimelineOutlined />,
  Nituración: <ScienceOutlined />,
  Herramientas: <HandymanOutlined />,
};

const Materials = () => {
  const { title } = useParams();
  const { productsData, loading } = useNavigation();
  const { hash } = useLocation();

  const material = useMemo(() => {
    if (!productsData || loading) return null;

    const productosNode = productsData.find(
      (item) => item.label === "Productos"
    );
    const targetSlug = slugify(title);

    return productosNode?.children.find(
      (item) => slugify(item.label) === targetSlug
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
  const mobileHeroHeight = "360px";
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
        <header className="flex items-center justify-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Selector de calidades
          </h2>
        </header>

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
