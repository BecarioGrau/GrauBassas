import React, { useEffect } from "react";
import Hero from "../HeroComponents/Hero";
import { useNavigation } from "../../context/NavigationContext"; // Contexto
import { useLocation, useParams } from "react-router-dom";
import MaterialsSection from "./MaterialsSection";
import MedidaSection from "./MedidaSection";
import {
  PrecisionManufacturingOutlined,
  FoundationOutlined,
  FitnessCenterOutlined,
  SettingsBackupRestoreOutlined,
  TimelineOutlined,
  ScienceOutlined,
  HandymanOutlined,
} from "@mui/icons-material";

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

const Materials = () => {
  const { title } = useParams();
  const { productsData, loading } = useNavigation();
  const { hash } = useLocation();

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        Cargando materiales...
      </div>
    );

  const productosNode = productsData.find((item) => item.label === "Productos");
  const material = productosNode?.children.find(
    (item) => slugify(item.label) === slugify(title)
  );

  if (!material) {
    return (
      <h2 className="flex justify-center items-center h-screen text-3xl font-bold">
        Material no encontrado
      </h2>
    );
  }

  const heroTile = material.label;
  const heroDescription = `Descubre nuestro catálogo de ${material.label.toLowerCase()} seleccionado para garantizar calidad y disponibilidad.`;

  const gruposAcero = material.children || [];

  const iconMap = {
    "Al Carbono": <PrecisionManufacturingOutlined />,
    Cementación: <FoundationOutlined />,
    Resistencia: <FitnessCenterOutlined />,
    Rodamientos: <SettingsBackupRestoreOutlined />,
    "Alta elasticidad": <TimelineOutlined />,
    Nituración: <ScienceOutlined />,
    Herramientas: <HandymanOutlined />,
  };

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash, gruposAcero]);

  return (
    <>
      <Hero title={heroTile} description={heroDescription} />
      <div className="flex items-center justify-center py-8">
        <h2 className="text-4xl font-bold">Selector de categorías</h2>
      </div>
      <div className="container mx-auto px-4 py-8">
        {gruposAcero.map((grupo, index) => (
          <MaterialsSection
            key={index}
            grupo={grupo}
            iconName={iconMap[grupo.label] || ""}
          />
        ))}
      </div>
      <MedidaSection />
    </>
  );
};
export default Materials;
