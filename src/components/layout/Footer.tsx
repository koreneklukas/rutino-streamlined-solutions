import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">R</span>
            </div>
            <span className="font-display font-bold text-xl">Rutino</span>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Rutino. Všechna práva vyhrazena. |{" "}
            <Link 
              to="/ochrana-soukromi" 
              className="text-primary hover:underline"
            >
              Ochrana soukromí
            </Link>
          </p>
          
          {/* Contact */}
          <a
            href="mailto:info@rutino.cz"
            className="text-sm font-medium text-primary hover:underline"
          >
            info@rutino.cz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
