import React, { useState } from 'react';

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

  // Miniaturas de imágenes
  const thumbnails = [
    {
      id: 1,
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeRG5RbQWugsVNcludm6LB_R3egwLO3bsZujCXgFUk-zvBjVNgu7NUaNiftVSdXhR7re94h85qhW948UhhIS_pb3HSPiCoG40_PJv4l1tXsTf7LP22L0bPlI4_syHXR4G7Hnz5bRhwUW4ELEMzYXgOuG3f4gtLCFh6xMHWtvqaPKFyfs7VVaIV_4TOOn5NFnsyz0HW1ELupoBOvQEcD0eMeEhuVqizajPMA01h1z-2EvzOQREhsB-qnUmUC-KdfUTmQKMhDKzv9LKS',
      alt: 'Close up of brushed aluminum metal sheet'
    },
    {
      id: 2,
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmQLmBiWBCNfci0bwcxKGzYv1PWBH1iOyCuNZEsGjAiB9q6m1_yg7WHVTcfevQuewzd3l8AKP5EKZCa1Q90aHxgUiApYGZmoKGObrZlFgJdX_PrQB_a4Uqmz4-exeBMh0zF7EC80ZfMvTqDxfvtOaPFnOtMKvSU6wFmn9h3kjyOZMj7HlK6lBFB9c7AbpaFasuZoDOLixEK4q2XUFu5yRJD-BU-2KWLw426ugSuJP-xnAf6s7QTOo8zXwcRsxVeEWeHCrNWrV9Kc92',
      alt: 'Stack of aluminum sheets in industrial warehouse'
    },
    {
      id: 3,
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMJ5-HtUNFlHeNLzpWMEg61Y7rlk_zFSg_kE2UzBv7j0l-pC7rgQcIUNRc0wFc2prPU2tSD8Vbezbvq3ARk48JsXKBB2gWM9vbRvp16MQa6WqTfJZG2x1xn3BzXLDDuxhzrM03meBgvHYbvUhAfAgPNmaXMh1nwazSP1v6CKnc8KAGa6GAevs3QynGm9S1SdRYaSEBd60im_gE0KTpEsNFToPQrgg7bezYblZiqMskY-wgF6h8vTJ3iqRgWsXKPe9o2Q5oe0ovNcp4',
      alt: 'Worker measuring aluminum sheet dimensions'
    },
    {
      id: 4,
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA264JCnJCUrE4IzS4ctV-e-wxbCEFJFKrtcK3Y_CKXeqn6XoOevE41vReZVIujGEzCTfIJrWUyGZkG7ljUWAs8KFPInfBsU0KAi5__MDIl1rrUENDNdXrLcxXY25j_3ZUAkUv--FHLezgMI6doB9LQUn196PBIFIfbwjSFuLb4lfyjTc4McldMe5dxzkTZgKNos3lM8yaZZVoPtNt48yYaH1Zwv44yMYADzp9ashriZaYDN4U7eZ1xVEjYPKlVYRMKV3rb1MkNMbnl',
      alt: 'Technical drawing blueprint of metal part'
    }
  ];

  const description = 'Lorem ipsum dolor sit amet consectetur adipiscing elit donec, imperdiet fusce eleifend condimentum dictumst mus ultricies hac gravida, erat aliquam tempus montes vestibulum senectus primis.';

  // Opciones de corte
  const cutOptions = [
    {
      id: 'full',
      title: 'Full Sheet (48" x 96")',
      description: 'Standard factory size. Unfinished edges.',
      active: false
    },
    
    {
      id: 'custom',
      title: 'Custom Cut',
      description: 'Specify your exact dimensions.',
      active: true
    }
  ];

  // Tabla técnica (calidad, composición, equivalencias, características mecánicas)
  const materialTable = [
    {
      quality: 'F-1110',
      composition: { C: '0.10', Mn: '0.40', Si: '0.15', Cr: '—', Ni: '—', Mo: '—', V: '—', WNr: '1.1141' },
      equivalents: { DIN: '1.1141', AISI: 'CK-15', SAE: '1015' },
      mech: { estado: 'Normalizado', s_le_16: '225-275', '16_40': '210-240', '40_100': '200-230', '100_160': '190-220', gt_160: '180-210' }
    },
  ];

  // Productos relacionados
  const relatedProducts = [
    {
      id: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-nGkB8yiKpAexw3zkFps-qR-jxC-l6GTikKgeeXZn6YygDdGUUUTBRT5-kUYp_5mnFN3FafZPsHIF8UTj6JPLYyu5IhP6a8zvISOWPGchPsO3MYARsVmkcWg65dLJzPKNPkHgx9EQSI117CgifTnCObx_sta-Xqw-JoRd7VP7b8OhRZL5J7GJtcNJOIJvG5NSDNlF-gQjBlsRH3hgvQgz9m2N1DqedqrDhM6iTuZT_Xdl0whZiM5S0dUHfziFN2VGMiH4FB9fUeDC',
      category: 'Steel',
      title: '304 Stainless Bar',
    },
    {
      id: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAepUw_m5H73af0wZxRndMjW7OqAqHtdc_tJr_QSUjujfjogvYuG6ZL7JDpH3LTdjQbJiC8-cmuuG1nECwY6YkdGK5eCpqgmcB6SSEVX9Q1uBNp0c0bW-kVHYD9w34GtnwqBTFnuZEuEf64W0diKLtCpZh2rQLbQMTUCmG8Z16SVtx9dA8lm4l2T-iSUUShJZkNsCyeBBsX9oGu900orgzqCLnt_rEXIHbXl6oCHiR9WOKEvqIOMrdsCDTItW-WFp5tm9b3xOlkB06k',
      category: 'Copper',
      title: 'C110 Copper Sheet',
    },
    {
      id: 3,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4BqK-i-ktB7Li5RxO_X08MDzzbTnmHgLe_sB0uAEc_PPFpzQr1ztLvACang7gr56TwmTyxvsRBH1flOc873YPB2ZhzL7HjPKDaFIMTZJjvnzVltq2SVCjZsNlHfJLMsF5W0HtuUHdtAYw10-gzJ_bsYEVu8smvCrsAjYjH3pT2QcTr-_5Cl5PS32r_TNi6f-Cpw-txe8pT4tS6avuhDjLA72gU_C2O9oc3W270_o-a61kI7wR7RUhO9Yw0ceyJH4_ZIlmiSKeyWE8',
      category: 'Brass',
      title: '360 Brass Hex Bar',
    }
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
    <main className="layout-container flex h-full grow flex-col py-5 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 py-4">
        <a className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
          Home
        </a>
        <span className="text-[#617589] dark:text-gray-600 text-sm font-medium leading-normal">/</span>
        <a className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
          Materials
        </a>
        <span className="text-[#617589] dark:text-gray-600 text-sm font-medium leading-normal">/</span>
        <a className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
          Aluminum
        </a>
        <span className="text-[#617589] dark:text-gray-600 text-sm font-medium leading-normal">/</span>
        <span className="text-[#111418] dark:text-white text-sm font-medium leading-normal">6061-T6 Sheet</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-4">
        {/* Left Column: Images */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="w-full aspect-[4/3] bg-white dark:bg-[#1e2936] rounded-xl overflow-hidden border border-[#f0f2f4] dark:border-[#2a3441] shadow-sm relative group">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${mainImage}')` }}
              alt="Close up of brushed aluminum metal sheet surface showing texture"
            ></div>
          </div>

          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {thumbnails.map((thumb) => (
              <button
                key={thumb.id}
                onClick={() => handleThumbnailClick(thumb.url)}
                className={`flex-none w-24 h-24 rounded-lg overflow-hidden border-2 ${mainImage === thumb.url ? 'border-primary ring-2 ring-primary/20' : 'border-[#f0f2f4] dark:border-[#2a3441] hover:border-primary/50'} transition-colors`}
              >
                <div
                  className="w-full h-full bg-center bg-cover"
                  style={{ backgroundImage: `url('${thumb.url}')` }}
                  alt={thumb.alt}
                >
                  <p>
                    <span className="sr-only text-primary">{thumb.alt}</span>
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* this is the main div for details section  */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-bold dark:text-gray-900">F-1110</span>
            </div>
            <p className="text-[#617589] dark:text-gray-600 text-base font-normal leading-relaxed">
              {description}
            </p>
          </div>

          <div className="h-px bg-[#f0f2f4] dark:bg-[#2a3441] w-full"></div>


        </div>
      </div>

      {/* Technical Specs Section   */}
      <div className="mt-2 max-w-5xl bg-white justify-center mx-auto ">
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