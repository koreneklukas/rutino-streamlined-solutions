import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

import project1a from "@/assets/project-1a.jpg";
import project1b from "@/assets/project-1b.jpg";
import project2a from "@/assets/project-2a.jpg";
import project2b from "@/assets/project-2b.jpg";
import project3a from "@/assets/project-3a.jpg";
import project3b from "@/assets/project-3b.jpg";

const SHOW_PROJECTS = true;

const projects = [
  {
    title: "Název projektu",
    description: "Krátký popis projektu – co byl problém a jak jsme ho vyřešili.",
    tags: ["Automatizace", "Interní systém"],
    images: [project1a, project1b],
    link: null as string | null,
  },
  {
    title: "Název projektu",
    description: "Krátký popis projektu – co byl problém a jak jsme ho vyřešili.",
    tags: ["Web", "Digitální nástroj"],
    images: [project2a, project2b],
    link: null,
  },
  {
    title: "Název projektu",
    description: "Krátký popis projektu – co byl problém a jak jsme ho vyřešili.",
    tags: ["Analýza", "Návrh řešení"],
    images: [project3a, project3b],
    link: null,
  },
];

const ImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative aspect-video overflow-hidden group/carousel">
      <img
        src={images[current]}
        alt={`${title} - ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-primary w-4" : "bg-background/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  if (!SHOW_PROJECTS) return null;

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
              <ImageCarousel images={project.images} title={project.title} />

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
