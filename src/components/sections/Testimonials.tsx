import { Star } from "lucide-react";
import logoTechflow from "@/assets/logo-techflow.png";
import logoKavarna from "@/assets/logo-kavarna.png";
import logoFitzone from "@/assets/logo-fitzone.png";

// ⚙️ PŘEPÍNAČ: změň na true pro zobrazení sekce
const SHOW_TESTIMONIALS = true;

const testimonials: {
  rating: number;
  quote: string;
  author: string;
  role: string;
  logo?: string;
}[] = [
  {
    rating: 5,
    quote: "Spolupráce s Rutino předčila všechna očekávání. Nový web nám přinesl o 40 % více poptávek za první měsíc. Komunikace byla skvělá od začátku do konce.",
    author: "Martin Novák",
    role: "Zakladatel TechFlow",
    logo: logoTechflow,
  },
  {
    rating: 4.5,
    quote: "Konečně máme rezervační systém, který funguje. Zákazníci si pochvalují jednoduchost a my ušetříme hodiny práce týdně. Vřele doporučuji!",
    author: "Petra Dvořáková",
    role: "Majitelka Kavárna U Dubu",
    logo: logoKavarna,
  },
  {
    rating: 5,
    quote: "Potřebovali jsme aplikaci pro správu členství a Rutino to zvládlo na jedničku. Vše bylo hotové včas a přesně podle našich představ.",
    author: "Jakub Procházka",
    role: "Provozovatel FitZone",
    logo: logoFitzone,
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
              <div className="border-t border-border/50 pt-4 flex items-center gap-3">
                {testimonial.logo && (
                  <img
                    src={testimonial.logo}
                    alt={`Logo ${testimonial.author}`}
                    className="w-16 h-16 object-contain rounded"
                  />
                )}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
