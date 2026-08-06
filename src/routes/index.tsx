import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero-churrasco.jpg";
import churrascoImg from "@/assets/churrasco-itens.jpg";
import logoImg from "@/assets/logo-tradicao-mineira.png";
import buffetImg from "@/assets/buffet-real.png";
import frutasImg from "@/assets/frutas-saladas.png";

const SITE = import.meta.env.VITE_SITE_URL ?? "https://tradicaomineira1.lovable.app";
const WHATSAPP =
  "https://wa.me/5534988819978?text=" +
  encodeURIComponent("Olá! Vim pelo site do Tradição Mineira.");
const MAPS = "https://maps.app.goo.gl/ZPYT1Pf6orDmi9De8";
const ROTA =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Restaurante Tradição Mineira, Av. Dom Pedro II, 1521, Uberlândia MG");

const CHURRASCO = [
  { nome: "Cordeiro na brasa", desc: "Assado lento, macio de garfo" },
  { nome: "Queijo coalho na brasa", desc: "Dourado na hora, servido quente" },
  { nome: "Abacaxi assado", desc: "Caramelizado com canela" },
  { nome: "Tulipinha na cerveja", desc: "Marinada da casa, crocante por fora" },
  { nome: "Coraçãozinho na cerveja", desc: "O famoso: quem prova, volta" },
];

const BUFFET = [
  { titulo: "Saladas frescas", desc: "Folhas, legumes e frutas cortadas no dia." },
  { titulo: "Panelas mineiras", desc: "Feijão, refogados e pratos quentes de fogão." },
  { titulo: "Arroz e acompanhamentos", desc: "Opções variadas para montar seu prato." },
  { titulo: "Churrasco na brasa", desc: "Carnes e queijos assados na hora, na brasa." },
  { titulo: "Sobremesas", desc: "Doces caseiros para fechar o almoço." },
];

const PUBLICO = [
  {
    titulo: "Quem chega ou parte do aeroporto",
    desc: "Ficamos ao lado do Aeroporto de Uberlândia: dá tempo de almoçar bem antes do voo.",
  },
  {
    titulo: "Almoço de trabalho",
    desc: "Self-service rápido, sem espera de cozinha, das 10h às 14h30.",
  },
  {
    titulo: "Família no fim de semana",
    desc: "Buffet variado e churrasco na brasa — cada um monta o prato do seu jeito.",
  },
];

const FAQ = [
  {
    p: "Qual o horário de funcionamento?",
    r: "Abrimos de terça a domingo, das 10h às 14h30. Segunda-feira não abrimos.",
  },
  {
    p: "Onde fica o restaurante?",
    r: "Na Av. Dom Pedro II, 1521, no bairro Alto Umuarama, em Uberlândia/MG — ao lado do Aeroporto de Uberlândia.",
  },
  {
    p: "Tem churrasco todos os dias?",
    r: "O churrasco na brasa faz parte do buffet. Para confirmar os itens do dia, é só chamar no WhatsApp.",
  },
  {
    p: "Como saber o cardápio de hoje?",
    r: "O buffet muda todo dia. Mande uma mensagem no WhatsApp (34) 98881-9978 e a gente conta o que está na mesa.",
  },
];

