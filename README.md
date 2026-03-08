# Rutino – Landing Page

Webová prezentace pro značku **Rutino** – jednostránkový web (SPA) postavený na Reactu.

## 🏗 Struktura projektu

```
src/
├── assets/                    # Obrázky a média
│   ├── about-photo.jpg        # Fotka do sekce "O mně"
│   ├── project-1a.jpg         # Projekt 1 – screenshot 1 (dashboard)
│   ├── project-1b.jpg         # Projekt 1 – screenshot 2 (workflow)
│   ├── project-2a.jpg         # Projekt 2 – screenshot 1 (web mockup)
│   ├── project-2b.jpg         # Projekt 2 – screenshot 2 (CMS)
│   ├── project-3a.jpg         # Projekt 3 – screenshot 1 (analytics)
│   └── project-3b.jpg         # Projekt 3 – screenshot 2 (strategie)
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Navigace
│   │   └── Footer.tsx         # Patička
│   ├── sections/
│   │   ├── Hero.tsx           # Úvodní hero sekce
│   │   ├── Problem.tsx        # Popis problému
│   │   ├── Solution.tsx       # Nabízené řešení
│   │   ├── Services.tsx       # Přehled služeb
│   │   ├── Audience.tsx       # Pro koho je služba
│   │   ├── Differentiator.tsx # Čím se lišíme
│   │   ├── AboutMe.tsx        # O mně (s fotkou)
│   │   ├── Projects.tsx       # Ukázky práce (carousel obrázků)
│   │   ├── Testimonials.tsx   # Reference
│   │   └── CTA.tsx            # Výzva k akci
│   ├── ui/                    # shadcn/ui komponenty
│   └── NavLink.tsx            # Navigační odkaz
├── pages/
│   ├── Index.tsx              # Hlavní stránka (všechny sekce)
│   └── NotFound.tsx           # 404 stránka
└── index.css                  # Globální styly a design tokeny
```

## 📸 Obrázky v projektech

Každý projekt v sekci **Ukázky naší práce** má vlastní mini carousel se 2 obrázky. Obrázky se nacházejí v `src/assets/`:

| Projekt | Soubor | Popis |
|---------|--------|-------|
| Projekt 1 | `project-1a.jpg` | Dashboard s grafy a KPI |
| Projekt 1 | `project-1b.jpg` | Workflow diagram na monitoru |
| Projekt 2 | `project-2a.jpg` | Responzivní web na laptopu a mobilu |
| Projekt 2 | `project-2b.jpg` | CMS rozhraní |
| Projekt 3 | `project-3a.jpg` | Analytics dashboard s grafy |
| Projekt 3 | `project-3b.jpg` | Strategické plánování na obrazovce |

Pro nahrazení za reálné screenshoty stačí přepsat soubory ve složce `src/assets/` se stejnými názvy.

## 🛠 Technologie

- **React 18** + **TypeScript**
- **Vite** – build tool
- **Tailwind CSS** – utility-first styling
- **shadcn/ui** – UI komponenty
- **Lucide React** – ikony

## 🚀 Spuštění

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm i
npm run dev
```

## 📦 Deploy

Otevři [Lovable](https://lovable.dev) → Share → Publish.

## 🌐 Vlastní doména

Project → Settings → Domains → Connect Domain.  
Více info: [Nastavení vlastní domény](https://docs.lovable.dev/features/custom-domain#custom-domain)
