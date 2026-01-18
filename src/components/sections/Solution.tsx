import { Search, Lightbulb, Wrench } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Pochopení",
    description: "Zmapujeme váš současný proces a identifikujeme, kde ztrácíte čas.",
  },
  {
    icon: Lightbulb,
    title: "Návrh",
    description: "Navrhneme jednoduché a efektivní řešení přizpůsobené vašim potřebám.",
  },
  {
    icon: Wrench,
    title: "Realizace",
    description: "Dodáme digitální nástroj, který za vás udělá rutinní práci.",
  },
];

const Solution = () => {
  return (
    <section id="solution" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Nejdřív přemýšlíme.{" "}
            <span className="text-gradient">Pak stavíme řešení.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            V Rutinu nezačínáme technologií, ale pochopením vašeho procesu.
            Zmapujeme, kde ztrácíte čas, navrhneme zjednodušení a teprve potom
            dodáme digitální nástroj nebo systém, který za vás udělá rutinní práci.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                {index + 1}
              </div>
              
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Highlight */}
        <div className="max-w-2xl mx-auto">
          <div className="p-6 rounded-xl bg-accent border-l-4 border-primary">
            <p className="text-lg font-medium text-accent-foreground">
              Výsledkem není jen software, ale funkční řešení, na které se můžete spolehnout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
