import { href } from "react-router-dom";

export const menuData = [
  {
    label: "Portada",
    href: "/",
    page: "index",
  },

  {
    label: "Productos",
    href: "/products",
    page: "productos",
    /*     submenus de productos  */
    children: [
      {
        label: "Inoxidables",
        href: "/products#inoxidables",
        children: [
          { label: "Abarcones", href: "/products#" },
          { label: "Acc. Barandillas", href: "/products#" },
          { label: "Acc. Roscar", href: "/products#" },
          { label: "Acc. Soldar", href: "/products#" },
          { label: "Ángulos", href: "/products#" },
          { label: "Arandelas y Tuercas", href: "/products#" },
          { label: "Bobinas", href: "/products#" },
          { label: "Bridas", href: "/products#" },
          { label: "Chapas", href: "/products#" },
          { label: "Macizos", href: "/products#" },
          { label: "Perfiles", href: "/products#" },
          { label: "Pletinas", href: "/products#" },
          { label: "Telas - Mallas", href: "/products#" },
          { label: "Tornillería", href: "/products#" },
          { label: "Tubos", href: "/products#" },
          { label: "Varilla Roscada", href: "/products#" },
        ],
      },
      {
        label: "Aluminios",
        href: "/products#",
        children: [
          { label: "Acc. Soldar", href: "/products#" },
          { label: "Ángulos", href: "/products#" },
          { label: "Bobinas", href: "/products#" },
          { label: "Chapas", href: "/products#" },
          { label: "Macizos", href: "/products#" },
          { label: "Perfiles", href: "/products#" },
          { label: "Pletinas", href: "/products#" },
          { label: "Tubos", href: "/products#" },
        ],
      },
      {
        label: "Aceros",
        href: "/products#aceros",
        children: [
          {
            label: "Al Carbono",
            href: "/products#",
            children: [
              {
                label: "F-1110",
                detail:
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit donec, imperdiet fusce eleifend condimentum dictumst mus ultricies hac gravida, erat aliquam tempus montes vestibulum senectus primis.",
                href: "/products/F-1110",
              },
              { label: "F-1120", href: "/products/F-1120" },
              { label: "F-1130", href: "/products/F-1130" },
              { label: "F-1140", href: "/products/F-1140" },
              { label: "F-1150", href: "/products/F-1150" },
              { label: "ST52-3", href: "/products/ST52-3" },
            ],
          },

          {
            label: "Cementación",
            href: "/products#",
            children: [
              { label: "F-1510", href: "/products/F-1510" },
              { label: "F-1516", href: "/products/F-1516" },
              { label: "F-1540", href: "/products/F-1540" },
              { label: "F-1550", href: "/products/F-1550" },
              { label: "F-1560", href: "/products/F-1560" },
              { label: "F-1582", href: "/products/F-1582" },
            ],
          },
          {
            label: "Resistencia",
            href: "/products#",
            children: [
              { label: "F-1252", href: "/products/F-1252" },
              { label: "F-1272", href: "/products/F-1272" },
            ],
          },
          {
            label: "Rodamientos",
            href: "/products#",
            children: [{ label: "F-1310", href: "/products/F-1310" }],
          },
          {
            label: "Alta elasticidad",
            href: "/products#",
            children: [{ label: "F-1430", href: "/products/F-1430" }],
          },
          {
            label: "Nituración",
            href: "/products#",
            children: [{ label: "F-1740", href: "/products/F-1740" }],
          },
          {
            label: "Herramientas",
            href: "/products#",
            children: [
              { label: "1.2379", href: "/products/1.2379" },
              { label: "1.2842", href: "/products/1.2842" },
            ],
          },
        ],
      },
      {
        label: "Hierros",
        href: "/products#",
        children: [
          {
            label: "Galvanizado",
            href: "/products#",
            children: [
              { label: "Acc. Soldar", href: "/products/acc_soldar" },
              { label: "Ángulos", href: "/products/angulos" },
              { label: "Bridas", href: "/products/bridas" },
              { label: "Chapas", href: "/products/chapas" },
              { label: "Macizos", href: "/products/macizos" },
              { label: "Pletinas", href: "/products/pletinas" },
              { label: "Tubos", href: "/products/tubos" },
            ],
          },

          {
            label: "Negro",
            href: "/products#",
            children: [
              { label: "Acc. Soldar", href: "/products#" },
              { label: "Ángulos", href: "/products#" },
              { label: "Bridas", href: "/products#" },
              { label: "Chapas", href: "/products#" },
              { label: "Macizos", href: "/products#" },
              { label: "Pletinas", href: "/products#" },
              { label: "Tubos", href: "/products#" },
            ],
          },
        ],
      },
      {
        label: "H. Fundición",
        href: "/products#",
        children: [
          { label: "Chapas", href: "/products#" },
          { label: "Huecos", href: "/products#" },
          { label: "Macizos", href: "/products#" },
          { label: "Rectangulares", href: "/products#" },
        ],
      },
      {
        label: "Bronce",
        href: "/products#",
        children: [
          { label: "Chapas", href: "/products#" },
          { label: "Cuadrados", href: "/products#" },
          { label: "Huecos", href: "/products#" },
          { label: "Llantas", href: "/products#" },
          { label: "Macizos", href: "/products#" },
        ],
      },
      {
        label: "Latón",
        href: "/products#",
        children: [
          { label: "Accesorios", href: "/products#" },
          { label: "Ángulos", href: "/products#" },
          { label: "Chapas", href: "/products#" },
          { label: "Macizos", href: "/products#" },
          { label: "Pletinas", href: "/products#" },
          { label: "Tubos", href: "/products#" },
        ],
      },
      {
        label: "Cobre",
        href: "/products#",
        children: [
          { label: "Accesorios", href: "/products#" },
          { label: "Alambres", href: "/products#" },
          { label: "Chapas", href: "/products#" },
          { label: "Macizos", href: "/products#" },
          { label: "Pletinas", href: "/products#" },
          { label: "Tubos", href: "/products#" },
        ],
      },
      {
        label: "Zinc",
        href: "/products#",
        children: [
          { label: "Ánodos", href: "/products#" },
          { label: "Macizos", href: "/products#" },
          { label: "Placas", href: "/products#" },
        ],
      },

      /*  falta por hacer */
      {
        label: "Plásticos de Construcción",
        href: "/products#",
        children: [
          { label: "Laminados", href: "/products#" },
          { label: "Tuberías", href: "/products#" },
          { label: "Perfiles", href: "/products#" },
        ],
      },
      {
        label: "Plásticos de Industria",
        href: "/products#",
        children: [
          { label: "Laminados", href: "/products#" },
          { label: "Tuberías", href: "/products#" },
          { label: "Perfiles", href: "/products#" },
        ],
      },
      {
        label: "Suministros",
        href: "/products#",
        children: [
          { label: "Laminados", href: "/products#" },
          { label: "Tuberías", href: "/products#" },
          { label: "Perfiles", href: "/products#" },
        ],
      },
    ],
  },

  /* parte del nav  */

  {
    label: "Servicios",
    href: "/services",
    page: "servicios",
  },

  {
    label: "Sobre Nosotros",
    href: "/aboutus",
    page: "nosotros",
  },

  {
    label: "Contacto",
    href: "/contact",
    page: "contact",
  },
];
