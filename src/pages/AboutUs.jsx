import Hero from "../components/HeroComponents/Hero";
const heroTile = "Compromiso, Calidad y Experiencia";
const heroDescription =
  "Conoce la historia de Almacenes Grau Bassas: especialistas en hierro, acero y plásticos técnicos al servicio de las islas desde 1959.";
const desktopHeroHeight = "440px";
const mobileHeroHeight = "auto";
const AboutUS = () => {
  return (
    <>
      <Hero
        title={heroTile}
        description={heroDescription}
        desktopHeroHeight={desktopHeroHeight}
        mobileHeroHeight={mobileHeroHeight}
      />
    </>
  );
};

export default AboutUS;
