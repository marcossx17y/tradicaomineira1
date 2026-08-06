import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero-churrasco.jpg";
import buffetImg from "@/assets/buffet-mineiro.jpg";
import churrascoImg from "@/assets/churrasco-itens.jpg";

const WHATSAPP =
  "https://wa.me/5534988819978?text=" +
  encodeURIComponent("Olá! Vim pelo site do Tradição Mineira.");
const MAPS = "https://maps.app.goo.gl/ZPYT1Pf6orDmi9De8";

const CHURRASCO = [
  { nome: "Cordeiro na brasa", desc: "Assado lento e suculento" },
  { nome: "Queijo coalho na brasa", desc: "Dourado na hora" },
  { nome: "Abacaxi assado", desc: "Caramelizado" },
  { nome: "Tulipinha na cerveja", desc: "Marinada da casa" },
  { nome: "Coraçãozinho na cerveja", desc: "O famoso, quem prova volta" },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Restaurante Tradição Mineira | Uberlândia" },
      {
        name: "description",
        content:
          "Buffet de comida mineira e churrasco na brasa no Alto Umuarama, ao lado do Aeroporto de Uberlândia. Terça a domingo, das 10h às 14h30.",
      },
      { property: "og:title", content: "Restaurante Tradição Mineira | Uberlândia" },
      {
        property: "og:description",
        content:
          "Comida mineira feita no dia e churrasco na brasa, ao lado do aeroporto. Terça a domingo, 10h às 14h30.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Restaurante Tradição Mineira",
          servesCuisine: "Comida mineira, churrasco",
          telephone: "+5534988819978",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Dom Pedro II, 1521 — Alto Umuarama",
            addressLocality: "Uberlândia",
            addressRegion: "MG",
            addressCountry: "BR",
          },
          openingHours: "Tu-Su 10:00-14:30",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.5",
            reviewCount: "1297",
          },
          sameAs: ["https://instagram.com/tradicaomineiraudia"],
        }),
      },
    ],
  }),
});

function WhatsAppLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8">
          <a href="#topo" className="min-w-0">
            <span className="display-title block truncate text-lg sm:text-xl">
              Tradição Mineira
            </span>
            <span className="label-eyebrow block text-[0.6rem] sm:text-[0.65rem]">
              Atravessa a fronteira
            </span>
          </a>
          <nav className="flex shrink-0 items-center gap-5">
            <a
              href="#localizacao"
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              Como chegar
            </a>
            <WhatsAppLink className="display-title rounded-[5px] bg-primary px-4 py-2 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90">
              WhatsApp
            </WhatsAppLink>
          </nav>
        </div>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="relative flex min-h-[88vh] items-end overflow-hidden">
          <img
            src={heroImg}
            alt="Churrasco na brasa no Restaurante Tradição Mineira"
            width={1600}
            height={1104}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
            <h1 className="display-title max-w-3xl text-[3rem] text-white sm:text-[5.5rem]">
              Comida mineira e churrasco na brasa
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
              Buffet self-service de terça a domingo, do lado do Aeroporto de Uberlândia.
            </p>
            <WhatsAppLink className="display-title mt-8 inline-block rounded-[5px] bg-primary px-7 py-3.5 text-base tracking-wide text-primary-foreground transition-opacity hover:opacity-90">
              Fale com a gente
            </WhatsAppLink>
            <p className="mt-8 text-xs tracking-wide text-white/60 sm:text-sm">
              4,5 ★ no Google · 1.297 avaliações · 10h às 14h30
            </p>
          </div>
        </section>

        {/* O RESTAURANTE */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <div className="min-w-0">
              <p className="label-eyebrow">O restaurante</p>
              <h2 className="display-title mt-3 text-[2.25rem] sm:text-5xl">
                Cozinha mineira feita no dia
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Um buffet variado de comida mineira preparada no dia, com saladas frescas,
                sobremesas e churrasco na brasa. Estamos na Av. Dom Pedro II, no Alto Umuarama,
                ao lado do Aeroporto de Uberlândia — parada certa para quem chega, quem parte e
                quem é da cidade.
              </p>
              <dl className="mt-9 grid grid-cols-3 border-y border-border">
                {[
                  ["4,5 ★", "no Google"],
                  ["1.297", "avaliações"],
                  ["12,7 mil", "no Instagram"],
                ].map(([n, l], i) => (
                  <div
                    key={n}
                    className={`py-5 ${i > 0 ? "border-l border-border pl-4" : "pr-4"}`}
                  >
                    <dt className="display-title text-2xl sm:text-3xl">{n}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <img
              src={buffetImg}
              alt="Buffet de comida mineira em panelas de barro"
              width={1200}
              height={1408}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[6px] border border-border object-cover"
            />
          </div>
        </section>

        {/* CHURRASCO */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <img
                src={churrascoImg}
                alt="Queijo coalho e abacaxi assados na brasa"
                width={1200}
                height={1408}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[6px] border border-border object-cover"
              />
              <div className="min-w-0">
                <p className="label-eyebrow">Churrasco</p>
                <h2 className="display-title mt-3 text-[2.25rem] sm:text-5xl">
                  Um dos churrascos mais completos da região
                </h2>
                <ul className="mt-8 border-t border-border">
                  {CHURRASCO.map((item) => (
                    <li
                      key={item.nome}
                      className="flex items-baseline justify-between gap-6 border-b border-border py-4"
                    >
                      <span className="display-title min-w-0 text-lg sm:text-xl">
                        {item.nome}
                      </span>
                      <span className="shrink-0 text-right text-xs text-muted-foreground sm:text-sm">
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  O buffet varia todos os dias. Pergunte o cardápio de hoje pelo{" "}
                  <WhatsAppLink className="text-primary underline underline-offset-4">
                    WhatsApp
                  </WhatsAppLink>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CITAÇÃO */}
        <section className="border-y border-border bg-secondary">
          <blockquote className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
            <p className="display-title text-[2rem] leading-[1.05] sm:text-[3.75rem]">
              Se for pra voar, que seja alto.
              <br />
              Se for pra almoçar,{" "}
              <span className="text-primary">que seja aqui.</span>
            </p>
          </blockquote>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="label-eyebrow">Localização</p>
          <h2 className="display-title mt-3 text-[2.25rem] sm:text-5xl">Do lado do aeroporto</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="min-w-0 space-y-8">
              <div>
                <p className="label-eyebrow">Endereço</p>
                <p className="mt-2 text-base leading-relaxed">
                  Av. Dom Pedro II, 1521 — Alto Umuarama
                  <br />
                  Uberlândia/MG
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <p className="label-eyebrow">Horário</p>
                <p className="mt-2 text-base">Terça a domingo, das 10h às 14h30</p>
              </div>
              <div className="border-t border-border pt-6">
                <p className="label-eyebrow">WhatsApp</p>
                <WhatsAppLink className="mt-2 inline-block text-base text-primary underline underline-offset-4">
                  (34) 98881-9978
                </WhatsAppLink>
              </div>
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="display-title inline-block rounded-[5px] border border-foreground px-6 py-3 text-sm tracking-wide transition-colors hover:bg-foreground hover:text-background"
              >
                Abrir no Google Maps
              </a>
            </div>
            <iframe
              title="Mapa do Restaurante Tradição Mineira"
              src="https://www.google.com/maps?q=Restaurante%20Tradi%C3%A7%C3%A3o%20Mineira%2C%20Av.%20Dom%20Pedro%20II%2C%201521%2C%20Uberl%C3%A2ndia%20MG&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full rounded-[6px] border border-border sm:h-[480px]"
            />
          </div>
        </section>

        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>© {new Date().getFullYear()} Restaurante Tradição Mineira</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <a
                href="https://instagram.com/tradicaomineiraudia"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                @tradicaomineiraudia
              </a>
              <a href="tel:+5534988819978" className="transition-colors hover:text-foreground">
                (34) 98881-9978
              </a>
            </div>
          </div>
        </footer>
      </main>

      <WhatsAppLink className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105">
        <span className="sr-only">Falar no WhatsApp</span>
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </WhatsAppLink>
    </div>
  );
}