import { useState } from "react";
import logo from "@/assets/logo.png";

interface Props {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenCookies: () => void;
}

const Footer = ({ onOpenPrivacy, onOpenTerms, onOpenCookies }: Props) => (
  <footer className="py-6 sm:py-8 px-5 sm:px-10 md:px-16 border-t border-border/40">
    <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:gap-0">
      {/* Left */}
      <div className="flex items-center gap-4 sm:gap-5 md:flex-1 justify-center md:justify-start">
        <img src={logo} alt="N.E. Body" className="h-5 sm:h-6 w-auto" />
        <a
          href="mailto:hello@nebody.co.uk"
          className="text-[11px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          hello@nebody.co.uk
        </a>
      </div>

      {/* Centre */}
      <div className="md:flex-1 flex justify-center order-last md:order-none">
        <span className="text-[10px] sm:text-[11px] text-muted-foreground/40 tracking-wide">
          © 2026 N.E. Body. All rights reserved.
        </span>
      </div>

      {/* Right */}
      <div className="flex gap-4 sm:gap-6 md:flex-1 justify-center md:justify-end">
        <button onClick={onOpenPrivacy} className="text-[10px] sm:text-[11px] text-muted-foreground hover:text-foreground transition-colors tracking-wide">
          Privacy Policy
        </button>
        <button onClick={onOpenTerms} className="text-[10px] sm:text-[11px] text-muted-foreground hover:text-foreground transition-colors tracking-wide">
          Terms of Use
        </button>
        <button onClick={onOpenCookies} className="text-[10px] sm:text-[11px] text-muted-foreground hover:text-foreground transition-colors tracking-wide">
          Cookie Policy
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
