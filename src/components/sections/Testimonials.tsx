import { Star } from "lucide-react";
import fotokramLogo from "/fotokram_logo.jpeg";

// ⚙️ PŘEPÍNAČ: změň na true pro zobrazení sekce
const SHOW_TESTIMONIALS = true;

const testimonials = [

  {
    rating: 5,
    quote: "Dlouho jsem hledala způsob, jak zefektivnit komunikaci se zákazníky. Díky nastavené automatizaci mi AI sama odpovídá na poptávky, okamžitě odesílá klientům potřebné formuláře a následně všechny informace přehledně zapisuje do kalendáře. To, co mi dřív zabralo hodiny denně, se teď děje prakticky bez mého zásahu.\n\nNejenže mi to šetří obrovské množství času, ale zároveň mám jistotu, že žádná poptávka nezůstane bez odpovědi a celý proces působí profesionálně a plynule.\n\nJsem maximálně spokojená a tuhle službu bych doporučila každému, kdo chce posunout své podnikání na vyšší úroveň a zbavit se rutinní administrativy.",
    author: "Adéla Opletalová",
    role: "Fotokrám",
    logo: fotokramLogo,
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

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-xl p-6 md:p-10 shadow-soft border border-border/50 w-full max-w-2xl">
              <div className="flex gap-1 mb-4">
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
              <p className="text-muted-foreground leading-relaxed mb-6 italic whitespace-pre-line">„{testimonial.quote}"</p>
              <div className="border-t border-border/50 pt-4 flex items-center gap-4">
                {testimonial.logo && (
                  <img src={testimonial.logo} alt={testimonial.role} className="h-10 w-auto object-contain rounded" />
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
