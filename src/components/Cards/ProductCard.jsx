import React from "react";

const ProductCard = ({ product }) => {
  return (
    <a
      href={product.url || product.href}
      className="h-[200px] md:h-[190px] group relative flex flex-col bg-surface-light rounded-xl overflow-hidden border border-border-light hover:border-primary/50 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex-grow overflow-hidden bg-gray-100">
        <div
          className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${product.image})` }}
        />
      </div>

      <div className="h-12 flex items-center justify-center bg-white group-hover:bg-primary transition-colors duration-300">
        <h3 className="font-bold text-sm md:text-base text-text-main group-hover:text-white text-center px-2">
          {product.label || product.title}
        </h3>
      </div>
    </a>
  );
};

export default ProductCard;
