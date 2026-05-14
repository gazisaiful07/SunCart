import React from 'react';
import tips from "@/data/tips.json";
const SummerTips = () => {
    return (
    <section className="max-w-7xl mx-auto px-4 pb-20">

      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          Summer Care
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Summer Care Tips
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold text-white">
              {tip.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              {tip.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SummerTips;