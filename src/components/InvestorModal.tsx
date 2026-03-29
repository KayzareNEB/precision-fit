import { useState, FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const WEBHOOK_URL = "";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InvestorModal = ({ open, onOpenChange }: Props) => {
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

  const handleOpenChange = (value: boolean) => {
    onOpenChange(value);
    if (!value) setTimeout(() => setSubmitted(false), 300);
  };

  const inputClass =
    "w-full bg-transparent border-b border-border px-0 py-3.5 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors";

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md p-8 gap-0">
        {submitted ? (
          <div className="py-12 text-center">
            <p className="text-xl font-light text-foreground">
              Thank you. We will be in touch shortly.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader className="mb-8">
              <DialogTitle className="text-lg font-normal tracking-tight">
                Investor Enquiries
              </DialogTitle>
              <DialogDescription className="text-sm font-light leading-relaxed mt-2">
                We are currently engaging with select investors.
                <br />
                Get in touch to request further information.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input name="fullName" type="text" required placeholder="Full Name" className={inputClass} />
              <input name="email" type="email" required placeholder="Email" className={inputClass} />
              <input name="company" type="text" placeholder="Company / Fund (optional)" className={inputClass} />
              <textarea
                name="message"
                required
                rows={3}
                placeholder="Message"
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Submitting…" : "Submit Enquiry"}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InvestorModal;
