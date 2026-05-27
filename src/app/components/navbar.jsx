"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const links = [
    "Home",
    "Products",
    "About",
    "Nutrition",
    "Contact",
  ];

  return (
    <nav
      className={`
        fixed left-0 right-0 top-0 z-[999]
        transition-all duration-300
        ${
          scrolled
            ? `
              border-b border-white/10
              bg-[#050805]/80
              backdrop-blur-2xl
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
            `
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
          mx-auto flex h-[78px]
          max-w-[1320px]
          items-center justify-between
          px-[5%]
        "
      >
        {/* ==================== */}
        {/* LOGO */}
        {/* ==================== */}

        <a
          href="#home"
          className="
            group flex items-center gap-3
            text-decoration-none
          "
        >
          {/* Logo Image */}
          <div
            className="
              relative flex h-[50px] w-[56px]
              items-center justify-center
              overflow-hidden rounded-xl
              border border-green-500/20
              bg-gradient-to-br
              from-green-700 to-green-500
              shadow-[0_0_25px_rgba(34,197,94,0.35)]
            "
          >
            {/* Replace later */}
            <img
              src="/image.png"
              alt="Logo"
              className="
                h-[50px] w-[56px]
                object-contain
              "
            />

            {/* Glow */}
            <div
              className="
                absolute inset-0
                bg-white/0 transition-all duration-300
                group-hover:bg-white/10
              "
            />
          </div>

          {/* Brand */}
          <div>
            <div
              className="
                text-[21px]
                font-black
                tracking-[-0.03em]
                text-transparent
                bg-gradient-to-r
                from-green-400 to-green-200
                bg-clip-text
              "
            >
              BMG 
            </div>

            <div
              className="
                -mt-[2px]
                text-[9px]
                tracking-[0.22em]
                text-gray-500
              "
            >
              PREMIUM NUTRITION
            </div>
          </div>
        </a>

        {/* ==================== */}
        {/* DESKTOP NAV */}
        {/* ==================== */}

        <div
          className="
            hidden items-center gap-8
            lg:flex
          "
        >
          {/* Links */}
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="
                  relative text-[14px]
                  font-medium text-gray-300
                  transition-all duration-300
                  hover:text-green-400
                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-green-500
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative overflow-hidden
              rounded-xl
              bg-gradient-to-r
              from-green-700 to-green-500
              px-6 py-3
              text-[13px]
              font-bold
              tracking-[0.03em]
              text-white
              shadow-[0_0_25px_rgba(34,197,94,0.35)]
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_10px_40px_rgba(34,197,94,0.45)]
            "
          >
            {/* Shine */}
            <div
              className="
                absolute inset-0
                translate-x-[-100%]
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                transition-transform duration-1000
                group-hover:translate-x-[100%]
              "
            />

            <span className="relative z-10">
              Order Now
            </span>
          </a>
        </div>

        {/* ==================== */}
        {/* MOBILE BUTTON */}
        {/* ==================== */}

        <button
          onClick={() => setOpen(!open)}
          className="
            flex h-[46px] w-[46px]
            items-center justify-center
            rounded-xl
            border border-white/10
            bg-white/5
            text-white
            transition-all duration-300
            hover:border-green-500/30
            hover:bg-green-500/10
            lg:hidden
          "
        >
          {open ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* ==================== */}
      {/* MOBILE MENU */}
      {/* ==================== */}

      <div
        className={`
          overflow-hidden
          transition-all duration-500
          lg:hidden
          ${
            open
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            border-t border-white/10
            bg-[#050805]/95
            px-[5%] py-5
            backdrop-blur-2xl
          "
        >
          {/* Links */}
          <div className="flex flex-col">
            {links.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="
                  group flex items-center
                  justify-between
                  border-b border-white/5
                  py-4
                  text-[15px]
                  font-medium
                  text-gray-300
                  transition-all duration-300
                  hover:text-green-400
                "
                style={{
                  animationDelay: `${i * 80}ms`,
                }}
              >
                {link}

                <ChevronRight
                  size={18}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-5 flex h-[54px]
              items-center justify-center
              rounded-xl
              bg-gradient-to-r
              from-green-700 to-green-500
              text-[14px]
              font-bold text-white
              shadow-[0_8px_30px_rgba(34,197,94,0.35)]
              transition-all duration-300
              hover:scale-[1.02]
            "
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}