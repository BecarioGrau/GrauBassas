import React, { useEffect } from "react";
import Hero from "../HeroComponents/Hero";
import { productsData } from "../../data/NavigationData";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import MaterialsSection from "./MaterialsSection";
import MedidaSection from "./MedidaSection";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import FoundationOutlinedIcon from "@mui/icons-material/FoundationOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import SettingsBackupRestoreOutlinedIcon from "@mui/icons-material/SettingsBackupRestoreOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";

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
  const navigate = useNavigate();
  const { title } = useParams();
  const productosNode = productsData.find((item) => item.label === "Productos");

  const material = productosNode?.children.find(
    (item) => slugify(item.label) === slugify(title)
  );

  if (!material) {
    return (
      <h2 className="flex justify-center items-center h-screen text-3xl font-bold text-gray-900">
        Material no encontrado
      </h2>
    );
  }

  const heroTile = material.label || "Titulo no encontrado";
  const heroDescription = `Descubre nuestro catálogo de ${material.label.toLowerCase()}, donde reunimos una amplia selección de calidades y aplicaciones pensadas para distintos sectores. Aquí encontrarás una muestra de los productos disponibles en nuestros almacenes, cuidadosamente seleccionados para garantizar calidad y disponibilidad. `;

  const materialData = productosNode?.children.find(
    (item) => item.label === material.label
  );
  const gruposAcero = materialData?.children || [];
  const iconMap = {
    "Al Carbono": <PrecisionManufacturingOutlinedIcon />,
    Cementación: <FoundationOutlinedIcon />,
    Resistencia: <FitnessCenterOutlinedIcon />,
    Rodamientos: <SettingsBackupRestoreOutlinedIcon />,
    "Alta elasticidad": <TimelineOutlinedIcon />,
    Nituración: <ScienceOutlinedIcon />,
    Herramientas: <HandymanOutlinedIcon />,
  };

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash, gruposAcero]);

  return (
    <>
      <Hero title={heroTile} description={heroDescription} />
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold">Selector de categorías</h2>
      </div>
      <div className="container mx-auto px-4 py-8">
        {gruposAcero.map((grupo, index) => {
          const iconName = iconMap[grupo.label] || "";

          return (
            <MaterialsSection key={index} grupo={grupo} iconName={iconName} />
          );
        })}
      </div>
      <MedidaSection />
    </>
  );
};
export default Materials;
