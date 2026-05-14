import React from 'react';
import products from "@/data/products.json";
import ProductCard from "@/components/products/ProductCard";

const page = () => {
   return (
    <section className="max-w-7xl mx-auto px-4 py-20">

      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          Summer Collection
        </p>

        <h1 className="mt-4 text-5xl font-bold text-white">
          All Products
        </h1>

        <p className="mt-4 text-gray-400">
          Browse all available summer essentials.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
};

export default page;