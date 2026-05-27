"use client";
export {GALLERY_ITEMS} from "../data/gallery"

import SectionHeading from "../components/section";
import { GALLERY_ITEMS } from "../data/gallery";



export default function Gallery() {
  return (
    <section className="bg-[#101010] px-[5%] py-[110px]">
      <div className="mx-auto max-w-[1320px]">

        {/* Heading */}
        <SectionHeading
          tag="GALLERY"
          title="Birds & Products"
          sub="A glimpse into the world of AvianElite."
        />

        {/* Gallery */}
        <div
          className="
            columns-1 gap-5
            sm:columns-2
            lg:columns-3
            xl:columns-4
          "
        >
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`
                group relative mb-5
                break-inside-avoid
                overflow-hidden rounded-2xl
                border border-white/10
                bg-[#111111]
                ${item.h}
                cursor-pointer
              `}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.label}
                className="
                  h-full w-full object-cover
                  transition-all duration-500
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                  opacity-70
                  transition-all duration-300
                  group-hover:opacity-100
                "
              />

              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  bg-green-500/0
                  transition-all duration-300
                  group-hover:bg-green-500/10
                "
              />

              {/* Label */}
              <div
                className="
                  absolute bottom-0 left-0 right-0
                  p-5
                "
              >
                <div
                  className="
                    translate-y-4
                    text-[14px]
                    font-semibold
                    tracking-[0.06em]
                    text-white
                    opacity-0
                    transition-all duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  {item.label}
                </div>
              </div>

              {/* Border Glow */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  rounded-2xl
                  border border-transparent
                  transition-all duration-300
                  group-hover:border-green-500/30
                  group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}