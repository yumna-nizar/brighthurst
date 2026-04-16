import React from "react";
import brighthurstLogo from "/src/assets/brighthurst-logo.svg";

const usefulLinks = ["Home", "About Us", "Our Services", "Our Projects", "Testimonials"];
const supportLinks = ["Privacy policy", "Terms & Conditions", "Contact Us"];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.5 1.6-1.5H16V4.9c-.6-.1-1.3-.2-2-.2-2 0-3.4 1.2-3.4 3.5V11H8v3h2.6v7h2.9Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8Zm0 1.8A2.4 2.4 0 1 0 14.4 12 2.4 2.4 0 0 0 12 9.6Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.2 8.3A1.8 1.8 0 1 1 6.2 4.7a1.8 1.8 0 0 1 0 3.6ZM4.8 9.7h2.8V19H4.8V9.7Zm4.6 0H12v1.3h.1c.4-.7 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19h-2.8v-4.3c0-1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3V19H9.4V9.7Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 8.2a2.8 2.8 0 0 0-2-2c-1.8-.5-9.2-.5-9.2-.5s-7.4 0-9.2.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 0 12a29 29 0 0 0 .6 3.8 2.8 2.8 0 0 0 2 2c1.8.5 9.2.5 9.2.5s7.4 0 9.2-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 24 12a29 29 0 0 0-3-3.8ZM9.6 15.2V8.8l5.6 3.2-5.6 3.2Z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-white px-2 pt-8 sm:px-3 lg:px-4">
      <div className="mx-auto max-w-[1240px] rounded-t-[34px] bg-brand-navy px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-11">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.8fr_1.15fr] lg:gap-8">
          <div className="max-w-[260px]">
            <img src={brighthurstLogo} alt="Bright Hurst logo" className="w-[156px]" />
            <p className="font-aileron-semi mt-7 text-[17px] leading-[1.12] text-white">
              Shaping the UAE&apos;s future with precision &amp; passion
            </p>
          </div>

          <div>
            <h3 className="font-aileron-semi mb-5 text-lg">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[15px] leading-6 text-white/85 transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-aileron-semi mb-5 text-lg">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[15px] leading-6 text-white/85 transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-aileron-semi mb-5 text-lg">Find Us</h3>
            <p className="text-[15px] leading-6 text-white/85">
              Bright Hurst Contracting LLC
              <br />
              Office No: 1203, Al Shatha Tower
              <br />
              Dubai Internet City, Dubai, UAE
              <br />
              P.O. Box: 123456
            </p>

            <div className="mt-9">
              <h4 className="font-aileron-semi mb-4 text-lg">Social Media Links</h4>
              <div className="flex flex-wrap items-center gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="inline-flex h-7 w-7 items-center justify-center text-white transition hover:-translate-y-0.5 hover:text-white/80"
                  >
                    <span className="h-5 w-5 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-current">
                      {item.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 border-t border-white/15 pt-4 text-center">
          <p className="text-[13px] text-white/55">&copy; Bright Hurst 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
