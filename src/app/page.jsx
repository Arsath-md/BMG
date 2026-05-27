import Hero from "./sections/hero";
import Products from "./sections/product";
import Nutrition from "./sections/nutrition";
import Testimonials from "./sections/testimonal";
import FloatingWA from "./components/fawhatsapp";
import WhyUs from "./sections/whyus";
import About from "./sections/about";
import Gallery from "./sections/gallery";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <Products />
        <WhyUs/>
        <About/>
        <Nutrition />
        <Testimonials />
        <Gallery/>
        <Contact/>

        {/* {/* <Gallery /> */}
      </main>

      <FloatingWA/>

    </>
  );
}
