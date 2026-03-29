import FadeIn from "./FadeIn";

const PositioningSection = () => (
  <section className="py-32 md:py-40 px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground">
          N.E. Body is developing proprietary, patent-pending technology to redefine how consumers experience fashion online.
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="mt-8 text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
          Built to reduce returns, increase confidence, and unlock a new standard of precision in eCommerce.
        </p>
      </FadeIn>
    </div>
  </section>
);

export default PositioningSection;
