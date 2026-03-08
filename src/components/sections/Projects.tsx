import { ExternalLink, ArrowRight } from "lucide-react";

// ⚙️ PŘEPÍNAČ: změň na true pro zobrazení sekce
const SHOW_PROJECTS = false;

const projects = [
  {
    title: "Název projektu",
    description: "Krátký popis projektu – co byl problém a jak jsme ho vyřešili.",
    tags: ["Automatizace", "Interní systém"],
    // Obrázek: nahraď cestou k reálnému screenshotu
    image: null as string | null,
    link: null as string | null,
  },
  {
    title: "Název projektu",
    description: "Krátký popis projektu – co byl problém a jak jsme ho vyřešili.",
    tags: ["Web", "Digitální nástroj"],
    image: null,
    link: null,
  },
  {
    title: "Název projektu",
    description: "Krátký popis projektu – co byl problém a jak jsme ho vyřešili.",
    tags: ["Analýza", "Návrh řešení"],
    image: null,
    link: null,
  },
];

const Projects = () => {
  if (!SHOW_PROJECTS) {
    return null;
  }

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ukázky <span className="text-gradient">naší práce</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vybrané projekty, které ukazují náš přístup a reálné výsledky.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Prostor pro screenshot */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-muted-foreground/40 text-sm">Screenshot projektu</div>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-display font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Zobrazit projekt
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
