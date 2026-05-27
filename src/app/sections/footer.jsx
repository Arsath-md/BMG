export default function Footer() {
  return (
    <footer className="border-t border-green-500/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 py-16">

        {/* Top Footer */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black text-primary mb-4">
              AvianElite
            </h2>

            <p className="text-zinc-400 leading-7 text-sm">
              Premium bird nutrition products trusted by breeders,
              aviary owners, and bird lovers across India.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-green-500/20 flex items-center justify-center hover:bg-primary hover:text-black transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-green-500/20 flex items-center justify-center hover:bg-primary hover:text-black transition"
              >
                X
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-green-500/20 flex items-center justify-center hover:bg-primary hover:text-black transition"
              >
                in
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Products
            </h3>

            <div className="flex flex-col gap-3 text-zinc-400 text-sm">
              <a href="#" className="hover:text-primary transition">
                Pigeon Feed
              </a>

              <a href="#" className="hover:text-primary transition">
                Cage Bird Mix
              </a>

              <a href="#" className="hover:text-primary transition">
                Supplements
              </a>

              <a href="#" className="hover:text-primary transition">
                Growth Formula
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-zinc-400 text-sm">
              <a href="#about" className="hover:text-primary transition">
                About Us
              </a>

              <a href="#" className="hover:text-primary transition">
                Our Mission
              </a>

              <a href="#" className="hover:text-primary transition">
                Careers
              </a>

              <a href="#contact" className="hover:text-primary transition">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-sm text-zinc-400">

              <div>
                📍 Chennai, Tamil Nadu
              </div>

              <div>
                📞 +91 99999 99999
              </div>

              <div>
                ✉️ hello@avianelite.in
              </div>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="bg-primary hover:bg-primary-dark transition px-5 py-3 rounded-xl text-black font-bold text-center mt-2"
              >
                WhatsApp Us
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-500/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">

          <p>
            © 2026 AvianElite. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-primary transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-primary transition">
              Terms
            </a>

            <a href="#" className="hover:text-primary transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}