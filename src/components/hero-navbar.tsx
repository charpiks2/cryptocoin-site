"use client";

import React, { useState } from "react";

type AnimatedNavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const navLinksData = [
  { label: "Философия", href: "#philosophy" },
  { label: "Цикл роста", href: "#growth-cycle" },
  { label: "FAQ", href: "#faq" },
];

function AnimatedNavLink({ href, children }: AnimatedNavLinkProps) {
  return (
    <a
      href={href}
      className="group relative inline-flex h-6 items-center overflow-hidden text-xs font-medium uppercase tracking-[0.18em] text-white/72 sm:text-sm"
    >
      <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
        <span className="block leading-6">{children}</span>
        <span className="block leading-6 text-white">{children}</span>
      </div>
    </a>
  );
}

export function HeroNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const headerShapeClass = isOpen ? "rounded-[1.75rem]" : "rounded-full";

  const logoElement = (
    <div className="relative flex h-5 w-5 items-center justify-center">
      <span className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/85" />
      <span className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/65" />
      <span className="absolute top-1/2 right-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/65" />
      <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/85" />
    </div>
  );

  return (
    <header
      className={`glass-panel fixed top-4 left-1/2 z-30 flex w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 flex-col border border-white/10 px-4 py-3 transition-[border-radius] duration-200 ease-in-out sm:w-[calc(100%-2rem)] sm:px-5 ${headerShapeClass}`}
    >
      <div className="flex items-center justify-between gap-x-6">
        <div className="flex items-center gap-3">
          {logoElement}
          <div className="hidden sm:block">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/74">
              CryptoCoin
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/42">
              premium rwa concept
            </div>
          </div>
        </div>

        <nav className="hidden items-center space-x-5 sm:flex">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="#site-footer"
            className="rounded-full border border-white/10 bg-white/6 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Обратная связь
          </a>
          <a
            href="#hero-video"
            className="rounded-full border border-emerald-400/35 bg-emerald-400/14 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100 shadow-[0_0_18px_rgba(52,211,153,0.22)] transition hover:border-emerald-300/55 hover:bg-emerald-400/18 hover:shadow-[0_0_26px_rgba(52,211,153,0.34)]"
          >
            Покупка токена
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/74 transition hover:bg-white/6 hover:text-white sm:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          {isOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18 18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
          isOpen ? "max-h-80 pt-4 opacity-100" : "pointer-events-none max-h-0 pt-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 border-t border-white/8 pt-4">
          {navLinksData.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.18em] text-white/74 transition hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex w-full flex-col gap-3">
            <a
              href="#site-footer"
              className="rounded-full border border-white/10 bg-white/6 px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-white/80 transition hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Обратная связь
            </a>
            <a
              href="#hero-video"
              className="rounded-full border border-emerald-400/35 bg-emerald-400/14 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100 shadow-[0_0_18px_rgba(52,211,153,0.22)] transition hover:border-emerald-300/55 hover:bg-emerald-400/18 hover:shadow-[0_0_26px_rgba(52,211,153,0.34)]"
              onClick={() => setIsOpen(false)}
            >
              Покупка токена
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
