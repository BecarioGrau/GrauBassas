import React, { useState } from "react";

const FilterSidebar = ({
  filters,
  onFilterChange,
  onClearFilters,
  totalProducts,
}) => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const materials = [
    { id: "all", name: "Todos los materiales" },
    { id: "everything", name: "Ver todo el catálogo plano" },
    { id: "inoxidables", name: "Inoxidables" },
    { id: "aluminios", name: "Aluminios" },
    { id: "aceros", name: "Aceros" },
    { id: "hierros", name: "Hierros" },
    { id: "bronce", name: "Bronce" },
    { id: "laton", name: "Latón" },
    { id: "cobre", name: "Cobre" },
    { id: "zinc", name: "Zinc" },
    { id: "plasticos_de_construccion", name: "Plástico de construcción" },
    { id: "plasticos_industriales", name: "Plástico industrial" },
    { id: "suministros", name: "Suministros" },
  ];

  return (
    <>
      <button
        onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
        className="lg:hidden w-full mb-4 flex items-center justify-between px-4 py-3 bg-white border rounded-lg shadow-sm"
      >
        <span className="font-medium">Filtros</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isMobileFiltersOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`
        ${isMobileFiltersOpen ? "block" : "hidden"}
        lg:block bg-white rounded-lg shadow-md p-6 h-180
      `}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Filtros</h2>
          <button
            onClick={onClearFilters}
            className="text-sm bg-primary text-white hover:bg-primary/80 transition-colors px-4 py-2 rounded cursor-pointer"
          >
            Limpiar todo
          </button>
        </div>

        <div className="mb-6">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Buscar producto
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              value={filters.search}
              onChange={(e) => onFilterChange({ search: e.target.value })}
              placeholder="Escribe para buscar..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <div className="absolute right-3 top-2.5 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-700 mb-3">Materiales</h3>
          <div className="space-y-2 max-h-95 overflow-y-auto pr-2">
            {materials.map((material) => (
              <label
                key={material.id}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="material"
                    value={material.id}
                    checked={filters.material === material.id}
                    onChange={(e) =>
                      onFilterChange({ material: e.target.value })
                    }
                    className="mr-3 accent-primary"
                  />
                  <span className="text-gray-700">{material.name}</span>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {material.count}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-primary/10 rounded-lg p-4">
          <p className="text-sm text-primary">
            Se encontraron <span className="font-bold">{totalProducts}</span>{" "}
            productos
          </p>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
