import React, { useState, useEffect } from "react";
import ProductCard from "../components/Cards/ProductCard";
import FilterSidebar from "../components/FilterSideBar";
import Pagination from "../components/Pagination";
import { materialsData } from "../data/MaterialsData";

const Product = () => {
  const [products, setProducts] = useState(materialsData);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    sortBy: "title",
    sortOrder: "asc",
  });

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16; // 4 columnas × 4 filas

  // Aplicar filtros
  useEffect(() => {
    let result = [...products];

    // Filtrar por búsqueda
    if (filters.search) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (filters.category !== "all") {
      result = result.filter(
        (product) => product.category === filters.category
      );
    }

    // Ordenar
    result.sort((a, b) => {
      if (filters.sortBy === "title") {
        return filters.sortOrder === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
      // Aquí podrías añadir más criterios de ordenación
      return 0;
    });

    setFilteredProducts(result);
    setCurrentPage(1); // Resetear a primera página al cambiar filtros
  }, [filters, products]);

  // Calcular productos para la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: "",
      category: "all",
      sortBy: "title",
      sortOrder: "asc",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Nuestros Productos</h1>
          <p className="text-xl opacity-90">
            Descubre nuestra amplia gama de metales y materiales
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de Filtros */}
          <div className="lg:w-1/4">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              totalProducts={filteredProducts.length}
            />
          </div>

          {/* Contenido Principal */}
          <div className="lg:w-3/4">
            {/* Barra de herramientas */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-600">
                  Mostrando{" "}
                  <span className="font-bold">{currentProducts.length}</span> de{" "}
                  <span className="font-bold">{filteredProducts.length}</span>{" "}
                  productos
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label htmlFor="sort" className="text-gray-600">
                      Ordenar por:
                    </label>
                    <select
                      id="sort"
                      value={`${filters.sortBy}-${filters.sortOrder}`}
                      onChange={(e) => {
                        const [sortBy, sortOrder] = e.target.value.split("-");
                        handleFilterChange({ sortBy, sortOrder });
                      }}
                      className="border rounded px-3 py-2"
                    >
                      <option value="title-asc">Nombre (A-Z)</option>
                      <option value="title-desc">Nombre (Z-A)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid de Productos */}
            {currentProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                  {currentProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>

                {/* Paginación */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-24 h-24 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-500">
                  Intenta con otros filtros o términos de búsqueda
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
