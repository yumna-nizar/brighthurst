import React from "react";
import brighthurstLogo from "/src/assets/brighthurst-logo.svg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-line/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="shrink-0">
          <img src={brighthurstLogo} alt="Bright Hurst logo" className="w-[132px] sm:w-[150px]" />
        </a>

        <div className="flex items-center gap-4 lg:gap-8">
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-satoshi text-sm font-medium tracking-[0.12em] text-brand-muted uppercase transition hover:text-brand-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-brand-navy-strong px-5 text-sm font-medium text-white transition hover:bg-brand-navy"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
