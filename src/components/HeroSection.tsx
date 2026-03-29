import FadeIn from "./FadeIn";
import logo from "@/assets/logo.png";

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
    <FadeIn>
      <img src={logo} alt="N.E. Body" className="h-16 w-auto mb-12 mx-auto" />
    </FadeIn>
    <FadeIn delay={0.15}>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-center leading-[1.1] max-w-4xl">
        Fit Made Personal.
        <br />
        Shopping Made Precise.
      </h1>
    </FadeIn>
    <FadeIn delay={0.3}>
      <p className="mt-8 text-lg md:text-xl text-muted-foreground text-center max-w-2xl font-light leading-relaxed">
        AI-powered virtual try-on built for the future of fashion retail.
      </p>
    </FadeIn>
    <FadeIn delay={0.45} className="flex flex-col sm:flex-row gap-4 mt-12">
      <a
        href="#contact"
        className="px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition-opacity text-center"
      >
        Investor Enquiries
      </a>
      <a
        href="#updates"
        className="px-8 py-3.5 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors text-center"
      >
        Get Updates
      </a>
    </FadeIn>
  </section>
);

export default HeroSection;
