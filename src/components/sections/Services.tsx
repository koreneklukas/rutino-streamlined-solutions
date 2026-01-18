import { Puzzle, Cog, RefreshCw, Check } from "lucide-react";

const services = [
  {
    icon: Puzzle,
    title: "Analýza & návrh řešení",
    features: [
      "Pochopení vašeho fungování",
      "Mapování procesů",
      "Návrh efektivnějšího řešení",
    ],
    note: "Cílem je jednoduchost a reálný přínos.",
  },
  {
    icon: Cog,
    title: "Digitální systémy & automatizace",
    features: [
      "Interní digitální nástroje",
      "Automatizované procesy (e-maily, formuláře, kalendáře, data)",
      "Mini aplikace a jednoduchý software na míru",
      "Web pouze pokud je součástí řešení",
    ],
    note: null,
  },
  {
    icon: RefreshCw,
    title: "Provoz, servis & rozvoj",
    features: [
      "Dlouhodobá správa řešení",
      "Úpravy a rozšiřování systému",
      "Paušální spolupráce",
      "Rozvoj podle růstu firmy",
    ],
    note: "Řešení nekončí předáním.",
  },
];

const Services = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Tři pilíře <span className="text-gradient">našich služeb</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-display font-bold mb-5">{service.title}</h3>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {service.note && (
                <p className="text-sm font-medium text-primary italic border-t border-border pt-4">
                  {service.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
