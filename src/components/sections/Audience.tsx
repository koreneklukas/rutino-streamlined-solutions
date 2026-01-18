import { User, Briefcase, Clock, Target } from "lucide-react";

const audiences = [
  {
    icon: User,
    text: "Živnostníci a malé firmy",
  },
  {
    icon: Briefcase,
    text: "Služby, které chtějí růst",
  },
  {
    icon: Clock,
    text: "Lidé, kteří nemají čas řešit technické detaily",
  },
  {
    icon: Target,
    text: "Firmy hledající funkční řešení, ne složitý IT projekt",
  },
];

const Audience = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Pro koho dává Rutino{" "}
            <span className="text-gradient">největší smysl</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg font-medium">{audience.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
