import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            let startPage = Math.max(1, currentPage - 2);
            let endPage = Math.min(totalPages, currentPage + 2);

            if (currentPage <= 3) {
                endPage = Math.min(maxVisiblePages, totalPages);
            } else if (currentPage >= totalPages - 2) {
                startPage = totalPages - maxVisiblePages + 1;
            }

            if (startPage > 1) {
                pages.push(1);
                if (startPage > 2) pages.push('...');
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t">
            <div className="text-sm text-gray-600">
                Página <span className="font-semibold">{currentPage}</span> de{' '}
                <span className="font-semibold">{totalPages}</span>
            </div>

            <div className="flex items-center space-x-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-lg flex items-center gap-1 ${currentPage === 1
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Anterior
                </button>

                <div className="flex items-center space-x-1">
                    {renderPageNumbers().map((page, index) => (
                        page === '...' ? (
                            <span key={index} className="px-3 py-2 text-gray-400">
                                ...
                            </span>
                        ) : (
                            <button
                                key={index}
                                onClick={() => onPageChange(page)}
                                className={`w-10 h-10 flex items-center justify-center rounded-lg ${currentPage === page
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        )
                    ))}
                </div>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-lg flex items-center gap-1 ${currentPage === totalPages
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    Siguiente
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="flex items-center gap-2 text-sm">
                <span>Ir a página:</span>
                <input
                    type="number"
                    min="1"
                    max={totalPages}
                    defaultValue={currentPage}
                    onBlur={(e) => {
                        const page = Math.max(1, Math.min(totalPages, parseInt(e.target.value) || 1));
                        onPageChange(page);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            const page = Math.max(1, Math.min(totalPages, parseInt(e.target.value) || 1));
                            onPageChange(page);
                        }
                    }}
                    className="w-16 px-2 py-1 border rounded text-center"
                />
            </div>
        </div>
    );
};

export default Pagination;