"use client";

import { useState } from "react";
import SectionHeading from "../components/section";
import { FEATURES } from "../data/features";

export default function WhyUs() {
  return (
    <section className="bg-[#101010] px-[5%] py-[110px]">
      <div className="mx-auto max-w-[1320px]">

        {/* Heading */}
        <SectionHeading
          tag="WHY CHOOSE US"
          title="The BMG pellets Difference"
          sub="From raw material to your doorstep — every step reflects our obsession with quality."
        />

        {/* Features Grid */}
        <div
          className="
            grid gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} f={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ f }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`
        rounded-2xl border
        p-6 sm:p-7
        transition-all duration-300
        ${
          hov
            ? "border-green-500/25 bg-green-500/5"
            : "border-white/10 bg-[#111111]/80"
        }
      `}
    >
      {/* Icon */}
      <div
        className="
          mb-5 flex h-[52px] w-[52px]
          items-center justify-center
          rounded-xl
          border border-green-500/15
          bg-green-500/10
          text-[26px]
        "
      >
        {f.icon}
      </div>

      {/* Title */}
      <h4
        className="
          mb-2.5
          text-[15px] sm:text-[16px]
          font-bold text-white
        "
      >
        {f.title}
      </h4>

      {/* Description */}
      <p
        className="
          text-[13px]
          leading-[1.7]
          text-gray-400
        "
      >
        {f.desc}
      </p>
    </div>
  );
}