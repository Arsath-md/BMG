import SectionHeading from "../components/section";
 
export default function About() {
  const milestones = [
    {
      year: "2016",
      text: "Founded in Chennai with 3 products and a small R&D lab.",
    },
    {
      year: "2018",
      text: "ISO 9001:2015 certified. Expanded to 5 states.",
    },
    {
      year: "2021",
      text: "Crossed 8,000 customers. Partnered with avian vet colleges.",
    },
    {
      year: "2025",
      text: "12,000+ customers. 50+ SKUs. Pan-India distribution.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#0b0b0b] px-[5%] py-[110px]"
    >
      <div
        className="
          mx-auto grid max-w-[1320px]
          items-center gap-16
          lg:grid-cols-2 lg:gap-20
        "
      >
        {/* Visual Side */}
        <div className="relative">

          {/* Main Card */}
          <div
            className="
              relative overflow-hidden
              rounded-[22px]
              border border-white/10
              bg-gradient-to-br
              from-[#071207] to-[#0a1a0a]
              px-6 py-10
              sm:px-10 sm:py-12
              min-h-[420px]
              flex flex-col items-center justify-center
              gap-5
            "
          >
            {/* Background Glow */}
            <div
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.06),transparent_60%)]
              "
            />

            {/* Factory Icon */}
            <div className="text-[70px] sm:text-[80px]">
              🏭
            </div>

            {/* Title */}
            <div
              className="
                text-center
                text-[18px] sm:text-[20px]
                font-bold text-green-500
              "
            >
              State-of-the-Art Facility
            </div>

            {/* Description */}
            <p
              className="
                max-w-[260px]
                text-center
                text-[13px]
                leading-[1.65]
                text-gray-400
              "
            >
              GMP-compliant cold-process mixing with
              3-stage laboratory testing per batch
            </p>

            {/* Badges */}
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              {["ISO 9001", "GMP", "FSSAI"].map((b) => (
                <div
                  key={b}
                  className="
                    rounded-full
                    border border-white/10
                    px-[14px] py-[6px]
                    text-[11px]
                    font-bold text-green-500
                  "
                >
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Floating Badge */}
          <div
            className="
              absolute -bottom-4 right-0
              rounded-[14px]
              bg-gradient-to-br
              from-green-700 to-green-500
              px-5 py-4
              shadow-[0_8px_32px_rgba(34,197,94,0.35)]
              sm:-right-4
            "
          >
            <div
              className="
                text-[18px] sm:text-[20px]
                font-black leading-none text-white
              "
            >
              ISO
            </div>

            <div
              className="
                text-[9px] sm:text-[10px]
                font-semibold tracking-[0.06em]
                text-white/80
              "
            >
              9001 CERTIFIED
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div>

          {/* Heading */}
          <SectionHeading
            tag="OUR STORY"
            align="left"
            title={
              <>
                Born from a{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-green-500 to-green-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  Passion for Birds
                </span>
              </>
            }
          />

          {/* Paragraphs */}
          <p
            className="
              mb-5
              text-[14px] sm:text-[14.5px]
              leading-[1.82]
              text-gray-400
            "
          >
            Founded in 2016 by BMG nutritionists and
            champion pigeon breeders, AvianElite emerged
            from frustration with low-quality feeds flooding
            the Indian market.
          </p>

          <p
            className="
              mb-8
              text-[14px] sm:text-[14.5px]
              leading-[1.82]
              text-gray-400
            "
          >
            We built our own R&D lab, partnered with
            veterinary colleges, and developed formulas
            backed by real science. Today our feeds are
            trusted in championship lofts, licensed aviaries,
            and by everyday bird lovers who demand the
            very best.
          </p>

          {/* Timeline */}
          <div className="border-l-2 border-white/10 pl-6">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative ${
                  i !== milestones.length - 1
                    ? "mb-6"
                    : ""
                }`}
              >
                {/* Dot */}
                <div
                  className="
                    absolute -left-[31px] top-[3px]
                    h-[10px] w-[10px]
                    rounded-full
                    bg-green-500
                    shadow-[0_0_8px_rgba(34,197,94,1)]
                  "
                />

                {/* Year */}
                <div
                  className="
                    mb-1
                    text-[12px]
                    font-bold text-green-500
                  "
                >
                  {m.year}
                </div>

                {/* Text */}
                <div
                  className="
                    text-[13px]
                    leading-[1.6]
                    text-gray-400
                  "
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}