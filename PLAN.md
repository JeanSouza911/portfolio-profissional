# PLAN.md — Plano de Desenvolvimento (2026)

Plano orientado a **branding, conteúdo e execução por blocos**, alinhado com tendências atuais de portfólios e com os objetivos do projeto: **SEO, acessibilidade e performance**.

## Pesquisa Web (insights 2026)

Base (referências):
- **Figma — Web design trends 2026**: tipografia em destaque, dark mode como padrão, motion “com propósito”, navegação mais experimental e preocupação com sustentabilidade (código enxuto, imagens otimizadas, a11y) — `https://www.figma.com/resource-library/web-design-trends/`
- **Design Monks — Typography trends 2026**: foco em clareza + flexibilidade, **variable fonts** (menos arquivos, mais performance), e **kinetic typography** para capturar atenção — `https://www.designmonks.co/blog/typography-trends-2026`
- **Adobe — Design trends 2026**: layouts mais “editoriais”, assimetria controlada, estética mais humana/orgânica e tipografia mais expressiva — `https://www.adobe.com/express/learn/blog/design-trends-2026`

O que aplicar no seu portfólio (sem exageros):
- **Tipografia como “hero”**: títulos grandes e com hierarquia forte, mas mantendo legibilidade.
- **Motion sutil e funcional**: microinterações, transições de seção e “reveal” em scroll (evitar animações pesadas).
- **Personalidade + clareza**: um toque editorial/humano sem sacrificar navegação.
- **Sustentável/perfomático**: imagens otimizadas, carregamento progressivo e acessibilidade como base.

## Paleta de cores (Slate-first, compatível com shadcn/ui)

Diretriz: manter o sistema em **Slate** (neutros) e usar **1–2 acentos** para destacar CTA/links (sem poluir a UI).

### Neutros (Slate)
- **Base**: Slate para fundo, texto, bordas e superfícies.
- **Contraste**: priorizar legibilidade (títulos/CTA) e estados de foco visíveis.

### Acentos (modernos e “tech”)
Escolha 1 acento principal e 1 secundário:
- **Acento principal**: Cyan (destaque, links, CTA)
- **Acento secundário**: Emerald ou Violet (badges, detalhes)

### Sugestão de tokens (light/dark)
Esses nomes seguem a semântica comum do shadcn/ui (tokens por intenção).

**Light**
- `background`: slate-50
- `foreground`: slate-950
- `card`: white
- `muted`: slate-100
- `muted-foreground`: slate-600
- `border`: slate-200
- `primary`: slate-950
- `primary-foreground`: slate-50
- `accent`: cyan-600 (links/CTA)
- `accent-foreground`: white

**Dark**
- `background`: slate-950
- `foreground`: slate-50
- `card`: slate-900
- `muted`: slate-900/800 (superfícies)
- `muted-foreground`: slate-300
- `border`: slate-800
- `primary`: slate-50
- `primary-foreground`: slate-950
- `accent`: cyan-400 (links/CTA)
- `accent-foreground`: slate-950

## Tipografia (opções e comparação)

Diretriz 2026: preferir **fontes variáveis** quando possível (menos requests e melhor responsividade).

### Opção A (moderna e segura, “product-like”)
- **Body/UI**: `Geist Sans` (ou `Inter` se preferir mais universal)
- **Headings**: `Geist Sans` (pesos maiores) ou `Space Grotesk` (mais personalidade)
- **Quando usar**: foco em leitura, clareza e aparência “SaaS”.

### Opção B (editorial leve, mais personalidade)
- **Body**: `Inter` / `Geist Sans`
- **Headings**: um **serif moderno** (ex.: `Source Serif 4`, `Fraunces`, `IBM Plex Serif`)
- **Quando usar**: quando você quer “tom autoral” e narrativa (About/Case Studies).

### Comparativo rápido
- **A (Sans/Sans)**: mais neutra, consistente, ótima para performance e UI.
- **B (Sans/Serif)**: mais memorável, excelente para storytelling; exige mais cuidado com hierarquia e espaçamento.

## Layout (opções e comparação)

### Layout 1 — “Clean Grid” (alto sinal para recrutador)
- Header fixo + seções em grid (Hero / About / Projects / Skills / Contact)
- Projetos em cards com filtros (stack, tipo, impacto)
- **Prós**: previsível, rápido de navegar, ótimo para SEO.
- **Contras**: menos personalidade se não houver bons detalhes visuais.

### Layout 2 — “Editorial / Zine-light” (tendência 2026, com controle)
- Assimetrias controladas, blocos com variação de largura, headings grandes
- “Highlights” e números (impacto) em componentes de destaque
- **Prós**: mais memorável e autoral.
- **Contras**: exige disciplina para não quebrar responsividade/a11y.

Recomendação: **Layout 1 como base** + 10–20% de elementos editoriais (tipografia e composição) para personalidade sem perder clareza.

---

## Blocos do Plano

### Bloco 1 — Layout & Branding

**Objetivo**: consolidar identidade (cores, tipografia, espaçamento, componentes base) e criar a fundação para as demais páginas/seções.

- Definir: paleta final (Slate + acento), tipografia (Opção A ou B), escala de espaçamento e raio.
- Estruturar: grid responsivo, container, breakpoints, header/nav, footer.
- Componentizar: `Section`, `Container`, `Badge`, `Button`, `Card`, `Tag`, `Separator`.
- Motion baseline: transições sutis (entrada de seção e hover/focus).

**Entrega**: “Design system mínimo” + layout pronto para receber conteúdo.

### Bloco 2 — Hero & About

**Objetivo**: primeira impressão forte + narrativa clara (quem você é, o que faz, prova social).

- Hero: headline impactante, subtítulo orientado a valor, CTAs (Projetos / Contato), links (LinkedIn/GitHub).
- About: resumo, stack, preferências, “como eu trabalho”, highlights (resultados/impacto).
- A11y: ordem de tab, skip link, headings corretos (H1/H2), contraste.
- Motion: 1–2 microinterações (ex.: underline animado em links, reveal no scroll).

**Entrega**: home acima da dobra excelente + About enxuto e convincente.

### Bloco 3 — Projetos & Skills

**Objetivo**: mostrar capacidade real com contexto (problema → solução → impacto) e facilitar triagem.

- Projetos: cards com imagem leve, descrição curta, stack, links (repo/demo), métricas (quando existirem).
- Detalhe do projeto: “case study” curto (desafio, decisões técnicas, resultados).
- Skills: agrupadas (Frontend, UI, Tooling, Tests/Quality), com níveis/ênfase (sem “barra inútil”).
- Performance: imagens otimizadas, lazy loading, evitar excesso de motion.

**Entrega**: vitrine consistente, fácil de comparar e com credibilidade técnica.

### Bloco 4 — Contact & SEO Final

**Objetivo**: conversão (contato) + acabamento técnico para indexação e qualidade.

- Contact: seção curta, canais (LinkedIn/email), CTA claro, formulário se necessário.
- SEO: titles/metadata, OG image, sitemap/robots (se aplicável), canonical.
- A11y final: checagem de contraste, foco visível, labels/aria quando necessário.
- Performance final: auditoria (bundle, imagens, fontes), remoção de dependências não usadas.

**Entrega**: projeto “pronto para publicar” com SEO/a11y/performance validados.

