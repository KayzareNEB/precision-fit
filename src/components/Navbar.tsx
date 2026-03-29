import logo from "@/assets/logo.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
    <div className="mx-auto px-10 md:px-16 flex items-center justify-between h-16">
      <a href="#" className="flex items-center">
        <img src={logo} alt="N.E. Body" className="h-10 w-auto" />
      </a>
      <div className="flex items-center gap-8 pr-1">
        <a
          href="#"
          className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
        >
          Investor Enquiries
        </a>
        <a
          href="#"
          className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
        >
          Get Updates
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
