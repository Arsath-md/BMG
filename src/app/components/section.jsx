function SectionHeading({
  tag,
  title,
  sub,
  align = "center",
}) 

    {
  return (
    <div
      className={`mb-[60px] ${
        align === "left" ? "text-left" : "text-center"
      }`}
    >
      {/* Tag */}
      <div
        className={`mb-[14px] flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-green-500 ${
          align === "left"
            ? "justify-start"
            : "justify-center"
        }`}
      >
        <span className="inline-block h-[1px] w-6 bg-green-500" />

        {tag}

        <span className="inline-block h-[1px] w-6 bg-green-500" />
      </div>

      {/* Title */}
      <h2 className="mb-[18px] text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.025em] text-white">
        {title}
      </h2>

      {/* Subtitle */}
      {sub && (
        <p
          className={`max-w-[540px] text-[15px] leading-[1.75] text-gray-400 ${
            align === "center"
              ? "mx-auto"
              : "mx-0"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;