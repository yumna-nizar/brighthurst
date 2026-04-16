import React from "react";
import industryimage from "/src/assets/industry-img.svg";

const Banner = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={industryimage}
        alt="Construction site"
        className="h-[560px] w-full object-cover object-center md:h-[640px]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,18,42,0.16)_0%,rgba(12,18,42,0.62)_100%)]" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="mx-auto max-w-[760px] text-center text-white">
          <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.24em] uppercase backdrop-blur-sm">
            Bright Hurst Contracting
          </p>
          <h1 className="font-aileron mx-auto max-w-[720px] text-4xl leading-[1.1] md:text-5xl lg:text-[58px]">
            Shaping the UAE&apos;s future with precision &amp; passion
          </h1>
          <p className="mx-auto mt-5 max-w-[590px] text-sm leading-7 text-white/85 sm:text-base">
            Bright Hurst Contracting LLC delivers expert interior fit-out, MEP, and civil
            works across the UAE with a focus on quality, innovation, and integrity.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white px-6 text-sm font-medium text-brand-ink transition hover:bg-white/90"
            >
              Get A Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
