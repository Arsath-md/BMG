"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "../components/section";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rahul Verma",
    role: "Championship Pigeon Breeder, Delhi",
    stars: 5,
    text: "Switched to AvianElite Pellet Pro last season and my birds clocked 15% faster race times. The feather quality and muscle definition are extraordinary — nothing else comes close.",
  },
  {
    name: "Priya Nair",
    role: "Aviary Owner, Bangalore",
    stars: 5,
    text: "I manage 80+ birds across 12 species. The Cage Bird Premium Mix keeps every single one vibrant, active, and healthy. The customer support team is genuinely exceptional.",
  },
  {
    name: "Dr. Suresh Iyer",
    role: "Avian Veterinarian, Chennai",
    stars: 5,
    text: "I recommend AvianElite to all my patients' owners without hesitation. The ingredient transparency and lab certifications give me complete confidence in these products.",
  },
  {
    name: "Amir Khan",
    role: "Pet Shop Owner, Mumbai",
    stars: 5,
    text: "Stocking AvianElite tripled my repeat customers. Birds genuinely thrive — owners see visible improvement within two weeks. It practically sells itself.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const scroll = useCallback((dir) => {
    const container = scrollRef.current;

    if (!container) return;

    const amount = 420;

    container.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(
        container.scrollLeft / 420
      );

      setActive(index);
    };

    container.addEventListener("scroll", handleScroll);

    return () =>
      container.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <section className="bg-[#0b0b0b] px-[5%] py-[110px]">
      <div className="mx-auto max-w-[1320px]">

        {/* Header */}
        <div
          className="
            mb-12 flex flex-col gap-6
            md:flex-row md:items-end md:justify-between
          "
        >
          <SectionHeading
            tag="TESTIMONIALS"
            title="Trusted by Bird Lovers"
            sub="Real results, real birds, real people."
            align="left"
          />

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-white/10
                bg-white/5 text-white
                transition-all duration-300
                hover:border-green-500/30
                hover:bg-green-500
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-white/10
                bg-white/5 text-white
                transition-all duration-300
                hover:border-green-500/30
                hover:bg-green-500
              "
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="
            flex gap-5 overflow-x-auto
            scroll-smooth pb-4
            snap-x snap-mandatory
            scrollbar-hide
          "
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="
                min-w-[320px]
                max-w-[320px]
                snap-center
                flex-shrink-0

                sm:min-w-[420px]
                sm:max-w-[420px]

                lg:min-w-[520px]
                lg:max-w-[520px]
              "
            >
              <div
                className={`
                  relative overflow-hidden
                  rounded-[22px]
                  border border-white/10
                  bg-[#111111]/80
                  p-7 sm:p-10
                  transition-all duration-300
                  ${
                    active === i
                      ? "border-green-500/20 shadow-[0_20px_60px_rgba(34,197,94,0.08)]"
                      : ""
                  }
                `}
              >
                {/* Glow Line */}
                <div
                  className="
                    absolute left-[10%] right-[10%] top-0
                    h-[1px]
                    bg-gradient-to-r
                    from-transparent
                    via-green-500
                    to-transparent
                  "
                />

                {/* Quote */}
                <div
                  className="
                    absolute left-7 top-2
                    font-serif
                    text-[72px]
                    leading-none
                    text-green-500/10
                  "
                >
                  "
                </div>

                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {"★★★★★"
                    .split("")
                    .map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[20px] text-green-500"
                      >
                        {s}
                      </span>
                    ))}
                </div>

                {/* Text */}
                <p
                  className="
                    mb-8
                    text-[14px] sm:text-[16px]
                    italic
                    leading-[1.9]
                    text-gray-300
                  "
                >
                  {t.text}
                </p>

                {/* User */}
                <div>
                  <div
                    className="
                      text-[15px]
                      font-bold text-white
                    "
                  >
                    {t.name}
                  </div>

                  <div
                    className="
                      mt-1
                      text-[12px]
                      text-gray-400
                    "
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const container = scrollRef.current;

                if (!container) return;

                container.scrollTo({
                  left: i * 420,
                  behavior: "smooth",
                });

                setActive(i);
              }}
              className={`
                h-2 rounded-full
                transition-all duration-300
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