# Landing page: SEO, fotos reais, logo e mais cor

## O que muda

**1. Logo e fotos reais do restaurante**
- A logo enviada (círculo vermelho "Tradição Mineira") passa a ser usada no header e no footer, no lugar do texto puro.
- As duas fotos reais enviadas (buffet completo e mesa de frutas/saladas) entram na página substituindo/complementando as imagens genéricas atuais: a foto do buffet na seção "O restaurante" e a das frutas numa nova faixa de galeria.
- Todas as imagens vão para o CDN de assets, com `alt` descritivo em pt-BR.

**2. Mais cor e presença de marca**
- O vermelho da logo passa a aparecer com mais força: faixa de destaque vermelha entre seções, número/estatísticas em vermelho, botões e detalhes (bordas, eyebrows) com o tom da marca.
- Bloco de citação com fundo vermelho sólido e texto claro, em vez do cinza atual.

**3. Headings estruturados (H1/H2/H3)**
- Um único H1 no hero: "Comida mineira e churrasco na brasa em Uberlândia".
- H2 por seção: "Cozinha mineira feita no dia", "Churrasco na brasa todos os dias", "O que você encontra no buffet", "Como chegar — do lado do aeroporto", "Perguntas frequentes".
- H3 nos itens de lista/perguntas.

**4. SEO**
- Title: "Restaurante Tradição Mineira | Uberlândia".
- Meta description citando buffet mineiro, churrasco na brasa, Alto Umuarama/aeroporto e horário (terça a domingo, 10h–14h30).
- og:title, og:description, og:image (foto real do buffet), twitter:card, canonical.
- JSON-LD Restaurant ampliado: geo, faixa de preço, menu de itens do churrasco, horários estruturados, FAQPage para as perguntas frequentes.

**5. CTA "Como chegar" para o Google Maps**
- Botão fixo no header (ao lado do WhatsApp, visível também no mobile como ícone) que abre a rota no Google Maps.
- CTA "Traçar rota no Google Maps" no hero, ao lado do botão de WhatsApp.
- Botão de rota reforçado na seção de localização.

**6. Textos melhores + seções novas**
- Reescrita dos textos existentes com linguagem mais concreta e local (mineiridade, quem vem do aeroporto, buffet feito no dia).
- Nova seção "O que você encontra no buffet": grade de categorias (saladas frescas, pratos quentes mineiros, arroz especial, sobremesas, churrasco na brasa) — só categorias, sem inventar cardápio fixo.
- Nova seção "Bom pra quem" (viajante com pouco tempo, almoço de trabalho, família no fim de semana).
- Nova seção "Perguntas frequentes": horário, estacionamento/localização, se tem churrasco todo dia, como saber o cardápio do dia — respostas conservadoras, encaminhando ao WhatsApp quando o dado não é confirmado.

## Detalhes técnicos
- Tudo dentro de `src/routes/index.tsx` (seções extraídas em componentes locais se ficar longo), tokens de cor novos em `src/styles.css`.
- Imagens enviadas publicadas via `lovable-assets` e importadas por pointer `.asset.json`; `og:image` usa a URL absoluta do preview.
- Sem backend, sem formulário — CTAs continuam sendo WhatsApp e Maps.

## Nota
Não inventarei fatos não fornecidos (preço, estacionamento, delivery). Onde faltar dado confirmado, a resposta orienta a perguntar no WhatsApp — me diga se você tem esses dados e eu incluo.
