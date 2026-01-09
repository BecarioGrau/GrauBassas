export const acerosData = [
  //Al Carbono
  {
    id: 1,
    title: "F-1110",
    description:
      "Calidad de acero F-1110 pertenece a la categoría de aceros al carbono de construcción, específicamente de bajo contenido en carbono.Este acero se utiliza comúnmente para piezas que requieren buena tenacidad y facilidad de soldadura, como clavos, alambres, herrajes y piezas para embutición en frío o plegado",
    tableConfig: {
      columns: [
        {
          header: "Calidad",
          key: "quality",
          rowSpan: 2,
        },
        {
          header: "Composición",
          colSpan: 7,
          subColumns: [
            { header: "C", key: "c" },
            { header: "Mn", key: "mn" },
            { header: "Si", key: "si" },
            { header: "Cr", key: "cr" },
            { header: "Ni", key: "ni" },
            { header: "Mo", key: "mo" },
            { header: "V", key: "v" },
          ],
        },
        {
          header: "Equivalencias",
          colSpan: 3,
          subColumns: [
            { header: "W.-Nr.", key: "wnr" },
            { header: "DIN", key: "din" },
            { header: "AISI/SAE", key: "aisi" },
          ],
        },
      ],
      rows: [
        {
          quality: "F-1110",
          c: ["0.10", "0.20"],
          mn: ["0.40", "0.70"],
          si: ["0.15", "0.40"],
          cr: "—",
          ni: "—",
          mo: "—",
          v: "—",
          wnr: "1.1141",
          din: "CK-15",
          aisi: "1015",
        },
      ],
    },
    cortes: [
      {
        label: "Macizo",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCeRG5RbQWugsVNcludm6LB_R3egwLO3bsZujCXgFUk-zvBjVNgu7NUaNiftVSdXhR7re94h85qhW948UhhIS_pb3HSPiCoG40_PJv4l1tXsTf7LP22L0bPlI4_syHXR4G7Hnz5bRhwUW4ELEMzYXgOuG3f4gtLCFh6xMHWtvqaPKFyfs7VVaIV_4TOOn5NFnsyz0HW1ELupoBOvQEcD0eMeEhuVqizajPMA01h1z-2EvzOQREhsB-qnUmUC-KdfUTmQKMhDKzv9LKS",
      },
      {
        label: "Chapa",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAmQLmBiWBCNfci0bwcxKGzYv1PWBH1iOyCuNZEsGjAiB9q6m1_yg7WHVTcfevQuewzd3l8AKP5EKZCa1Q90aHxgUiApYGZmoKGObrZlFgJdX_PrQB_a4Uqmz4-exeBMh0zF7EC80ZfMvTqDxfvtOaPFnOtMKvSU6wFmn9h3kjyOZMj7HlK6lBFB9c7AbpaFasuZoDOLixEK4q2XUFu5yRJD-BU-2KWLw426ugSuJP-xnAf6s7QTOo8zXwcRsxVeEWeHCrNWrV9Kc92",
      },
      {
        label: "Ángulo",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMJ5-HtUNFlHeNLzpWMEg61Y7rlk_zFSg_kE2UzBv7j0l-pC7rgQcIUNRc0wFc2prPU2tSD8Vbezbvq3ARk48JsXKBB2gWM9vbRvp16MQa6WqTfJZG2x1xn3BzXLDDuxhzrM03meBgvHYbvUhAfAgPNmaXMh1nwazSP1v6CKnc8KAGa6GAevs3QynGm9S1SdRYaSEBd60im_gE0KTpEsNFToPQrgg7bezYblZiqMskY-wgF6h8vTJ3iqRgWsXKPe9o2Q5oe0ovNcp4",
      },
      {
        label: "Cuadrado",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA264JCnJCUrE4IzS4ctV-e-wxbCEFJFKrtcK3Y_CKXeqn6XoOevE41vReZVIujGEzCTfIJrWUyGZkG7ljUWAs8KFPInfBsU0KAi5__MDIl1rrUENDNdXrLcxXY25j_3ZUAkUv--FHLezgMI6doB9LQUn196PBIFIfbwjSFuLb4lfyjTc4McldMe5dxzkTZgKNos3lM8yaZZVoPtNt48yYaH1Zwv44yMYADzp9ashriZaYDN4U7eZ1xVEjYPKlVYRMKV3rb1MkNMbnl",
      },
    ],
  },
  {
    id: 2,
    title: "F-1120",
    description:
      "El acero F-1120 es un acero al carbono con mayor contenido de carbono que el F-1110, lo que permite aplicarle tratamientos térmicos como templado y revenido. Presenta buena soldabilidad y buena capacidad de embutición y plegado, por lo que se utiliza en la fabricación de piezas de maquinaria, tornillos, tuercas y bridas.",
    tableConfig: {
      columns: [
        {
          header: "Calidad",
          key: "quality",
          rowSpan: 2,
        },
        {
          header: "Composición",
          colSpan: 8,
          subColumns: [
            { header: "C", key: "c" },
            { header: "Mn", key: "mn" },
            { header: "Si", key: "si" },
            { header: "Cr", key: "cr" },
            { header: "Ni", key: "ni" },
            { header: "Mo", key: "mo" },
            { header: "V", key: "v" },
          ],
        },
        {
          header: "Equivalencias",
          colSpan: 3,
          subColumns: [
            { header: "W.-Nr.", key: "wnr" },
            { header: "DIN", key: "din" },
            { header: "AISI/SAE", key: "aisi" },
          ],
        },
      ],
      rows: [
        {
          quality: "F-1120",
          c: ["0.20", "0.30"],
          mn: ["0.50", "0.80"],
          si: ["0.15", "0.40"],
          cr: "—",
          ni: "—",
          mo: "—",
          v: "—",
          wnr: "1.1158",
          din: "CK-25",
          aisi: "1025",
        },
      ],
    },
    cortes: [
      {
        label: "Macizo",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCeRG5RbQWugsVNcludm6LB_R3egwLO3bsZujCXgFUk-zvBjVNgu7NUaNiftVSdXhR7re94h85qhW948UhhIS_pb3HSPiCoG40_PJv4l1tXsTf7LP22L0bPlI4_syHXR4G7Hnz5bRhwUW4ELEMzYXgOuG3f4gtLCFh6xMHWtvqaPKFyfs7VVaIV_4TOOn5NFnsyz0HW1ELupoBOvQEcD0eMeEhuVqizajPMA01h1z-2EvzOQREhsB-qnUmUC-KdfUTmQKMhDKzv9LKS",
      },
      {
        label: "Chapa",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAmQLmBiWBCNfci0bwcxKGzYv1PWBH1iOyCuNZEsGjAiB9q6m1_yg7WHVTcfevQuewzd3l8AKP5EKZCa1Q90aHxgUiApYGZmoKGObrZlFgJdX_PrQB_a4Uqmz4-exeBMh0zF7EC80ZfMvTqDxfvtOaPFnOtMKvSU6wFmn9h3kjyOZMj7HlK6lBFB9c7AbpaFasuZoDOLixEK4q2XUFu5yRJD-BU-2KWLw426ugSuJP-xnAf6s7QTOo8zXwcRsxVeEWeHCrNWrV9Kc92",
      },
      {
        label: "Ángulo",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMJ5-HtUNFlHeNLzpWMEg61Y7rlk_zFSg_kE2UzBv7j0l-pC7rgQcIUNRc0wFc2prPU2tSD8Vbezbvq3ARk48JsXKBB2gWM9vbRvp16MQa6WqTfJZG2x1xn3BzXLDDuxhzrM03meBgvHYbvUhAfAgPNmaXMh1nwazSP1v6CKnc8KAGa6GAevs3QynGm9S1SdRYaSEBd60im_gE0KTpEsNFToPQrgg7bezYblZiqMskY-wgF6h8vTJ3iqRgWsXKPe9o2Q5oe0ovNcp4",
      },
    ],
  },
  {
    id: 3,
    title: "F-1130",
    description:
      "El acero F-1130 es un acero al carbono de resistencia media, con un contenido de carbono aproximado del 0,30–0,40 %. Ofrece un buen equilibrio entre resistencia y tenacidad, y admite tratamientos térmicos como temple y revenido. Se utiliza en piezas de maquinaria y componentes mecánicos sometidos a esfuerzos moderados.",
    tableConfig: {
      columns: [
        {
          header: "Calidad",
          key: "quality",
          rowSpan: 2,
        },
        {
          header: "Composición",
          colSpan: 8,
          subColumns: [
            { header: "C", key: "c" },
            { header: "Mn", key: "mn" },
            { header: "Si", key: "si" },
            { header: "Cr", key: "cr" },
            { header: "Ni", key: "ni" },
            { header: "Mo", key: "mo" },
            { header: "V", key: "v" },
          ],
        },
        {
          header: "Equivalencias",
          colSpan: 3,
          subColumns: [
            { header: "W.-Nr.", key: "wnr" },
            { header: "DIN", key: "din" },
            { header: "AISI/SAE", key: "aisi" },
          ],
        },
      ],
      rows: [
        {
          quality: "F-1130",
          c: ["0.30", "0.40"],
          mn: ["0.50", "0.80"],
          si: ["0.10", "0.20"],
          cr: "—",
          ni: "—",
          mo: "—",
          v: "—",
          wnr: "1.1181",
          din: "CK-35",
          aisi: "1035",
        },
      ],
    },
    cortes: [
      {
        label: "Macizo",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCeRG5RbQWugsVNcludm6LB_R3egwLO3bsZujCXgFUk-zvBjVNgu7NUaNiftVSdXhR7re94h85qhW948UhhIS_pb3HSPiCoG40_PJv4l1tXsTf7LP22L0bPlI4_syHXR4G7Hnz5bRhwUW4ELEMzYXgOuG3f4gtLCFh6xMHWtvqaPKFyfs7VVaIV_4TOOn5NFnsyz0HW1ELupoBOvQEcD0eMeEhuVqizajPMA01h1z-2EvzOQREhsB-qnUmUC-KdfUTmQKMhDKzv9LKS",
      },
      {
        label: "Chapa",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAmQLmBiWBCNfci0bwcxKGzYv1PWBH1iOyCuNZEsGjAiB9q6m1_yg7WHVTcfevQuewzd3l8AKP5EKZCa1Q90aHxgUiApYGZmoKGObrZlFgJdX_PrQB_a4Uqmz4-exeBMh0zF7EC80ZfMvTqDxfvtOaPFnOtMKvSU6wFmn9h3kjyOZMj7HlK6lBFB9c7AbpaFasuZoDOLixEK4q2XUFu5yRJD-BU-2KWLw426ugSuJP-xnAf6s7QTOo8zXwcRsxVeEWeHCrNWrV9Kc92",
      },
      {
        label: "Ángulo",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMJ5-HtUNFlHeNLzpWMEg61Y7rlk_zFSg_kE2UzBv7j0l-pC7rgQcIUNRc0wFc2prPU2tSD8Vbezbvq3ARk48JsXKBB2gWM9vbRvp16MQa6WqTfJZG2x1xn3BzXLDDuxhzrM03meBgvHYbvUhAfAgPNmaXMh1nwazSP1v6CKnc8KAGa6GAevs3QynGm9S1SdRYaSEBd60im_gE0KTpEsNFToPQrgg7bezYblZiqMskY-wgF6h8vTJ3iqRgWsXKPe9o2Q5oe0ovNcp4",
      },
    ],
  },
  {
    id: 4,
    title: "F-1140",
    description:
      "El acero F-1140 es un acero al carbono de resistencia media-alta, con alrededor de 0,45 % de carbono. Puede ser templado y revenido para mejorar su dureza y resistencia mecánica. Es común en la fabricación de ejes, engranajes y tornillería de alta resistencia.",
    tableConfig: {
      columns: [
        {
          header: "Calidad",
          key: "quality",
          rowSpan: 2,
        },
        {
          header: "Composición",
          colSpan: 8,
          subColumns: [
            { header: "C", key: "c" },
            { header: "Mn", key: "mn" },
            { header: "Si", key: "si" },
            { header: "Cr", key: "cr" },
            { header: "Ni", key: "ni" },
            { header: "Mo", key: "mo" },
            { header: "V", key: "v" },
          ],
        },
        {
          header: "Equivalencias",
          colSpan: 3,
          subColumns: [
            { header: "W.-Nr.", key: "wnr" },
            { header: "DIN", key: "din" },
            { header: "AISI/SAE", key: "aisi" },
          ],
        },
      ],
      rows: [
        {
          quality: "F-1140",
          c: ["0.40", "0.50"],
          mn: ["0.50", "0.80"],
          si: ["0.15", "0.40"],
          cr: "—",
          ni: "—",
          mo: "—",
          v: "—",
          wnr: "1.1191",
          din: "CK-45",
          aisi: "1045",
        },
      ],
    },
    cortes: [
      {
        label: "Macizo",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCeRG5RbQWugsVNcludm6LB_R3egwLO3bsZujCXgFUk-zvBjVNgu7NUaNiftVSdXhR7re94h85qhW948UhhIS_pb3HSPiCoG40_PJv4l1tXsTf7LP22L0bPlI4_syHXR4G7Hnz5bRhwUW4ELEMzYXgOuG3f4gtLCFh6xMHWtvqaPKFyfs7VVaIV_4TOOn5NFnsyz0HW1ELupoBOvQEcD0eMeEhuVqizajPMA01h1z-2EvzOQREhsB-qnUmUC-KdfUTmQKMhDKzv9LKS",
      },
      {
        label: "Chapa",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAmQLmBiWBCNfci0bwcxKGzYv1PWBH1iOyCuNZEsGjAiB9q6m1_yg7WHVTcfevQuewzd3l8AKP5EKZCa1Q90aHxgUiApYGZmoKGObrZlFgJdX_PrQB_a4Uqmz4-exeBMh0zF7EC80ZfMvTqDxfvtOaPFnOtMKvSU6wFmn9h3kjyOZMj7HlK6lBFB9c7AbpaFasuZoDOLixEK4q2XUFu5yRJD-BU-2KWLw426ugSuJP-xnAf6s7QTOo8zXwcRsxVeEWeHCrNWrV9Kc92",
      },
      {
        label: "Ángulo",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMJ5-HtUNFlHeNLzpWMEg61Y7rlk_zFSg_kE2UzBv7j0l-pC7rgQcIUNRc0wFc2prPU2tSD8Vbezbvq3ARk48JsXKBB2gWM9vbRvp16MQa6WqTfJZG2x1xn3BzXLDDuxhzrM03meBgvHYbvUhAfAgPNmaXMh1nwazSP1v6CKnc8KAGa6GAevs3QynGm9S1SdRYaSEBd60im_gE0KTpEsNFToPQrgg7bezYblZiqMskY-wgF6h8vTJ3iqRgWsXKPe9o2Q5oe0ovNcp4",
      },
    ],
  },
  {
    id: 5,
    title: "F-1150",
    description:
      "El acero F-1150 es un acero al carbono de alto contenido de carbono, cercano al 0,55 %. Tras tratamiento térmico presenta elevada dureza y resistencia al desgaste. Se emplea en ejes, transmisiones y componentes sometidos a cargas elevadas.",
    tableConfig: {
      columns: [
        {
          header: "Calidad",
          key: "quality",
          rowSpan: 2,
        },
        {
          header: "Composición",
          colSpan: 8,
          subColumns: [
            { header: "C", key: "c" },
            { header: "Mn", key: "mn" },
            { header: "Si", key: "si" },
            { header: "Cr", key: "cr" },
            { header: "Ni", key: "ni" },
            { header: "Mo", key: "mo" },
            { header: "V", key: "v" },
          ],
        },
        {
          header: "Equivalencias",
          colSpan: 3,
          subColumns: [
            { header: "W.-Nr.", key: "wnr" },
            { header: "DIN", key: "din" },
            { header: "AISI/SAE", key: "aisi" },
          ],
        },
      ],
      rows: [
        {
          quality: "F-1150",
          c: ["0.50", "0.60"],
          mn: ["0.60", "0.90"],
          si: ["0.15", "0.40"],
          cr: "—",
          ni: "—",
          mo: "—",
          v: "—",
          wnr: "1.1203",
          din: "CK-55",
          aisi: "1055",
        },
      ],
    },
    cortes: [
      {
        label: "Macizo",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCeRG5RbQWugsVNcludm6LB_R3egwLO3bsZujCXgFUk-zvBjVNgu7NUaNiftVSdXhR7re94h85qhW948UhhIS_pb3HSPiCoG40_PJv4l1tXsTf7LP22L0bPlI4_syHXR4G7Hnz5bRhwUW4ELEMzYXgOuG3f4gtLCFh6xMHWtvqaPKFyfs7VVaIV_4TOOn5NFnsyz0HW1ELupoBOvQEcD0eMeEhuVqizajPMA01h1z-2EvzOQREhsB-qnUmUC-KdfUTmQKMhDKzv9LKS",
      },
      {
        label: "Chapa",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAmQLmBiWBCNfci0bwcxKGzYv1PWBH1iOyCuNZEsGjAiB9q6m1_yg7WHVTcfevQuewzd3l8AKP5EKZCa1Q90aHxgUiApYGZmoKGObrZlFgJdX_PrQB_a4Uqmz4-exeBMh0zF7EC80ZfMvTqDxfvtOaPFnOtMKvSU6wFmn9h3kjyOZMj7HlK6lBFB9c7AbpaFasuZoDOLixEK4q2XUFu5yRJD-BU-2KWLw426ugSuJP-xnAf6s7QTOo8zXwcRsxVeEWeHCrNWrV9Kc92",
      },
      {
        label: "Ángulo",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMJ5-HtUNFlHeNLzpWMEg61Y7rlk_zFSg_kE2UzBv7j0l-pC7rgQcIUNRc0wFc2prPU2tSD8Vbezbvq3ARk48JsXKBB2gWM9vbRvp16MQa6WqTfJZG2x1xn3BzXLDDuxhzrM03meBgvHYbvUhAfAgPNmaXMh1nwazSP1v6CKnc8KAGa6GAevs3QynGm9S1SdRYaSEBd60im_gE0KTpEsNFToPQrgg7bezYblZiqMskY-wgF6h8vTJ3iqRgWsXKPe9o2Q5oe0ovNcp4",
      },
    ],
  },
  {
    id: 6,
    title: "ST52-3",
    description:
      "El acero ST52-3 es un acero estructural de bajo contenido de carbono y alta resistencia mecánica. Destaca por su buena soldabilidad, tenacidad y facilidad de conformado en frío. Se utiliza ampliamente en estructuras metálicas, construcción, maquinaria pesada y elementos soldados sometidos a cargas elevadas.",
    tableConfig: {
      columns: [
        {
          header: "Calidad",
          key: "quality",
          rowSpan: 2,
        },
        {
          header: "Composición",
          colSpan: 8,
          subColumns: [
            { header: "C", key: "c" },
            { header: "Mn", key: "mn" },
            { header: "Si", key: "si" },
            { header: "Cr", key: "cr" },
            { header: "Ni", key: "ni" },
            { header: "Mo", key: "mo" },
            { header: "V", key: "v" },
          ],
        },
        {
          header: "Equivalencias",
          colSpan: 3,
          subColumns: [
            { header: "W.-Nr.", key: "wnr" },
            { header: "DIN", key: "din" },
            { header: "AISI/SAE", key: "aisi" },
          ],
        },
      ],
      rows: [
        {
          quality: "ST52-3",
          c: "<0.22",
          mn: "<1.60",
          si: "<0.55",
          cr: "—",
          ni: "—",
          mo: "—",
          v: ["0.10", "0.20"],
          wnr: "1.0570",
          din: "ST52-3",
          aisi: "—",
        },
      ],
    },
    cortes: [
      {
        label: "Macizo",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCeRG5RbQWugsVNcludm6LB_R3egwLO3bsZujCXgFUk-zvBjVNgu7NUaNiftVSdXhR7re94h85qhW948UhhIS_pb3HSPiCoG40_PJv4l1tXsTf7LP22L0bPlI4_syHXR4G7Hnz5bRhwUW4ELEMzYXgOuG3f4gtLCFh6xMHWtvqaPKFyfs7VVaIV_4TOOn5NFnsyz0HW1ELupoBOvQEcD0eMeEhuVqizajPMA01h1z-2EvzOQREhsB-qnUmUC-KdfUTmQKMhDKzv9LKS",
      },
      {
        label: "Chapa",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAmQLmBiWBCNfci0bwcxKGzYv1PWBH1iOyCuNZEsGjAiB9q6m1_yg7WHVTcfevQuewzd3l8AKP5EKZCa1Q90aHxgUiApYGZmoKGObrZlFgJdX_PrQB_a4Uqmz4-exeBMh0zF7EC80ZfMvTqDxfvtOaPFnOtMKvSU6wFmn9h3kjyOZMj7HlK6lBFB9c7AbpaFasuZoDOLixEK4q2XUFu5yRJD-BU-2KWLw426ugSuJP-xnAf6s7QTOo8zXwcRsxVeEWeHCrNWrV9Kc92",
      },
      {
        label: "Ángulo",
        href: "#",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMJ5-HtUNFlHeNLzpWMEg61Y7rlk_zFSg_kE2UzBv7j0l-pC7rgQcIUNRc0wFc2prPU2tSD8Vbezbvq3ARk48JsXKBB2gWM9vbRvp16MQa6WqTfJZG2x1xn3BzXLDDuxhzrM03meBgvHYbvUhAfAgPNmaXMh1nwazSP1v6CKnc8KAGa6GAevs3QynGm9S1SdRYaSEBd60im_gE0KTpEsNFToPQrgg7bezYblZiqMskY-wgF6h8vTJ3iqRgWsXKPe9o2Q5oe0ovNcp4",
      },
    ],
  },
];
