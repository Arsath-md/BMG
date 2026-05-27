import ProductCard from "../components/productcard";
import { PRODUCTS } from "../data/product";
import SectionHeading from "../components/section";

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[#0b0b0b] px-[5%] py-[110px]"
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeading
          tag="OUR PRODUCTS"
          title="Premium Nutrition Line"
          sub="Every formula is backed by avian science and crafted to deliver measurable results in health, performance, and vitality."
        />

        {/* Mobile Scroll + Desktop Grid */}
        <div
          className="
            flex gap-5 overflow-x-auto pb-4
            scrollbar-hide
            sm:grid sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="
                min-w-[290px]
                flex-shrink-0
                sm:min-w-0
              "
            >
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}