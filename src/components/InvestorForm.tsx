import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";

const WEBHOOK_URL = ""; // Connect to GoHighLevel or any webhook

const InvestorForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    if (!data.fullName || !data.email || !data.message) return;

    setLoading(true);
    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-32 md:py-40 px-6">
        <div className="max-w-xl mx-auto text-center">
          <FadeIn>
            <p className="text-2xl font-light text-foreground">
              Thank you. We will be in touch shortly.
            </p>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 md:py-40 px-6">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-12">
            Investor Enquiries
          </h2>
        </FadeIn>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FadeIn delay={0.05}>
            <input
              name="fullName"
              type="text"
              required
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-border px-0 py-4 text-base font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full bg-transparent border-b border-border px-0 py-4 text-base font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <input
              name="company"
              type="text"
              placeholder="Company / Fund (optional)"
              className="w-full bg-transparent border-b border-border px-0 py-4 text-base font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Message"
              className="w-full bg-transparent border-b border-border px-0 py-4 text-base font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
            />
          </FadeIn>
          <FadeIn delay={0.25}>
            <button
              type="submit"
              disabled={loading}
              className="mt-4 px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Submitting…" : "Submit Enquiry"}
            </button>
          </FadeIn>
        </form>
      </div>
    </section>
  );
};

export default InvestorForm;
