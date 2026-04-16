import React from "react";

const metrics = [
  { value: "250+", label: "Projects completed" },
  { value: "8+", label: "Years of trusted delivery" },
  { value: "500+", label: "Skilled professionals" },
];

export const Hero = () => {
  return (
    <section id="impact" className="bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="flex items-start gap-4">
          <div className="mt-1 h-14 w-2 rounded-full bg-brand-navy-strong" />
          <div>
            <p className="font-aileron-semi text-xl text-brand-ink">Our Impact</p>
            <p className="font-aileron-semi text-xl text-brand-ink">In Numbers</p>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:gap-20">
          {metrics.map((metric) => (
            <div key={metric.value}>
              <p className="font-rajdhani text-[72px] leading-none font-semibold tracking-tight text-brand-navy-strong sm:text-[84px] lg:text-[96px]">
                {metric.value}
              </p>
              <p className="mt-3 text-base text-brand-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
