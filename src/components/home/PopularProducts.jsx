import React from 'react';
import products from "@/data/products.json";
import ProductCard from "../products/ProductCard";

const PopularProducts = () => {
    const popularProducts = products.slice(0, 3);
    return (
       <section className="max-w-7xl mx-auto px-4 py-20">
      
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          Featured Collection
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Popular Products
        </h2>

        <p className="mt-4 text-gray-400">
          Explore our most popular summer essentials.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {popularProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
};

export default PopularProducts;