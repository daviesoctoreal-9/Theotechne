"use client";

import { useState } from "react";
import { startLogin } from "@/const";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { programme } from "@shared/courseContent";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/60 bg-white/95 shadow-[0_4px_20px_rgb(0,0,0,0.03)] backdrop-blur-xl transition-all">
      <div className="mx-auto flex min-h-[76px] w-full items-center justify-between px-4 md:px-8 lg:px-12">
       {/* Logo Section */}
        <a
          href="#top"
          className="flex items-center transition hover:opacity-80"
          aria-label="Theotechne Institute home"
        >
          <img 
            src="/images/logo2.png" 
            alt="Theotechne Institute Logo" 
            className="h-10 w-auto object-contain" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 text-sm font-semibold text-slate-600 md:flex">
          <a
            href="#programme"
            className="rounded-xl px-5 py-2.5 transition-colors hover:bg-[#9B4F69]/10 hover:text-[#9B4F69]"
          >
            Programme
          </a>
          <a
            href="#curriculum"
            className="rounded-xl px-5 py-2.5 transition-colors hover:bg-[#9B4F69]/10 hover:text-[#9B4F69]"
          >
            Curriculum
          </a>
          <a
            href="#certificate"
            className="rounded-xl px-5 py-2.5 transition-colors hover:bg-[#9B4F69]/10 hover:text-[#9B4F69]"
          >
            Certificate
          </a>
          <a
            href={programme.contactHref}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2 transition hover:border-[#9B4F69]/30 hover:bg-[#9B4F69]/10 hover:text-[#9B4F69]"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            onClick={() => startLogin()}
            className="hidden rounded-xl bg-cyan-500 px-6 py-5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-md md:flex"
          >
            Learner sign in
          </Button>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition-colors hover:bg-[#9B4F69]/10 hover:text-[#9B4F69] md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute left-0 top-full w-full origin-top border-b border-slate-100 bg-white px-4 py-4 shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2 text-center text-sm font-semibold text-slate-600">
          <a
            href="#programme"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-xl px-5 py-3 transition-colors hover:bg-[#9B4F69]/10 hover:text-[#9B4F69]"
          >
            Programme
          </a>
          <a
            href="#curriculum"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-xl px-5 py-3 transition-colors hover:bg-[#9B4F69]/10 hover:text-[#9B4F69]"
          >
            Curriculum
          </a>
          <a
            href="#certificate"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-xl px-5 py-3 transition-colors hover:bg-[#9B4F69]/10 hover:text-[#9B4F69]"
          >
            Certificate
          </a>
          <a
            href={programme.contactHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mx-auto mt-2 inline-flex w-full max-w-[200px] items-center justify-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-[#9B4F69]/30 hover:bg-[#9B4F69]/10 hover:text-[#9B4F69]"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <hr className="my-2 border-slate-100" />
          <Button
            onClick={() => {
              startLogin();
              setIsMobileMenuOpen(false);
            }}
            className="mx-auto w-full max-w-[200px] rounded-xl bg-cyan-500 py-6 text-sm font-medium text-white shadow-sm transition hover:bg-cyan-600"
          >
            Learner sign in
          </Button>
        </nav>
      </div>
    </header>
  );
}