import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
            {/* Imagen del producto */}
            <div className="relative overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
                {/* Badge (opcional) */}
                <div className="absolute top-3 right-3">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        Nuevo
                    </span>
                </div>
            </div>

            {/* Contenido */}
            <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {product.title}
                </h3>

                {/* Descripción (si existe) */}
                {product.description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                    </p>
                )}

                {/* Precio (ejemplo) */}
                <div className="mb-4">
                    <span className="text-lg font-bold text-gray-900">Consultar precio</span>
                    {product.oldPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">€{product.oldPrice}</span>
                    )}
                </div>

                {/* Botones de acción */}
                <div className="flex gap-2">
                    <Link
                        to={product.url}
                        className="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                        Ver detalles
                    </Link>
                    <button
                        className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                        aria-label="Añadir a favoritos"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>

                {/* Especificaciones (opcional) */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="text-gray-500">Material:</div>
                        <div className="font-medium">Acero</div>
                        <div className="text-gray-500">Disponible:</div>
                        <div className="text-green-600 font-medium">En stock</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;