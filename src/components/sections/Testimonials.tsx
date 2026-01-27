import { Star } from "lucide-react";

// ⚙️ PŘEPÍNAČ: změň na true pro zobrazení sekce
const SHOW_TESTIMONIALS = false;

const testimonials = [
  {
    rating: 5,
<<<<<<< HEAD
    quote: "Udělal pro nás vurtuální asistenky. Super komunikace a přístup",
    author: "KeporkaProduction",
    role: "Martin Keprt",
=======
    quote: "Nejlepší borec",
    author: "Jméno",
    role: "Majitel malé firmy",
>>>>>>> a761b0df2c7857181177a6e2211496af93baf7a7
  },
  {
    rating: 4.5,
    quote: "Zde bude další citace klienta.",
    author: "Jméno",
    role: "Poskytovatel služeb",
  },
  {
    rating: 4,
    quote: "Zde bude třetí citace klienta.",
    author: "Jméno",
    role: "Živnostník",
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
            <div
              key={index}
              className="bg-background rounded-xl p-6 md:p-8 shadow-soft border border-border/50"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => {
                  const isFullStar = i < Math.floor(testimonial.rating);
                  const isHalfStar = i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0;
                  
                  return (
                    <div key={i} className="relative w-5 h-5">
                      <Star className="w-5 h-5 text-yellow-400" />
                      {isFullStar && (
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 absolute top-0 left-0" />
                      )}
                      {isHalfStar && (
                        <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                „{testimonial.quote}"
              </p>
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
