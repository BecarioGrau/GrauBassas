import React, { useState } from 'react';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters, totalProducts }) => {
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    const categories = [
        { id: 'all', name: 'Todos los productos', count: totalProducts },
        { id: 'inoxidables', name: 'Inoxidables', count: 15 },
        { id: 'aluminios', name: 'Aluminios', count: 8 },
        { id: 'aceros', name: 'Aceros', count: 12 },
        { id: 'hierros', name: 'Hierros', count: 10 },
        { id: 'bronce', name: 'Bronce', count: 6 },
        { id: 'laton', name: 'Latón', count: 7 },
        { id: 'cobre', name: 'Cobre', count: 9 },
        { id: 'zinc', name: 'Zinc', count: 5 },
        { id: 'plastico-construccion', name: 'Plástico de construcción', count: 11 },
        { id: 'plastico-industrial', name: 'Plástico industrial', count: 8 },
        { id: 'suministros', name: 'Suministros', count: 13 },
    ];

    return (
        <>
            <button
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                className="lg:hidden w-full mb-4 flex items-center justify-between px-4 py-3 bg-white border rounded-lg shadow-sm"
            >
                <span className="font-medium">Filtros</span>
                <svg
                    className={`w-5 h-5 transform transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <div className={`
        ${isMobileFiltersOpen ? 'block' : 'hidden'}
        lg:block bg-white rounded-lg shadow-md p-6
      `}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Filtros</h2>
                    <button
                        onClick={onClearFilters}
                        className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        Limpiar todo
                    </button>
                </div>

                <div className="mb-6">
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                        Buscar producto
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="search"
                            value={filters.search}
                            onChange={(e) => onFilterChange({ search: e.target.value })}
                            placeholder="Escribe para buscar..."
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <div className="absolute right-3 top-2.5 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-3">Categorías</h3>
                    <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                        {categories.map((category) => (
                            <label
                                key={category.id}
                                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
                            >
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="category"
                                        value={category.id}
                                        checked={filters.category === category.id}
                                        onChange={(e) => onFilterChange({ category: e.target.value })}
                                        className="mr-3"
                                    />
                                    <span className="text-gray-700">{category.name}</span>
                                </div>
                                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    {category.count}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>               

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                        Se encontraron <span className="font-bold">{totalProducts}</span> productos
                    </p>
                    <button
                        onClick={() => setIsMobileFiltersOpen(false)}
                        className="lg:hidden w-full mt-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Aplicar filtros
                    </button>
                </div>
            </div>
        </>
    );
};

export default FilterSidebar;