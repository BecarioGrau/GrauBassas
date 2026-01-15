import React, { useState, useEffect } from "react";
import ProductCard from "../components/Cards/ProductCard";
import FilterSidebar from "../components/FilterSideBar";
import Pagination from "../components/Pagination";
import { materialsData } from "../data/HomeContentData";
import { productsData } from "../data/NavigationData";

const slugify = (text) => {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_")
    .replace(/[^\w\d_-]/g, "");
};

// Función recursiva para obtener los hijos del último nivel
const getDeepChildren = (node, categoryLabel, parentImage) => {
  if (!node.children || node.children.length === 0) {
    return [
      {
        ...node,
        title: node.label,
        category: categoryLabel,
        image: parentImage,
      },
    ];
  }
  return node.children.flatMap((child) =>
    getDeepChildren(child, categoryLabel, parentImage)
  );
};

const getAllProductsFlat = () => {
  const productosRoot = productsData.find((item) => item.label === "Productos");
  if (!productosRoot?.children) return [];

  return productosRoot.children.flatMap((category) => {
    const parentImage =
      materialsData.find((m) =>
        slugify(m.title).includes(slugify(category.label))
      )?.image || "https://via.placeholder.com/300";

    return getDeepChildren(category, category.label, parentImage);
  });
};

const Product = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    material: "all",
    sortBy: "title",
    sortOrder: "asc",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    let result = [];

    if (filters.material === "all") {
      result = [...materialsData];
    } else if (filters.material === "everything") {
      result = getAllProductsFlat();
    } else {
      const productosRoot = productsData.find(
        (item) => item.label === "Productos"
      );

      const categoryFound = productosRoot?.children.find((cat) => {
        const normalizedLabel = slugify(cat.label);
        const normalizedMaterialFilter = slugify(filters.material);
        return normalizedLabel.includes(
          normalizedMaterialFilter.replace("industriales", "industrial")
        );
      });

      if (categoryFound) {
        const parentImage =
          materialsData.find((m) =>
            slugify(m.title).includes(slugify(categoryFound.label))
          )?.image || "https://via.placeholder.com/300";

        result = categoryFound.children.map((child) => ({
          ...child,
          title: child.label,
          category: categoryFound.label,
          image: parentImage,
        }));
      } else {
        result = [];
      }
    }

    if (filters.search) {
      result = result.filter((product) => {
        const title = product.title || product.label || "";
        const category = product.category || "";
        const searchSlug = slugify(filters.search);

        return (
          slugify(title).includes(searchSlug) ||
          slugify(category).includes(searchSlug)
        );
      });
    }

    result.sort((a, b) => {
      const titleA = a.title || a.label || "";
      const titleB = b.title || b.label || "";

      if (filters.sortBy === "title") {
        return filters.sortOrder === "asc"
          ? titleA.localeCompare(titleB)
          : titleB.localeCompare(titleA);
      }
      return 0;
    });

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [filters]);

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
      material: "all",
      sortBy: "title",
      sortOrder: "asc",
    });
  };

  return (
    <div className="min-h-screen ">
      <div className="w-full max-w-[1920px] mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              totalProducts={filteredProducts.length}
            />
          </div>

          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="relative md:block md:w-100 w-full">
                  <input
                    type="text"
                    id="search"
                    value={filters.search}
                    onChange={(e) =>
                      handleFilterChange({ search: e.target.value })
                    }
                    placeholder="Buscar producto..."
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                  />
                  <div className="absolute right-3 top-2.5 text-gray-400">
                    <svg
                      className="w-4 h-4"
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

                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-sm text-gray-600">
                    Ordenar por:
                  </label>
                  <select
                    id="sort"
                    value={`${filters.sortBy}-${filters.sortOrder}`}
                    onChange={(e) => {
                      const [sortBy, sortOrder] = e.target.value.split("-");
                      handleFilterChange({ sortBy, sortOrder });
                    }}
                    className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option value="title-asc">Nombre (A-Z)</option>
                    <option value="title-desc">Nombre (Z-A)</option>
                  </select>
                </div>
              </div>
            </div>

            {currentProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                  {currentProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No se encontraron productos
                </h3>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 px-6 py-2 bg-primary text-white rounded-lg cursor-pointer"
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
