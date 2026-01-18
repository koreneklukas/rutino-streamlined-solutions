import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">R</span>
            </div>
            <span className="font-display font-bold text-xl">Rutino</span>
          </a>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("solution")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Jak to funguje
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </button>
          </nav>
          
          {/* CTA */}
          <Button variant="default" size="sm" onClick={() => scrollToSection("contact")}>
            Konzultace
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
