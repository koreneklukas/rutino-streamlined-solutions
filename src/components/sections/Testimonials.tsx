import { Star } from "lucide-react";
import logoFitzone from "@/assets/logo-fitzone.png";
import logoKavarna from "@/assets/logo-kavarna.png";
import logoTechflow from "@/assets/logo-techflow.png";

// ⚙️ PŘEPÍNAČ: změň na true pro zobrazení sekce
const SHOW_TESTIMONIALS = true;

const testimonials = [
  {
    rating: 5,
    quote: "Lukáš nám kompletně přetvořil webové stránky a propojil je s rezervačním systémem. Klienti si teď mohou sami rezervovat lekce a nám odpadla spousta administrativy. Spolupráce byla naprosto bezproblémová.",
    author: "Martin Novák",
    role: "Majitel FitZone studia",
    logo: logoFitzone,
  },
  {
    rating: 5,
    quote: "Potřebovali jsme e-shop s vlastním objednávkovým systémem na míru. Lukáš pochopil naše potřeby okamžitě a dodal řešení, které předčilo naše očekávání. Tržby nám vzrostly o 40 % za první kvartál.",
    author: "Petra Svobodová",
    role: "Spolumajitelka Kavárna U Parku",
    logo: logoKavarna,
  },
  {
    rating: 5,
    quote: "Automatizace, kterou nám Rutino nastavilo, nám ušetří desítky hodin měsíčně. Fakturace, reporty, notifikace – vše běží samo. Konečně se můžeme soustředit na to, co děláme nejlépe.",
    author: "Jakub Dvořák",
    role: "CEO TechFlow Solutions",
    logo: logoTechflow,
  },
];

const Testimonials = () => {
  if (!SHOW_TESTIMONIALS) {
    return null;
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Co říkají klienti po spolupráci
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-xl p-6 md:p-8 shadow-soft border border-border/50">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => {
                  const isFullStar = i < Math.floor(testimonial.rating);
                  const isHalfStar = i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0;

                  return (
                    <div key={i} className="relative w-5 h-5">
                      <Star className="w-5 h-5 text-yellow-400" />
                      {isFullStar && <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 absolute top-0 left-0" />}
                      {isHalfStar && (
                        <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">„{testimonial.quote}"</p>
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
