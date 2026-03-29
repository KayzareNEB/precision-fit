import { useState } from "react";
import logo from "@/assets/logo.png";

interface Props {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenCookies: () => void;
}

const Footer = ({ onOpenPrivacy, onOpenTerms, onOpenCookies }: Props) => (
  <footer className="py-8 px-10 md:px-16 border-t border-border/40">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-5">
        <img src={logo} alt="N.E. Body" className="h-6 w-auto" />
        <a
          href="mailto:hello@nebody.co.uk"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          hello@nebody.co.uk
        </a>
        <span className="text-[11px] text-muted-foreground/40 tracking-wide">© 2026 N.E. Body. All rights reserved.</span>
      </div>
      <div className="flex gap-6">
        <button onClick={onOpenPrivacy} className="text-[11px] text-muted-foreground hover:text-foreground transition-colors tracking-wide">
          Privacy Policy
        </button>
        <button onClick={onOpenTerms} className="text-[11px] text-muted-foreground hover:text-foreground transition-colors tracking-wide">
          Terms of Use
        </button>
        <button onClick={onOpenCookies} className="text-[11px] text-muted-foreground hover:text-foreground transition-colors tracking-wide">
          Cookie Policy
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
