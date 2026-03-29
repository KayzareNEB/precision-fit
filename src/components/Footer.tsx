import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-8 px-10 md:px-16 border-t border-border/40">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-6">
        <img src={logo} alt="N.E. Body" className="h-6 w-auto" />
        <a
          href="mailto:hello@nebody.co.uk"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          hello@nebody.co.uk
        </a>
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors tracking-wide">
          Privacy Policy
        </a>
        <a href="#" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors tracking-wide">
          Terms of Use
        </a>
        <a href="#" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors tracking-wide">
          Cookie Policy
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
