import { useState } from "react";
import { X } from "lucide-react";

// ⚙️ PŘEPÍNAČ: změň na true pro zobrazení sekce
const SHOW_PROJECTS = true;

type Project = {
  title: string;
  shortDescription: string;
  tags: string[];
  image: string | null;
  link: string | null;
  fullDescription: string;
  sections: { heading: string; body: string }[];
};

const projects: Project[] = [
  {
    title: "Virtuální asistentka Klára pro Fotokrám",
    shortDescription:
      "Digitální asistentka, která automatizuje vyřizování rezervací a cenových nabídek. Pomáhá zrychlit reakce na klientské poptávky, omezit rutinní administrativu a zpřehlednit celý proces komunikace.",
    tags: ["Automatizace", "AI asistentka", "Komunikace"],
    image: "/fotokram_klara_placeholder.svg",
    link: null,
    fullDescription:
      "Pro Fotokrám jsem vytvořil digitální asistentku Kláru, která pomáhá s vyřizováním rezervací a cenových nabídek. Cílem bylo zjednodušit opakující se e-mailovou komunikaci, zrychlit reakce na klientské poptávky a uvolnit čas na činnosti, které mají pro business větší hodnotu.",
    sections: [
      {
        heading: "Jaký byl problém",
        body: "Ve Fotokrámu zabíralo ruční odpovídání na e-maily ohledně rezervací a cenových nabídek zbytečně mnoho času. Šlo o činnost, kterou bylo nutné dělat, ale sama o sobě nepřinášela firmě výraznější přidanou hodnotu. Zároveň bylo důležité reagovat rychle, přehledně a bez zbytečných prodlev.",
      },
      {
        heading: "Co řešení zajišťuje",
        body: "Virtuální asistentka Klára rozpozná, co klient potřebuje, a podle toho zvolí správný postup.\n\nPokud jde o rezervaci, zjistí potřebné informace, uloží termín do kalendáře a odešle klientovi potvrzení rezervace. Pokud klient poptává cenovou nabídku, Klára odpoví podle typu akce správnou variantou nabídky. V případě požadavku mimo definované scénáře předá komunikaci konkrétní osobě ve Fotokrámu.",
      },
      {
        heading: "Přínosy řešení",
        body: "• rychlejší reakce na klientské poptávky\n• méně rutinní ruční práce\n• přehlednější proces rezervací\n• více času na důležitější činnosti\n• modernější a efektivnější komunikace s klienty",
      },
      {
        heading: "Typ dodávky",
        body: "Digitální řešení na míru, návrh procesu, AI asistent, automatizace komunikace a zefektivnění klientského workflow.",
      },
    ],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  if (!SHOW_PROJECTS) {
    return null;
  }

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ukázky práce
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vybrané projekty, které ukazují můj přístup a reálné výsledky.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelected(project)}
              className="group cursor-pointer rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden w-full max-w-sm"
            >
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
                <h3 className="text-lg font-heading font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.shortDescription}</p>
                <span className="inline-block mt-4 text-sm font-medium text-primary group-hover:underline">
                  Číst více →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-background rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 rounded-full p-1 opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Zavřít"
            >
              <X className="w-5 h-5" />
            </button>

            {selected.image && (
              <img src={selected.image} alt={selected.title} className="w-full rounded-xl mb-6 object-cover aspect-video" />
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {selected.tags.map((tag, i) => (
                <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-primary">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-heading font-bold mb-3">{selected.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{selected.fullDescription}</p>

            {selected.sections.map((section, i) => (
              <div key={i} className="mb-6">
                <h3 className="text-base font-semibold text-foreground mb-2">{section.heading}</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.body}</p>
              </div>
            ))}

            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Zobrazit projekt →
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export { SHOW_PROJECTS };

export default Projects;
