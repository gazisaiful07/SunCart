import React from 'react';
import Link from "next/link";

const ProductCard = ({product}) => {
     const { id, name, image, price, rating, category } = product;
    return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40">
      
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-72 w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="text-sm text-purple-300">
          {category}
        </p>

        <h2 className="mt-2 text-xl font-semibold text-white">
          {name}
        </h2>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-2xl font-bold text-white">
            ${price}
          </p>

          <p className="text-sm text-yellow-400">
             {rating}
          </p>
        </div>

        <Link
          href={`/products/${id}`}
          className="btn gradient-btn mt-5 w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;