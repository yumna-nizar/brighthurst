import React from "react";
import worker from "/src/assets/worker.png";

const cards = [
  {
    title: "Mission",
    description:
      "To deliver premium-quality construction and interior solutions with precision and professionalism.",
  },
  {
    title: "Vision",
    description:
      "To be one of the most trusted and respected contracting companies in the UAE.",
  },
];

const Mission = () => {
  return (
    <section id="about" className="py-10 pb-20 md:py-16 md:pb-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <h2 className="font-aileron-semi mb-8 text-3xl leading-tight text-brand-ink md:mb-10 md:text-[38px]">
          Building Excellence, Delivering Trust
        </h2>

        <div className="grid items-center gap-8 md:grid-cols-3 md:gap-10">
          <div>
            <p className="text-sm leading-7 text-brand-muted sm:text-[15px]">
              Bright Hurst Contracting LLC is a leading interior fit-out,
              electro-mechanical, and civil contracting company based in the UAE. With a
              strong commitment to quality, innovation, and integrity, we bring client
              visions to life through expert craftsmanship and project excellence. Founded
              with the vision to redefine industry standards, we pride ourselves on delivering
              complex projects on time, on budget, and beyond expectations.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[360px] overflow-hidden rounded-[24px] bg-brand-card shadow-[0_18px_50px_rgba(20,28,60,0.08)]">
              <img
                src={worker}
                className="h-[320px] w-full object-cover object-top"
                alt="Bright Hurst construction professional"
              />
            </div>
          </div>

          <div className="space-y-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-[24px] border border-brand-line bg-brand-card p-6 shadow-[0_14px_36px_rgba(20,28,60,0.05)]"
              >
                <h3 className="font-aileron-semi text-sm tracking-[0.16em] text-brand-navy-strong uppercase">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
