import logo from "@/assets/logo.png";

interface NavbarProps {
  onInvestorClick?: () => void;
  onUpdatesClick?: () => void;
}

const Navbar = ({ onInvestorClick, onUpdatesClick }: NavbarProps) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
      <a href="#" className="flex items-center">
        <img src={logo} alt="N.E. Body" className="h-9 w-auto" />
      </a>
      <div className="flex items-center gap-8">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onInvestorClick?.(); }}
          className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
        >
          Investor Enquiries
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onUpdatesClick?.(); }}
          className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
        >
          Get Updates
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
