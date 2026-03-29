import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";

const WEBHOOK_URL = ""; // Connect to GoHighLevel or any webhook

const UpdatesSignup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem("updateEmail") as HTMLInputElement).value.trim();
    if (!email) return;

    setLoading(true);
    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      }
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="updates" className="py-32 md:py-40 px-6 bg-surface">
      <div className="max-w-xl mx-auto">
        {submitted ? (
          <FadeIn>
            <p className="text-2xl font-light text-foreground text-center">
              You're on the list.
            </p>
          </FadeIn>
        ) : (
          <>
            <FadeIn>
              <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-12">
                Stay Updated
              </h2>
            </FadeIn>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <FadeIn delay={0.05} className="flex-1">
                <input
                  name="updateEmail"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full bg-transparent border-b border-border px-0 py-4 text-base font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 sm:mt-0 mt-2"
                >
                  {loading ? "…" : "Subscribe"}
                </button>
              </FadeIn>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default UpdatesSignup;
