import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { useNavigation } from "../context/NavigationContext";
import logo from "../assets/img/Imagotipo_GrauBassas_horizontal.webp";
import { Link, useLocation } from "react-router-dom";

const MobileMenuItem = ({ item, isActive, closeMenu }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="border-b border-white/10 last:border-none">
      <div className="flex items-center justify-between">
        <Link
          to={item.href}
          onClick={(e) => {
            if (hasChildren && item.href === "#") {
              e.preventDefault();
            } else {
              closeMenu();
            }
          }}
          className={`block py-4 px-6 text-sm font-bold uppercase tracking-wider text-white flex-grow ${
            isActive(item.href) ? "text-secondary font-black scale-105" : ""
          }`}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-4 text-white focus:outline-none"
          >
            <svg
              className={`w-4 h-4 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}
      </div>

      {hasChildren && isExpanded && (
        <div className="bg-primary-dark/50 pl-4">
          {item.children.map((child) => (
            <MobileMenuItem
              key={child.label}
              item={child}
              isActive={isActive}
              closeMenu={closeMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { menuData, productsData, loading } = useNavigation();
  const location = useLocation();
  const currentPath = location.pathname;

  // Lógica para mezclar los datos: Portada + Productos + Resto del menú
  const fullMenu = React.useMemo(() => {
    if (loading || !menuData.length) return [];

    return [
      menuData[0], // Portada
      ...productsData, // Inserta el objeto "Productos" (que está en productsData)
      ...menuData.slice(1), // Servicios, Nosotros, Contacto
    ];
  }, [menuData, productsData, loading]);

  function isActive(href) {
    if (href === "#" || !href) return false;
    const normalized = href === "/" ? "/" : href.replace(/\/?$/, "");
    const cur = currentPath === "/" ? "/" : currentPath.replace(/\/?$/, "");
    if (normalized === "/") return cur === "/";
    return cur.startsWith(normalized);
  }

  if (loading)
    return <div className="h-20 bg-white border-b-4 border-primary" />;

  return (
    <header className="bg-white border-b-4 border-primary sticky top-0 overflow-visible z-50">
      <nav className="flex flex-wrap lg:flex-nowrap h-20 w-full">
        <div className="w-full lg:w-1/4 bg-white flex items-center justify-between px-4 lg:justify-center lg:px-0 z-50 relative">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-10 lg:h-12 object-contain"
              width={280}
              height={48}
              fetchPriority="high"
            />
          </Link>
          <button
            className="lg:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex w-3/4 relative items-center justify-end px-6 text-white">
          <div
            className="absolute inset-0 bg-primary -z-10"
            style={{ clipPath: "polygon(50px 0, 100% 0, 100% 100%, 0% 100%)" }}
          />
          <ul className="flex h-full text-sm font-bold text-white uppercase tracking-wider">
            {fullMenu.map((item) => (
              <li key={item.label} className="h-full group relative hover:z-20">
                <Link
                  to={item.href}
                  className={`hover-diagonal-bg h-full flex items-center px-12 before:[clip-path:polygon(50px_0,100%_0,calc(100%-50px)_100%,0_100%)] before:origin-center ${
                    isActive(item.href)
                      ? "before:scale-x-100 before:bg-primary-dark"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="absolute top-full left-0 bg-primary min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible shadow-lg z-50">
                    {item.children.map((child) => (
                      <MenuItem key={child.label} item={child} />
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Menú Móvil */}
        <div
          className={`lg:hidden absolute top-20 left-0 w-full bg-primary shadow-xl transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col max-h-[calc(100vh-80px)] overflow-y-auto">
            {fullMenu.map((item) => (
              <MobileMenuItem
                key={item.label}
                item={item}
                isActive={isActive}
                closeMenu={() => setIsMobileMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
