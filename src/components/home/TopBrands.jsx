import React from 'react';
import brands from "@/data/brands.json";

const TopBrands = () => {
    return (
    <section className="max-w-7xl mx-auto px-4 pb-20">

      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          Trusted Brands
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Top Brands
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center transition duration-300 hover:border-purple-500/40"
          >
            <h3 className="text-2xl font-semibold text-white">
              {brand.name}
            </h3>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TopBrands;