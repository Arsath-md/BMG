"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import ProductCard from "../components/productcard";
import { PRODUCTS } from "../data/product";
import SectionHeading from "../components/section";

export default function Products() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const CARD_WIDTH = 290 + 20; // min-w + gap (approx like your layout)

  const scrollToIndex = useCallback((i) => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollTo({
      left: i * CARD_WIDTH,
      behavior: "smooth",
    });

    setActive(i);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / CARD_WIDTH);
      setActive(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="products" className="bg-[#0b0b0b] px-[5%] py-[110px]">
      <div className="mx-auto max-w-[1320px]">
        <SectionHeading
          tag="OUR PRODUCTS"
          title="Premium Nutrition Line"
          sub="Every formula is backed by avian science and crafted to deliver measurable results in health, performance, and vitality."
        />

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="
            flex gap-5 overflow-x-auto pb-4
            scrollbar-hide
            snap-x snap-mandatory
            sm:grid sm:grid-cols-2 sm:overflow-visible
            lg:grid-cols-3
          "
        >
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              className="
                min-w-[290px]
                flex-shrink-0
                snap-center
                sm:min-w-0
              "
            >
              <ProductCard p={p} />
            </div>
          ))}
        </div>

        {/* Dots (mobile only) */}
        <div className="mt-6 flex justify-center gap-3 sm:hidden">
          {PRODUCTS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  i === active
                    ? "w-8 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.9)]"
                    : "w-2 bg-white/10"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}