import { href } from "react-router-dom";
import { productsData } from "./ProductsData";

export const menuData = [
  {
    label: "Portada",
    href: "/",
    page: "index",
  },

  ...productsData,

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
