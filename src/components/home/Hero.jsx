"use client";

import { useEffect, useState } from "react";

const banners = [
  {
    id: 1,
    image: "/banner/banner-1.jpg",
  },
  {
    id: 2,
    image: "/banner/banner-2.jpg",
  },
  {
    id: 3,
    image: "/banner/banner-3.jpg",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="px-4 py-6 bg-black">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl border border-white/10">

        <div
          className="h-[250px] md:h-[500px] bg-cover bg-center duration-700"
          style={{
            backgroundImage: `url(${banners[current].image})`,
          }}
        />

      </div>
    </section>
  );
};

export default Hero;