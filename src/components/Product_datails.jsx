import React, { useState } from 'react';
import ProductsDetailsHero from './ProductsDetailsHero';

const ProductPage = () => {
  // Estado para el tipo de corte seleccionado
  const [selectedCutType, setSelectedCutType] = useState('custom');

  // Estado para las dimensiones personalizadas
  const [customDimensions, setCustomDimensions] = useState({
    length: 24,
    width: 12
  });

  // Estado para la cantidad del producto
  const [quantity, setQuantity] = useState(1);

  // Estado para la imagen principal seleccionada
  const [mainImage, setMainImage] = useState(
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAKsGo4hvg1hx7nhA6m1zszOBXPT6TJwOtuH3pnvKA-zDaZyZWANrwFsYFG-x5Vvm20Ubq5P0x-Qg5nHMT05M8yBTFCZ0rAFyIpkVNW_EMG4xymmRIAQeizQrZNz9nIzT2o-M5GbFQaQTA1BaIDvfXodILgmfZwPdL7d6T68Z7RBUHSa6nHq95kMQXs7R_5Ecc1slf8RjZ7RPEMKDQdxHl7AsH7gRhOvszmBrRUd96qzShXvGxSFi1qdGdGN8yDRO4TG90B8QCcoiW6'
  );

  //Cortes disponibles
  const cortes = [
    {
      id: 1,
      label: 'Maziso',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeRG5RbQWugsVNcludm6LB_R3egwLO3bsZujCXgFUk-zvBjVNgu7NUaNiftVSdXhR7re94h85qhW948UhhIS_pb3HSPiCoG40_PJv4l1tXsTf7LP22L0bPlI4_syHXR4G7Hnz5bRhwUW4ELEMzYXgOuG3f4gtLCFh6xMHWtvqaPKFyfs7VVaIV_4TOOn5NFnsyz0HW1ELupoBOvQEcD0eMeEhuVqizajPMA01h1z-2EvzOQREhsB-qnUmUC-KdfUTmQKMhDKzv9LKS',
      alt: 'Close up of brushed aluminum metal sheet'
    },
    {
      id: 2,
      label: 'Chapa',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmQLmBiWBCNfci0bwcxKGzYv1PWBH1iOyCuNZEsGjAiB9q6m1_yg7WHVTcfevQuewzd3l8AKP5EKZCa1Q90aHxgUiApYGZmoKGObrZlFgJdX_PrQB_a4Uqmz4-exeBMh0zF7EC80ZfMvTqDxfvtOaPFnOtMKvSU6wFmn9h3kjyOZMj7HlK6lBFB9c7AbpaFasuZoDOLixEK4q2XUFu5yRJD-BU-2KWLw426ugSuJP-xnAf6s7QTOo8zXwcRsxVeEWeHCrNWrV9Kc92',
      alt: 'Stack of aluminum sheets in industrial warehouse'
    },
    {
      id: 3,
      label: 'Ángulo',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMJ5-HtUNFlHeNLzpWMEg61Y7rlk_zFSg_kE2UzBv7j0l-pC7rgQcIUNRc0wFc2prPU2tSD8Vbezbvq3ARk48JsXKBB2gWM9vbRvp16MQa6WqTfJZG2x1xn3BzXLDDuxhzrM03meBgvHYbvUhAfAgPNmaXMh1nwazSP1v6CKnc8KAGa6GAevs3QynGm9S1SdRYaSEBd60im_gE0KTpEsNFToPQrgg7bezYblZiqMskY-wgF6h8vTJ3iqRgWsXKPe9o2Q5oe0ovNcp4',
      alt: 'Worker measuring aluminum sheet dimensions'
    },
    {
      id: 4,
      label: 'Cuadrado',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA264JCnJCUrE4IzS4ctV-e-wxbCEFJFKrtcK3Y_CKXeqn6XoOevE41vReZVIujGEzCTfIJrWUyGZkG7ljUWAs8KFPInfBsU0KAi5__MDIl1rrUENDNdXrLcxXY25j_3ZUAkUv--FHLezgMI6doB9LQUn196PBIFIfbwjSFuLb4lfyjTc4McldMe5dxzkTZgKNos3lM8yaZZVoPtNt48yYaH1Zwv44yMYADzp9ashriZaYDN4U7eZ1xVEjYPKlVYRMKV3rb1MkNMbnl',
      alt: 'Technical drawing blueprint of metal part'
    }
  ];

  const description = 'Lorem ipsum dolor sit amet consectetur adipiscing elit donec, imperdiet fusce eleifend condimentum dictumst mus ultricies hac gravida, erat aliquam tempus montes vestibulum senectus primis.';

  // Tabla técnica (calidad, composición, equivalencias, características mecánicas)
  const materialTable = [
    {
      quality: 'F-1110',
      composition: { C: '0.10', Mn: '0.40', Si: '0.15', Cr: '—', Ni: '—', Mo: '—', V: '—', WNr: '1.1141' },
      equivalents: { DIN: '1.1141', AISI: 'CK-15', SAE: '1015' },
    },
  ];

  // Handlers
  const handleCutTypeChange = (cutType) => {
    setSelectedCutType(cutType);
  };

  const handleDimensionChange = (field, value) => {
    setCustomDimensions(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleThumbnailClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (

    <main className="layout-container flex h-full grow flex-col  ">
      <ProductsDetailsHero />
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 py-4">
        <a className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
          Portada
        </a>
        <span className="text-[#617589] dark:text-gray-600 text-sm font-medium leading-normal">/</span>
        <a className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
          Calidades
        </a>
        <span className="text-[#617589] dark:text-gray-600 text-sm font-medium leading-normal">/</span>
        <a className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
          F-1110
        </a>
        <span className="text-[#617589] dark:text-gray-600 text-sm font-medium leading-normal">/</span>
      </div>

      <section className="">
            <div className="container mx-auto px-6 justify-center items-center">
              <div className="mb-10 text-center">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900  mb-4 tracking-tight ">Catálogo de Cortes</h2>
              </div>
      
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cortes.map((corte) => (
                  <a key={corte} className="h-[200px] group relative flex flex-col bg-surface-light rounded-xl overflow-hidden border border-border-light hover:border-primary/50 hover:shadow-lg hover:text-white hover:bg-primary transition-all duration-300" href={corte.url}>
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${corte.image})` }} />
                    </div>
                    <div className="p-1 flex flex-col gap-1">
                      <div className="flex justify-center items-center">
                        <h3 className="text-lg font-bold text-text-main">{corte.label}</h3>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

      {/* Technical Specs Section   */}
      <div className="my-20 max-w-5xl bg-white justify-center mx-auto ">
        <h3 className="text-2xl font-bold text-[#111418] mb-6 dark:text-gray-900">Technical Specifications</h3>
        <div className="overflow-x-auto rounded-xl border border-[#f0f2f4] dark:border-[#2a3441] dark:bg-[#1e2936]">
          <table className="min-w-full text-sm text-left divide-y divide-[#f0f2f4] dark:divide-[#2a3441]">
            <thead className="bg-[#fafbfd] dark:bg-[#111827] border-1">
              <tr className='border-1 border-white'>
                <th rowSpan={2} className="px-4 py-3 text-left font-semibold text-[#111418] dark:text-white border-1 border-white">CALIDAD</th>
                <th colSpan={8} className="px-4 py-3 text-center font-semibold text-[#111418] dark:text-white border-1 border-white ">COMPOSICIÓN</th>
                <th colSpan={3} className="px-4 py-3 text-center font-semibold text-[#111418] dark:text-white border-1 border-white">EQUIVALENCIAS</th>
              </tr>
              <tr>
                <th className="px-3 py-2 font-medium text-gray-600 dark:text-gray-300 border-1 border-white">C</th>
                <th className="px-3 py-2 font-medium text-gray-600 dark:text-gray-300 border-1 border-white">Mn</th>
                <th className="px-3 py-2 font-medium text-gray-600 dark:text-gray-300 border-1 border-white">Si</th>
                <th className="px-3 py-2 font-medium text-gray-600 dark:text-gray-300 border-1 border-white">Cr</th>
                <th className="px-3 py-2 font-medium text-gray-600 dark:text-gray-300 border-1 border-white">Ni</th>
                <th className="px-3 py-2 font-medium text-gray-600 dark:text-gray-300 border-1 border-white">Mo</th>
                <th className="px-3 py-2 font-medium text-gray-600 dark:text-gray-300 border-1 border-white">V</th>
                <th className="px-3 py-2 font-medium text-gray-600 dark:text-gray-300 border-1 border-white">W.-Nr.</th>

                <th className="px-3 py-2 font-medium text-gray-600 dark:text-gray-300 border-1 border-white">DIN</th>
                <th className="px-3 py-2 font-medium text-gray-600 dark:text-gray-300 border-1 border-white">AISI</th>
                <th className="px-3 py-2 font-medium text-gray-600 dark:text-gray-300 border-1 border-white">SAE</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#f0f2f4] dark:divide-[#2a3441]">
              {materialTable.map((row, idx) => (
                <tr key={row.quality + idx} className="hover:bg-gray-50 dark:hover:bg-[#2a3441]/50">
                  <td className="px-4 py-3 font-semibold text-[#111418] dark:text-white border-1 border-white">{row.quality}</td>

                  <td className="px-3 py-2 text-gray-600 dark:text-gray-300 border-1 border-white">{row.composition.C}</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-300 border-1 border-white">{row.composition.Mn}</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-300 border-1 border-white">{row.composition.Si}</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-300 border-1 border-white">{row.composition.Cr}</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-300 border-1 border-white">{row.composition.Ni}</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-300 border-1 border-white">{row.composition.Mo}</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-300 border-1 border-white">{row.composition.V}</td>
                  <td className="px-4 py-2 text-gray-600 dark:text-gray-300 border-1 border-white">{row.composition.WNr}</td>

                  <td className="px-3 py-2 text-gray-600 dark:text-gray-300 border-1 border-white">{row.equivalents.DIN}</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-300 border-1 border-white">{row.equivalents.AISI}</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-300 border-1 border-white">{row.equivalents.SAE}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;