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

const UpdatesModal = ({ open, onOpenChange }: Props) => {
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

  const handleOpenChange = (value: boolean) => {
    onOpenChange(value);
    if (!value) setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md p-8 gap-0">
        {submitted ? (
          <div className="py-12 text-center">
            <p className="text-xl font-light text-foreground">You're on the list.</p>
          </div>
        ) : (
          <>
            <DialogHeader className="mb-8">
              <DialogTitle className="text-lg font-normal tracking-tight">
                Get Updates
              </DialogTitle>
              <DialogDescription className="text-sm font-light leading-relaxed mt-2">
                Stay informed on our progress.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="updateEmail"
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-transparent border-b border-border px-0 py-3.5 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "…" : "Subscribe"}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UpdatesModal;
