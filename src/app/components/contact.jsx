"use client";

import { useState } from "react";
import SectionHeading from "../components/section";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handle = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  const infoCards = [
    {
      icon: <MapPin size={22} />,
      title: "Location",
      value:
        "123 Feed Market Lane, Chennai, Tamil Nadu 600001",
    },
    {
      icon: <Phone size={22} />,
      title: "Phone",
      value: "+91 99999 99999",
    },
    {
      icon: <Mail size={22} />,
      title: "Email",
      value: "hello@avianelite.in",
    },
    {
      icon: <Clock3 size={22} />,
      title: "Business Hours",
      value:
        "Monday – Saturday : 9:00 AM – 7:00 PM IST",
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-[#0b0b0b]
        px-[5%] py-[110px]
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_30%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1320px]">

        {/* Heading */}
        <SectionHeading
          tag="CONTACT"
          title="Let's Connect"
          sub="Place an order, ask about bulk pricing, or just say hello — we respond within 2 hours on business days."
        />

        {/* Main Layout */}
        <div
          className="
            grid gap-8
            lg:grid-cols-[1.2fr_0.8fr]
            lg:gap-12
          "
        >
          {/* ========================= */}
          {/* LEFT SIDE - CONTACT FORM */}
          {/* ========================= */}

          <div
            className="
              relative overflow-hidden
              rounded-[28px]
              border border-white/10
              bg-[#111111]/80
              p-5 sm:p-8 lg:p-10
              backdrop-blur-xl
            "
          >
            {/* Inner Glow */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_35%)]
                pointer-events-none
              "
            />

            {/* Content */}
            <div className="relative z-10">

              {/* Top */}
              <div className="mb-8">
                <h3
                  className="
                    mb-3
                    text-[26px]
                    font-extrabold
                    leading-tight
                    text-white
                    sm:text-[32px]
                  "
                >
                  Send Us a Message
                </h3>

                <p
                  className="
                    max-w-[580px]
                    text-[14px]
                    leading-[1.8]
                    text-gray-400
                    sm:text-[15px]
                  "
                >
                  Fill out the form and our team
                  will get back to you shortly.
                  We usually reply within
                  2 business hours.
                </p>
              </div>

              {/* SUCCESS MESSAGE */}
              {sent ? (
                <div
                  className="
                    flex flex-col items-center
                    justify-center
                    py-12 text-center
                    sm:py-20
                  "
                >
                  <CheckCircle2
                    size={80}
                    className="
                      mb-5 text-green-500
                    "
                  />

                  <h4
                    className="
                      mb-3
                      text-[24px]
                      font-bold text-white
                      sm:text-[30px]
                    "
                  >
                    Message Sent Successfully
                  </h4>

                  <p
                    className="
                      max-w-[450px]
                      text-[14px]
                      leading-[1.8]
                      text-gray-400
                    "
                  >
                    Thank you for contacting us.
                    Our team will contact you
                    shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={submit}
                  className="space-y-5"
                >
                  {/* ROW */}
                  <div
                    className="
                      grid gap-5
                      sm:grid-cols-2
                    "
                  >
                    {/* NAME */}
                    <div>
                      <label
                        className="
                          mb-2 block
                          text-[13px]
                          font-medium
                          text-gray-300
                        "
                      >
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handle}
                        placeholder="John Doe"
                        required
                        className="
                          h-[56px] w-full
                          rounded-xl
                          border border-white/10
                          bg-black/20
                          px-4
                          text-[14px]
                          text-white
                          outline-none
                          transition-all duration-300
                          placeholder:text-gray-500
                          focus:border-green-500
                          focus:ring-4
                          focus:ring-green-500/10
                        "
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label
                        className="
                          mb-2 block
                          text-[13px]
                          font-medium
                          text-gray-300
                        "
                      >
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handle}
                        placeholder="+91 98765 43210"
                        className="
                          h-[56px] w-full
                          rounded-xl
                          border border-white/10
                          bg-black/20
                          px-4
                          text-[14px]
                          text-white
                          outline-none
                          transition-all duration-300
                          placeholder:text-gray-500
                          focus:border-green-500
                          focus:ring-4
                          focus:ring-green-500/10
                        "
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      className="
                        mb-2 block
                        text-[13px]
                        font-medium
                        text-gray-300
                      "
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="you@example.com"
                      required
                      className="
                        h-[56px] w-full
                        rounded-xl
                        border border-white/10
                        bg-black/20
                        px-4
                        text-[14px]
                        text-white
                        outline-none
                        transition-all duration-300
                        placeholder:text-gray-500
                        focus:border-green-500
                        focus:ring-4
                        focus:ring-green-500/10
                      "
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      className="
                        mb-2 block
                        text-[13px]
                        font-medium
                        text-gray-300
                      "
                    >
                      Your Message
                    </label>

                    <textarea
                      rows={6}
                      name="msg"
                      value={form.msg}
                      onChange={handle}
                      placeholder="Tell us about your order or inquiry..."
                      required
                      className="
                        w-full resize-none
                        rounded-xl
                        border border-white/10
                        bg-black/20
                        px-4 py-4
                        text-[14px]
                        text-white
                        outline-none
                        transition-all duration-300
                        placeholder:text-gray-500
                        focus:border-green-500
                        focus:ring-4
                        focus:ring-green-500/10
                      "
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      group relative
                      flex h-[58px] w-full
                      items-center justify-center
                      gap-3 overflow-hidden
                      rounded-xl
                      bg-gradient-to-r
                      from-green-700 to-green-500
                      text-[15px]
                      font-bold text-white
                      transition-all duration-300
                      hover:scale-[1.01]
                      hover:shadow-[0_12px_40px_rgba(34,197,94,0.35)]
                      disabled:cursor-not-allowed
                      disabled:opacity-70
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

                    {loading ? (
                      <>
                        <span
                          className="
                            h-5 w-5 animate-spin
                            rounded-full
                            border-2 border-white/30
                            border-t-white
                          "
                        />

                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send
                          size={18}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />

                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ========================= */}
          {/* RIGHT SIDE */}
          {/* ========================= */}

          <div className="flex flex-col gap-5">

            {/* Info Cards */}
            {infoCards.map((item, i) => (
              <div
                key={i}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-[#111111]/80
                  p-5
                  transition-all duration-300
                  hover:border-green-500/20
                  hover:bg-green-500/[0.03]
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute inset-0
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                    bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)]
                  "
                />

                <div className="relative z-10 flex gap-4">

                  {/* Icon */}
                  <div
                    className="
                      flex h-[54px] w-[54px]
                      shrink-0 items-center justify-center
                      rounded-xl
                      bg-green-500/10
                      text-green-500
                    "
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <div
                      className="
                        mb-1
                        text-[11px]
                        font-semibold
                        tracking-[0.08em]
                        text-gray-500
                      "
                    >
                      {item.title.toUpperCase()}
                    </div>

                    <div
                      className="
                        text-[14px]
                        leading-[1.8]
                        text-white
                      "
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919999999999?text=Hi! I want to place a bulk order."
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative overflow-hidden
                rounded-2xl
                bg-gradient-to-r
                from-[#128C7E]
                to-[#25D366]
                px-6 py-5
                text-white
                transition-all duration-300
                hover:scale-[1.02]
                hover:shadow-[0_12px_40px_rgba(37,211,102,0.35)]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  bg-white/0 transition-all duration-300
                  group-hover:bg-white/5
                "
              />

              <div
                className="
                  relative z-10
                  flex items-center gap-4
                "
              >
                <div className="text-[30px]">
                  💬
                </div>

                <div>
                  <div
                    className="
                      text-[18px]
                      font-bold
                    "
                  >
                    Chat on WhatsApp
                  </div>

                  <div
                    className="
                      mt-1 text-[12px]
                      text-white/80
                    "
                  >
                    Fastest way to contact us
                  </div>
                </div>
              </div>
            </a>

            {/* Extra Box */}
            <div
              className="
                rounded-2xl
                border border-green-500/10
                bg-green-500/[0.03]
                p-6
              "
            >
              <div
                className="
                  mb-2
                  text-[16px]
                  font-bold text-white
                "
              >
                Bulk Orders & Distribution
              </div>

              <p
                className="
                  text-[13px]
                  leading-[1.8]
                  text-gray-400
                "
              >
                Interested in becoming a reseller
                or placing large quantity orders?
                Contact our distribution team for
                special pricing and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}