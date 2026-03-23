import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ⚙️ PŘEPÍNAČ: změň na true pro zobrazení sekce
const SHOW_PROJECTS = true;

type Project = {
  title: string;
  shortDescription: string;
  tags: string[];
  image: string | null;
  gallery?: string[];
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
  {
    title: "AI Lead Generation Agent",
    shortDescription:
      "Aplikace, která pomocí AI vyhledává potenciální zákazníky, ověřuje kontakty a usnadňuje přípravu obchodního oslovení.",
    tags: ["AI", "Automatizace", "Lead Generation"],
    image: "/projects/ai-lead-generation/dashboard.png",
    gallery: [
      "/projects/ai-lead-generation/dashboard.png",
      "/projects/ai-lead-generation/new-search.png",
      "/projects/ai-lead-generation/leads.png",
      "/projects/ai-lead-generation/statistics.png",
      "/projects/ai-lead-generation/email-templates.png",
    ],
    link: null,
    fullDescription:
      "AI Lead Generation Agent je aplikace, která pomáhá firmám a freelancerům snadněji vyhledávat nové zákazníky a připravovat jejich oslovení. Po zadání oboru a lokality systém pomocí umělé inteligence dohledá relevantní firmy, zkontroluje dostupné kontakty a připraví návrhy e-mailů.",
    sections: [
      {
        heading: "Co řešení zajišťuje",
        body: "Uživatel zadá obor a lokalitu, systém pomocí AI dohledá relevantní firmy, zkontroluje dostupné kontakty a připraví návrhy e-mailů. Uživatel tak nemusí trávit čas ručním hledáním a může se víc soustředit na samotný obchod.",
      },
      {
        heading: "Přínosy řešení",
        body: "• rychlejší vyhledávání potenciálních zákazníků\n• automatické ověřování kontaktů\n• připravené návrhy e-mailů pro oslovení\n• přehledná správa leadů na jednom místě\n• více času na samotný obchod",
      },
      {
        heading: "Typ dodávky",
        body: "Projekt kombinuje automatizaci, AI a přehlednou správu leadů do jednoho nástroje. Výsledkem je rychlejší a efektivnější proces oslovování nových klientů.",
      },
    ],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const openProject = (project: Project) => {
    setSelected(project);
    setGalleryIndex(0);
  };

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
              onClick={() => openProject(project)}
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
            className="relative bg-background rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 rounded-full p-1 opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Zavřít"
            >
              <X className="w-5 h-5" />
            </button>

            {selected.gallery && selected.gallery.length > 1 ? (
              <div className="relative mb-6">
                <img
                  src={selected.gallery[galleryIndex]}
                  alt={`${selected.title} ${galleryIndex + 1}`}
                  className="w-full rounded-xl object-cover aspect-video cursor-zoom-in"
                  onClick={(e) => { e.stopPropagation(); setLightboxSrc(selected.gallery![galleryIndex]); }}
                />
                <button
                  onClick={(e) => { e.stopPropagation(); setGalleryIndex((i) => (i - 1 + selected.gallery!.length) % selected.gallery!.length); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-1.5 shadow transition-colors"
                  aria-label="Předchozí"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setGalleryIndex((i) => (i + 1) % selected.gallery!.length); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-1.5 shadow transition-colors"
                  aria-label="Další"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex justify-center gap-1.5 mt-3">
                  {selected.gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setGalleryIndex(i); }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === galleryIndex ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Obrázek ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : selected.image ? (
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full rounded-xl mb-6 object-cover aspect-video cursor-zoom-in"
                onClick={(e) => { e.stopPropagation(); setLightboxSrc(selected.image); }}
              />
            ) : null}

            {/* Lightbox */}
            {lightboxSrc && (
              <div
                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
                onClick={() => setLightboxSrc(null)}
              >
                <button
                  onClick={() => setLightboxSrc(null)}
                  className="absolute right-4 top-4 rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Zavřít"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <img
                  src={lightboxSrc}
                  alt=""
                  className="max-w-[95vw] max-h-[95vh] rounded-xl object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
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
