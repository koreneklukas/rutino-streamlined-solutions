import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === "/") {
      // Už jsme na hlavní stránce, jen scrollujeme
      scrollToSection(sectionId);
    } else {
      // Jsme na jiné stránce, přejdeme na hlavní stránku s hash
      navigate(`/#${sectionId}`);
    }
  };

  // Scroll na sekci po načtení stránky, pokud je v URL hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 100);
    }
  }, [location]);

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
              onClick={() => handleNavigation("solution")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Jak to funguje
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </button>
          </nav>
          
          {/* CTA */}
          <Button variant="default" size="sm" onClick={() => handleNavigation("contact")}>
            Konzultace
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
