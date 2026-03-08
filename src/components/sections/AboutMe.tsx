import { Lightbulb, Heart, Handshake } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpg";

// ⚙️ PŘEPÍNAČ: změň na true pro zobrazení sekce
const SHOW_ABOUT = true;

const values = [
  {
    icon: Lightbulb,
    title: "Jednoduchost",
    description: "Věřím, že nejlepší řešení jsou ta, která nepotřebují návod.",
  },
  {
    icon: Heart,
    title: "Lidský přístup",
    description: "Každý projekt začínám rozhovorem, ne technickým zadáním.",
  },
  {
    icon: Handshake,
    title: "Dlouhodobá spolupráce",
    description: "Nechci jednorázové zakázky. Chci růst společně s klienty.",
  },
];

const AboutMe = () => {
  if (!SHOW_ABOUT) {
    return null;
  }

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Kdo za Rutino <span className="text-gradient">stojí</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            {/* Fotka */}
            <div className="shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-elevated ring-4 ring-accent">
                <img src={aboutPhoto} alt="Zakladatel Rutino" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Jmenuji se [Jméno] a pomáhám malým firmám a živnostníkům zjednodušit jejich každodenní práci pomocí
                digitálních nástrojů.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Než jsem založil Rutino, viděl jsem, jak spousta šikovných lidí tráví hodiny rutinní prací, kterou by
                zvládl jednoduchý systém. Rozhodl jsem se to změnit.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card shadow-soft">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
