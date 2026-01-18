import { X, CheckCircle } from "lucide-react";

const notItems = [
  "Nejsme anonymní IT agentura",
  "Nezačínáme kódem, ale pochopením problému",
  "Nestavíme složité systémy bez důvodu",
];

const Differentiator = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Nejsme webaři.{" "}
            <span className="text-gradient">Nejsme jen automatizace.</span>
          </h2>
          
          <div className="space-y-4 mb-12">
            {notItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card shadow-soft text-lg"
              >
                <X className="w-5 h-5 text-destructive" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-xl font-display font-bold text-primary">Co děláme</span>
            </div>
            <p className="text-xl font-medium">
              Stavíme jednoduché digitální systémy s reálným dopadem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;
