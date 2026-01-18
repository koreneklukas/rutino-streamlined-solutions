import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-accent flex items-center justify-center">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Pojďme najít řešení, které vám{" "}
            <span className="text-gradient">ušetří čas.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Krátká nezávazná konzultace, kde probereme váš problém
            a navrhneme možné digitální řešení.
          </p>
          
          <Button variant="hero" size="xl" asChild>
            <a href="mailto:info@rutino.cz">
              Domluvit konzultaci
              <ArrowRight className="ml-1" />
            </a>
          </Button>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Nebo napište na{" "}
            <a href="mailto:info@rutino.cz" className="text-primary hover:underline font-medium">
              info@rutino.cz
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
