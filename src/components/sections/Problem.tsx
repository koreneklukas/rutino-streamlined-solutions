import { Mail, Table2, Calendar, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Mail,
    text: "Ručně odpovídáte na e-maily a přepisujete data",
  },
  {
    icon: Table2,
    text: "Používáte formuláře, tabulky a kalendáře, které spolu nemluví",
  },
  {
    icon: Calendar,
    text: "Máte pocit, že by to šlo dělat chytřeji, ale nevíte jak",
  },
  {
    icon: TrendingUp,
    text: "Chcete růst, ale administrativa vás zbytečně zdržuje",
  },
];

const Problem = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Brzdí vás procesy, které už dávno{" "}
            <span className="text-gradient">nemusí existovat?</span>
          </h2>
          
          <div className="space-y-4 mb-10">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed pt-1.5">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-lg text-muted-foreground italic">
            Technologie dnes umí spoustu věcí – jen je potřeba je správně propojit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
