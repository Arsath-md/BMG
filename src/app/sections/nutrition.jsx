"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../components/section";

export default function Nutrition() {
  const facts = [
    {
      label: "Crude Protein",
      val: 28,
      color: "from-green-700 to-green-500",
      text: "text-green-500",
      glow: "shadow-[0_0_10px_rgba(34,197,94,0.5)]",
    },
    {
      label: "Digestible Carbohydrates",
      val: 48,
      color: "from-emerald-700 to-emerald-400",
      text: "text-emerald-400",
      glow: "shadow-[0_0_10px_rgba(52,211,153,0.5)]",
    },
    {
      label: "Essential Fatty Acids",
      val: 12,
      color: "from-lime-700 to-lime-400",
      text: "text-lime-400",
      glow: "shadow-[0_0_10px_rgba(163,230,53,0.5)]",
    },
    {
      label: "Vitamins & Chelated Minerals",
      val: 12,
      color: "from-teal-700 to-teal-400",
      text: "text-teal-400",
      glow: "shadow-[0_0_10px_rgba(45,212,191,0.5)]",
    },
  ];

  const ingredients = [
    ["🌾", "Non-GMO Grains"],
    ["🐟", "Omega-3 Oils"],
    ["🦠", "Probiotic Cultures"],
    ["🔬", "Chelated Minerals"],
    ["🌻", "Cold-Press Flaxseed"],
    ["💧", "Electrolyte Complex"],
  ];

  return (
    <section
      id="nutrition"
      className="bg-[#101010] px-[5%] py-[110px]"
    >
      <div
        className="
          mx-auto grid max-w-[1320px]
          items-center gap-16
          lg:grid-cols-2 lg:gap-20
        "
      >
        {/* Left Side */}
        <div>
          <SectionHeading
            tag="NUTRITION SCIENCE"
            title="Formula Breakdown"
            sub="Designed to deliver every essential nutrient in its most bioavailable form."
            align="left"
          />

          {/* Nutrition Bars */}
          <div>
            {facts.map((f, i) => (
              <NutritionBar
                key={f.label}
                f={f}
                delay={i * 200}
              />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div>

          {/* Ingredients Card */}
          <div
            className="
              mb-6 rounded-[20px]
              border border-white/10
              bg-[#111111]/80
              p-6 sm:p-9
            "
          >
            <div
              className="
                mb-5 text-[13px]
                font-bold tracking-[0.1em]
                text-green-500
              "
            >
              KEY INGREDIENTS
            </div>

            <div
              className="
                grid gap-4
                sm:grid-cols-2
              "
            >
              {ingredients.map(([ic, lb]) => (
                <div
                  key={lb}
                  className="
                    flex items-center gap-3
                    rounded-xl
                    border border-white/10
                    bg-green-500/5
                    px-4 py-3
                  "
                >
                  <span className="text-[22px]">
                    {ic}
                  </span>

                  <span
                    className="
                      text-[12px]
                      font-medium
                      text-gray-300
                    "
                  >
                    {lb}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Vet Card */}
          <div
            className="
              flex items-start gap-4
              rounded-2xl
              border border-white/10
              bg-gradient-to-br
              from-green-500/10 to-emerald-500/5
              p-6
            "
          >
            <span className="text-[36px]">
              🩺
            </span>

            <div>
              <div
                className="
                  mb-1 text-[14px]
                  font-bold text-white
                "
              >
                Veterinary Approved Formula
              </div>

              <p
                className="
                  text-[12px]
                  leading-[1.6]
                  text-gray-400
                "
              >
                Reviewed and endorsed by certified avian vets
                at three leading Indian veterinary institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NutritionBar({ f, delay }) {
  const [width, setWidth] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            setWidth(f.val);
          }, delay);

          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      obs.observe(ref.current);
    }

    return () => obs.disconnect();
  }, [f.val, delay]);

  return (
    <div
      ref={ref}
      className="mb-6"
    >
      {/* Label */}
      <div
        className="
          mb-2.5 flex items-center
          justify-between
        "
      >
        <span
          className="
            text-[13px]
            font-medium
            text-gray-300
          "
        >
          {f.label}
        </span>

        <span
          className={`text-[13px] font-bold ${f.text}`}
        >
          {f.val}%
        </span>
      </div>

      {/* Bar */}
      <div
        className="
          h-[6px]
          overflow-hidden
          rounded-full
          bg-white/5
        "
      >
        <div
          className={`
            h-full rounded-full
            bg-gradient-to-r ${f.color}
            transition-all duration-[1400ms]
            ease-[cubic-bezier(.4,0,.2,1)]
            ${f.glow}
          `}
          style={{
            width: `${width}%`,
          }}
        />
      </div>
    </div>
  );
}