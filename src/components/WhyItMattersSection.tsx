import FadeIn from "./FadeIn";

const points = [
  "High return rates in fashion eCommerce",
  "Lack of confidence in sizing and fit",
  "Broken online shopping experience",
];

const WhyItMattersSection = () => (
  <section className="py-32 md:py-40 px-6 bg-surface">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-16">
          Why It Matters
        </h2>
      </FadeIn>
      <div className="space-y-8">
        {points.map((point, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex items-start gap-6">
              <span className="text-sm text-muted-foreground mt-1 font-light">0{i + 1}</span>
              <p className="text-lg md:text-xl font-light text-foreground">{point}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.4}>
        <p className="mt-20 text-xl md:text-2xl font-light text-foreground">
          We are building a new category of precision-driven shopping.
        </p>
      </FadeIn>
    </div>
  </section>
);

export default WhyItMattersSection;
