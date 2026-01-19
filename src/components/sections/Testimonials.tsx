import { Quote } from "lucide-react";

// ⚙️ PŘEPÍNAČ: změň na true pro zobrazení sekce
const SHOW_TESTIMONIALS = false;

const testimonials = [
  {
    quote: "Zde bude citace klienta o spolupráci s Rutino.",
    author: "Jméno",
    role: "Majitel malé firmy",
  },
  {
    quote: "Zde bude další citace klienta.",
    author: "Jméno",
    role: "Poskytovatel služeb",
  },
  {
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
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
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
