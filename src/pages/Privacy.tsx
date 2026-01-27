import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
              Ochrana soukromí
            </h1>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-8 mb-4">
                Analytika návštěvnosti
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Na našem webu používáme službu Counter.dev pro anonymní měření návštěvnosti. 
                Záleží nám na vašem soukromí, proto jsme zvolili řešení, které:
              </p>

              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>
                  <strong>Nepoužívá soubory cookies</strong>, takže vás nijak nesledujeme napříč internetem.
                </li>
                <li>
                  <strong>Neukládá žádné osobní údaje</strong> návštěvníků.
                </li>
                <li>
                  <strong>Anonymizuje IP adresy</strong>, aby vás nebylo možné identifikovat.
                </li>
              </ul>

              <p className="text-muted-foreground mb-8">
                Získaná data používáme výhradně ke statistickým účelům, abychom mohli Rutino neustále vylepšovat.
              </p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-8 mb-4">
                Kontakt
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Správcem webu rutino.cz je firma Rutino. 
                Pokud máte jakékoli dotazy k ochraně soukromí, napište nám na{" "}
                <a 
                  href="mailto:info@rutino.cz" 
                  className="text-primary hover:underline font-medium"
                >
                  info@rutino.cz
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
