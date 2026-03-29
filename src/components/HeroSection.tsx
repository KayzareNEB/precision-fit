import { useState } from "react";
import FadeIn from "./FadeIn";
import InvestorModal from "./InvestorModal";
import UpdatesModal from "./UpdatesModal";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const [investorOpen, setInvestorOpen] = useState(false);
  const [updatesOpen, setUpdatesOpen] = useState(false);

  return (
    <>
      <section className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-6">
        <FadeIn>
          <img
            src={logo}
            alt="N.E. Body"
            className="h-36 md:h-48 lg:h-56 w-auto mb-16 mx-auto"
          />
        </FadeIn>
        <FadeIn delay={0.12}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-center leading-[1.08] max-w-4xl">
            Fit Made Personal.
            <br />
            Shopping Made Precise.
          </h1>
        </FadeIn>
        <FadeIn delay={0.24}>
          <p className="mt-7 text-lg md:text-xl text-muted-foreground text-center max-w-2xl font-light leading-relaxed">
            AI-powered virtual try-on, built to redefine precision in fashion retail.
          </p>
        </FadeIn>
        <FadeIn delay={0.36} className="flex flex-col sm:flex-row gap-4 mt-10">
          <button
            onClick={() => setInvestorOpen(true)}
            className="px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Investor Enquiries
          </button>
          <button
            onClick={() => setUpdatesOpen(true)}
            className="px-8 py-3.5 border border-foreground/30 text-foreground text-sm tracking-wide hover:border-foreground transition-colors"
          >
            Get Updates
          </button>
        </FadeIn>
        <FadeIn delay={0.48}>
          <p className="mt-10 text-xs tracking-wide text-muted-foreground text-center">
            Patent pending · Pre-seed · UK-based
          </p>
          <p className="mt-2 text-[11px] tracking-wide text-muted-foreground/50 text-center">
            Full materials available upon request.
          </p>
        </FadeIn>
      </section>

      <InvestorModal open={investorOpen} onOpenChange={setInvestorOpen} />
      <UpdatesModal open={updatesOpen} onOpenChange={setUpdatesOpen} />
    </>
  );
};

export default HeroSection;
