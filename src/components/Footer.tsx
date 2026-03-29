import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-16 px-6 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div className="flex flex-col gap-4">
        <img src={logo} alt="N.E. Body" className="h-8 w-auto" />
        <a
          href="mailto:hello@nebody.co.uk"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          hello@nebody.co.uk
        </a>
      </div>
      <div className="flex gap-8">
        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">
          Privacy Policy
        </a>
        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">
          Terms of Use
        </a>
        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">
          Cookie Policy
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
