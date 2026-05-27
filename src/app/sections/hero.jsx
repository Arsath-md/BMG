"use client"
import { useState,useRef,useEffect } from "react";

export default function Hero() {
  
// ─── Animated Counter ───
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true;
        let cur = 0;
        const duration = 1800, steps = 60, step = target / steps;
        const t = setInterval(() => {
          cur = Math.min(cur + step, target);
          setCount(Math.floor(cur));
          if (cur >= target) clearInterval(t);
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}
  const stats = [
    { v: 100, s: "+", label: "Happy Customers" },
    { v: 1, s: "+", label: "Years Experience" },
    { v: 99, s: "%", label: "Quality Assured" },
    { v: 50, s: "+", label: "Product Variants" },
  ];

  const floatCards = [
    {
      icon: "🐦",
      name: "Pigeon Pellet Pro",
      sub: "28% Protein Formula",
      anim: "animate-float0",
      top: "top-[6%]",
      left: "left-[60%]",
    },
    {
      icon: "🦜",
      name: "Cage Bird Mix",
      sub: "Vitamin Enriched",
      anim: "animate-float1",
      top: "top-[62%]",
      left: "left-[62%]",
    },
    {
      icon: "💊",
      name: "Vitamin Boost",
      sub: "A · D3 · E Complex",
      anim: "animate-float2",
      top: "top-[34%]",
      left: "-left-[2%]",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center px-[5%] pt-[130px] pb-[90px] bg-[#060a06]"
    >
      {/* ORBS */}
      <div className="absolute top-[5%] left-[30%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.07)_0%,transparent_65%)] animate-orb pointer-events-none" />

      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_65%)] animate-orb-reverse pointer-events-none" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div className="animate-fade-up">

          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-7">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />

            <span className="text-[11px] font-semibold tracking-[0.1em] text-green-400">
              PREMIUM AVIAN NUTRITION BRAND
            </span>
          </div>

          <h1 className="text-[clamp(2.6rem,5.5vw,5rem)] font-black leading-none tracking-[-0.03em] mb-7">
            <span className="text-[#f0fdf4]">Fuel Your</span>
            <br />

            <span className="bg-gradient-to-r from-green-500 via-green-400 to-emerald-500 bg-clip-text text-transparent animate-shimmer">
              Bird's Potential
            </span>

            <br />

            <span className="text-[#f0fdf4]">Naturally.</span>
          </h1>

          <p className="text-[#6b7280] text-base leading-8 max-w-[480px] mb-11">
            Scientifically formulated pellet feeds and supplements trusted by champion breeders, certified avian vets, and passionate bird lovers across India.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-14">

            <a
              href="#products"
              className="btn-glow px-9 py-4 rounded-[10px] bg-gradient-to-br from-green-700 to-green-500 text-white font-bold text-[15px] shadow-[0_0_30px_rgba(34,197,94,0.25)]"
            >
              View Products
            </a>

            <a
              href="#contact"
              className="px-9 py-4 rounded-[10px] border border-green-500/20 bg-green-500/5 backdrop-blur-xl text-[#f0fdf4] font-semibold text-[15px] hover:border-green-500 hover:bg-green-500/10 transition-all"
            >
              Contact Us →
            </a>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {stats.map((s) => (
              <div
                key={s.label}
                className="border-l-2 border-green-500/20 pl-4"
              >
                <div className="text-[1.75rem] font-extrabold text-green-500 leading-none">
                  <Counter target={s.v} suffix={s.s} />
                </div>

                <div className="text-[11px] tracking-[0.04em] text-[#6b7280] mt-1">
                  {s.label}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-[520px] hidden lg:block">

          {/* CENTER */}
          <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px] rounded-full border border-green-500/20 flex items-center justify-center text-[88px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(34,197,94,0.12),rgba(22,163,74,0.06),transparent)]">
            <img src="/image.png" className="rounded-full" alt="" />
          </div>

          {/* RINGS */}
          <div className="absolute top-1/2 left-1/2 w-[290px] h-[290px] rounded-full border border-dashed border-green-500/20 -translate-x-1/2 -translate-y-1/2" />

          <div className="absolute top-1/2 left-1/2 w-[370px] h-[370px] rounded-full border border-dashed border-green-500/10 -translate-x-1/2 -translate-y-1/2" />

          {/* FLOATING CARDS */}
          {floatCards.map((fc) => (
            <div
              key={fc.name}
              className={`absolute ${fc.top} ${fc.left} ${fc.anim}`}
            >
              <div className="min-w-[168px] rounded-2xl border border-green-500/20 bg-[#0d130d]/90 backdrop-blur-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

                <div className="text-3xl mb-2">{fc.icon}</div>

                <div className="text-[13px] font-bold text-[#f0fdf4] mb-1">
                  {fc.name}
                </div>

                <div className="inline-block rounded-full bg-green-500/10 px-2 py-1 text-[11px] font-semibold text-green-400">
                  {fc.sub}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}