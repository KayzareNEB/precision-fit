import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "nebody-cookie-consent";

interface Props {
  onOpenCookiePolicy: () => void;
}

const CookieConsent = ({ onOpenCookiePolicy }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-md"
        >
          <div className="bg-popover border border-border/60 shadow-lg p-6">
            <p className="text-sm font-light leading-relaxed text-foreground/80">
              We use cookies to improve site functionality and understand traffic. You can accept or reject non-essential cookies.
            </p>
            <button
              onClick={onOpenCookiePolicy}
              className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors mt-2 mb-5 block"
            >
              Read our Cookie Policy
            </button>
            <div className="flex gap-3">
              <button
                onClick={() => handleChoice("accepted")}
                className="flex-1 px-5 py-2.5 bg-primary text-primary-foreground text-xs tracking-wide hover:opacity-90 transition-opacity"
              >
                Accept Cookies
              </button>
              <button
                onClick={() => handleChoice("rejected")}
                className="flex-1 px-5 py-2.5 border border-foreground/30 text-foreground text-xs tracking-wide hover:border-foreground transition-colors"
              >
                Reject Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
