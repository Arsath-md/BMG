"use client";

import { useState } from "react";

function ProductCard({ p }) {
  const [weight, setWeight] = useState(p.weights[0]);

  return (
    <div
      className="
        group relative
        min-w-[290px] max-w-[320px]
        flex-shrink-0
        overflow-hidden rounded-2xl
        border border-white/10
        bg-[#111111]/80
        p-5 sm:p-6
        transition-all duration-300
        hover:border-green-500/30
        hover:shadow-[0_20px_60px_rgba(34,197,94,0.12)]
      "
    >
      {/* Top Glow Line */}
      <div
        className="
          absolute left-[20%] right-[20%] top-0 h-[1px]
          bg-transparent transition-all duration-300
          group-hover:bg-gradient-to-r
          group-hover:from-transparent
          group-hover:via-green-500
          group-hover:to-transparent
        "
      />

      {/* Badge */}
      {p.badge && (
        <div
          className="
            absolute right-4 top-4
            rounded-full
            bg-gradient-to-br
            from-green-700 to-green-500
            px-3 py-1
            text-[10px] font-bold
            tracking-[0.06em]
            text-white
          "
        >
          {p.badge}
        </div>
      )}

      {/* Icon */}
      <div className="mb-4 text-[42px] sm:text-[52px]">
        {p.icon}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-[16px] font-bold text-white sm:text-[17px]">
        {p.name}
      </h3>

      {/* Rating */}
      <div className="mb-3 flex flex-wrap items-center gap-[6px]">
        <span className="text-[13px] tracking-[-1px] text-green-500">
          {"★".repeat(Math.floor(p.rating))}
        </span>

        <span className="text-[12px] font-bold text-green-500">
          {p.rating}
        </span>

        <span className="text-[11px] text-gray-400">
          ({p.reviews})
        </span>
      </div>

      {/* Description */}
      <p className="mb-[18px] text-[13px] leading-[1.7] text-gray-400">
        {p.desc}
      </p>

      {/* Tags */}
      <div className="mb-[18px] flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="
              rounded-full border border-green-500/20
              bg-green-500/10
              px-[11px] py-[4px]
              text-[10px] font-semibold
              text-green-500 sm:text-[11px]
            "
          >
            {t}
          </span>
        ))}
      </div>

      {/* Benefits */}
      <ul className="mb-[22px] space-y-1">
        {p.benefits.map((b) => (
          <li
            key={b}
            className="
              flex items-start gap-[9px]
              text-[12px] leading-[1.6]
              text-gray-400
            "
          >
            <span className="mt-[2px] shrink-0 text-[10px] text-green-500">
              ✦
            </span>

            {b}
          </li>
        ))}
      </ul>

      {/* Weight Selector */}
      <div className="mb-[22px] flex flex-wrap gap-2">
        {p.weights.map((w) => (
          <button
            key={w}
            onClick={() => setWeight(w)}
            className={`
              rounded-[7px]
              border px-3 py-[6px]
              text-[11px]
              transition-all duration-200
              sm:text-[12px]
              ${
                w === weight
                  ? "border-green-500 bg-green-500/10 font-semibold text-green-500"
                  : "border-white/10 text-gray-400 hover:border-green-500/30 hover:text-white"
              }
            `}
          >
            {w}
          </button>
        ))}
      </div>

      {/* CTA */}
      <a
        href={`https://wa.me/919999999999?text=Hi! I'd like to order *${p.name}* (${weight})`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex w-full items-center justify-center gap-[9px]
          rounded-[11px]
          border border-white/10
          bg-green-500/10
          px-4 py-3
          text-[13px] font-bold
          text-green-500
          transition-all duration-300
          hover:border-transparent
          hover:bg-gradient-to-br
          hover:from-green-700
          hover:to-green-500
          hover:text-white
          hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]
          sm:text-[14px]
        "
      >
        <span className="text-[16px] sm:text-[17px]">
          💬
        </span>

        Order on WhatsApp
      </a>
    </div>
  );
}

export default ProductCard;