const TITLE = "Restaurante Tradição Mineira | Uberlândia";
const DESC =
  "Buffet de comida mineira e churrasco na brasa no Alto Umuarama, ao lado do Aeroporto de Uberlândia. Terça a domingo, das 10h às 14h30.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: `${SITE}/og.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE}/og.jpg` },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Restaurante Tradição Mineira",
          description: DESC,
          servesCuisine: ["Comida mineira", "Churrasco", "Buffet self-service"],
          telephone: "+5534988819978",
          priceRange: "$$",
          image: `${SITE}/og.jpg`,
          logo: logoImg,
          hasMap: MAPS,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Dom Pedro II, 1521 — Alto Umuarama",
            addressLocality: "Uberlândia",
            addressRegion: "MG",
            addressCountry: "BR",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "10:00",
              closes: "14:30",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.5",
            reviewCount: "1297",
          },
          sameAs: ["https://instagram.com/tradicaomineiraudia"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.p,
            acceptedAnswer: { "@type": "Answer", text: f.r },
          })),
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

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:px-8">
          <a href="#topo" className="flex min-w-0 items-center gap-3">
            <img
              src={logoImg}
              alt="Logo do Restaurante Tradição Mineira"
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-full"
            />
            <span className="min-w-0">
              <span className="display-title block truncate text-lg sm:text-xl">
                Tradição Mineira
              </span>
              <span className="label-eyebrow block text-[0.6rem] text-brand sm:text-[0.65rem]">
                Atravessa a fronteira
              </span>
            </span>
          </a>
          <nav className="flex shrink-0 items-center gap-2 sm:gap-4">
            <a
              href={ROTA}
              target="_blank"
              rel="noopener noreferrer"
              className="display-title flex items-center gap-1.5 rounded-[5px] border border-brand px-3 py-2 text-sm tracking-wide text-brand transition-colors hover:bg-brand hover:text-brand-foreground sm:px-4"
            >
              <PinIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Como chegar</span>
              <span className="sr-only sm:hidden">Como chegar</span>
            </a>
            <WhatsAppLink className="display-title rounded-[5px] bg-brand px-4 py-2 text-sm tracking-wide text-brand-foreground transition-opacity hover:opacity-90">
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
            alt="Carnes assando na brasa no Restaurante Tradição Mineira, em Uberlândia"
            width={1600}
            height={1104}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/10" />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
            <p className="label-eyebrow text-brand-soft">Alto Umuarama · Uberlândia/MG</p>
            <h1 className="display-title mt-3 max-w-3xl text-[3rem] text-white sm:text-[5.5rem]">
              Comida mineira e churrasco na brasa em Uberlândia
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
              Buffet self-service feito no dia, com panelas mineiras, saladas frescas,
              sobremesas e churrasco na brasa. De terça a domingo, do lado do Aeroporto de
              Uberlândia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppLink className="display-title inline-block rounded-[5px] bg-brand px-7 py-3.5 text-base tracking-wide text-brand-foreground transition-opacity hover:opacity-90">
                Falar no WhatsApp
              </WhatsAppLink>
              <a
                href={ROTA}
                target="_blank"
                rel="noopener noreferrer"
                className="display-title inline-flex items-center gap-2 rounded-[5px] border border-white/70 px-7 py-3.5 text-base tracking-wide text-white transition-colors hover:bg-white hover:text-foreground"
              >
                <PinIcon className="h-5 w-5" />
                Traçar rota no Maps
              </a>
            </div>
            <p className="mt-8 text-xs tracking-wide text-white/65 sm:text-sm">
              4,5 ★ no Google · 1.297 avaliações · Terça a domingo, 10h às 14h30
            </p>
          </div>
        </section>

        {/* O RESTAURANTE */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <div className="min-w-0">
              <p className="label-eyebrow text-brand">O restaurante</p>
              <h2 className="display-title mt-3 text-[2.25rem] sm:text-5xl">
                Cozinha mineira feita no dia
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Aqui a comida sai do fogão para a mesa no mesmo dia. O buffet reúne o feijão
                de todo dia, os refogados, as saladas cortadas na hora, as sobremesas e o
                churrasco na brasa — tudo self-service, você monta o prato do seu jeito e volta
                quantas vezes quiser.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Estamos na Av. Dom Pedro II, no Alto Umuarama, ao lado do Aeroporto de
                Uberlândia: parada certa para quem chega, quem parte e para quem é da cidade.
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
                    <dt className="display-title text-2xl text-brand sm:text-3xl">{n}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <img
              src={buffetImg}
              alt="Buffet self-service do Tradição Mineira com saladas, arroz negro e pratos quentes"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[6px] border border-border object-cover"
            />
          </div>
        </section>

        {/* FAIXA VERMELHA */}
        <section className="bg-brand text-brand-foreground">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="display-title text-xl sm:text-2xl">
              Terça a domingo · 10h às 14h30 · Ao lado do aeroporto
            </p>
            <a
              href={ROTA}
              target="_blank"
              rel="noopener noreferrer"
              className="display-title inline-flex w-fit items-center gap-2 rounded-[5px] bg-brand-foreground px-6 py-3 text-sm tracking-wide text-brand transition-opacity hover:opacity-90"
            >
              <PinIcon className="h-4 w-4" />
              Como chegar
            </a>
          </div>
        </section>

        {/* BUFFET */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="label-eyebrow text-brand">Buffet</p>
          <h2 className="display-title mt-3 text-[2.25rem] sm:text-5xl">
            O que você encontra no buffet
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            O cardápio muda todos os dias, mas a estrutura é sempre a mesma: comida mineira de
            panela, muita coisa fresca e a brasa acesa.
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-14">
            <ul className="grid gap-px overflow-hidden rounded-[6px] border border-border bg-border sm:grid-cols-2">
              {BUFFET.map((item) => (
                <li key={item.titulo} className="bg-background p-6">
                  <h3 className="display-title text-lg sm:text-xl">{item.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
            <img
              src={frutasImg}
              alt="Mesa de frutas frescas e saladas coloridas no buffet do Tradição Mineira"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[6px] border border-border object-cover"
            />
          </div>
        </section>

        {/* CHURRASCO */}
        <section className="border-t border-border bg-brand-soft/60">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <img
                src={churrascoImg}
                alt="Queijo coalho e abacaxi assados na brasa no Tradição Mineira"
                width={1200}
                height={1408}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[6px] border border-border object-cover"
              />
              <div className="min-w-0">
                <p className="label-eyebrow text-brand">Churrasco</p>
                <h2 className="display-title mt-3 text-[2.25rem] sm:text-5xl">
                  Churrasco na brasa todos os dias
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Um dos churrascos mais completos da região, assado na brasa e reposto durante
                  todo o almoço.
                </p>
                <ul className="mt-8 border-t border-border">
                  {CHURRASCO.map((item) => (
                    <li
                      key={item.nome}
                      className="flex items-baseline justify-between gap-6 border-b border-border py-4"
                    >
                      <h3 className="display-title min-w-0 text-lg sm:text-xl">{item.nome}</h3>
                      <span className="shrink-0 text-right text-xs text-muted-foreground sm:text-sm">
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  O buffet varia todos os dias. Pergunte o cardápio de hoje pelo{" "}
                  <WhatsAppLink className="text-brand underline underline-offset-4">
                    WhatsApp
                  </WhatsAppLink>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CITAÇÃO */}
        <section className="border-y border-border bg-brand text-brand-foreground">
          <blockquote className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
            <p className="display-title text-[2rem] leading-[1.05] sm:text-[3.75rem]">
              Se for pra voar, que seja alto.
              <br />
              Se for pra almoçar, que seja aqui.
            </p>
          </blockquote>
        </section>

        {/* BOM PRA QUEM */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="label-eyebrow text-brand">Bom pra quem</p>
          <h2 className="display-title mt-3 text-[2.25rem] sm:text-5xl">
            Um almoço que resolve o seu dia
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {PUBLICO.map((item) => (
              <div key={item.titulo} className="border-t-2 border-brand pt-5">
                <h3 className="display-title text-xl">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section
          id="localizacao"
          className="border-t border-border"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="label-eyebrow text-brand">Localização</p>
            <h2 className="display-title mt-3 text-[2.25rem] sm:text-5xl">
              Como chegar — do lado do aeroporto
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
              <div className="min-w-0 space-y-8">
                <div>
                  <h3 className="label-eyebrow">Endereço</h3>
                  <p className="mt-2 text-base leading-relaxed">
                    Av. Dom Pedro II, 1521 — Alto Umuarama
                    <br />
                    Uberlândia/MG
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <h3 className="label-eyebrow">Horário</h3>
                  <p className="mt-2 text-base">Terça a domingo, das 10h às 14h30</p>
                </div>
                <div className="border-t border-border pt-6">
                  <h3 className="label-eyebrow">WhatsApp</h3>
                  <WhatsAppLink className="mt-2 inline-block text-base text-brand underline underline-offset-4">
                    (34) 98881-9978
                  </WhatsAppLink>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={ROTA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display-title inline-flex items-center gap-2 rounded-[5px] bg-brand px-6 py-3 text-sm tracking-wide text-brand-foreground transition-opacity hover:opacity-90"
                  >
                    <PinIcon className="h-4 w-4" />
                    Traçar rota no Google Maps
                  </a>
                  <a
                    href={MAPS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display-title inline-block rounded-[5px] border border-foreground px-6 py-3 text-sm tracking-wide transition-colors hover:bg-foreground hover:text-background"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
              <iframe
                title="Mapa do Restaurante Tradição Mineira"
                src="https://www.google.com/maps?q=Restaurante%20Tradi%C3%A7%C3%A3o%20Mineira%2C%20Av.%20Dom%20Pedro%20II%2C%201521%2C%20Uberl%C3%A2ndia%20MG&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full rounded-[6px] border border-border sm:h-[480px]"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border bg-secondary">
          <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="label-eyebrow text-brand">Dúvidas</p>
            <h2 className="display-title mt-3 text-[2.25rem] sm:text-5xl">
              Perguntas frequentes
            </h2>
            <dl className="mt-10 border-t border-border">
              {FAQ.map((f) => (
                <div key={f.p} className="border-b border-border py-6">
                  <dt className="display-title text-lg sm:text-xl">{f.p}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {f.r}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Logo do Restaurante Tradição Mineira"
                width={36}
                height={36}
                loading="lazy"
                className="h-9 w-9 rounded-full"
              />
              <p>© {new Date().getFullYear()} Restaurante Tradição Mineira</p>
            </div>
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
              <a
                href={ROTA}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Como chegar
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
