/**
 * Case study schema
 * - slug, client, period, accent (plate colour token), cover (image or null)
 * - [lang]: title, discipline, summary, meta, sections
 * Section types: "text" (body[]), "list" (items[]), "steps" (items[]),
 * "image" (src, width, height, alt, caption), "draft" (note — dev only).
 */
const project = {
  slug: "nutcache-freemium",
  client: "Nutcache",
  period: { start: "2025", end: null },
  accent: "forest",
  cover: null,
  fr: {
    title: "Stratégie freemium",
    discipline: "Produit · Monétisation",
    summary:
      "Concevoir les mécanismes de monétisation d'un SaaS B2B : parcours d'upgrade, restrictions d'accès et opportunités d'upsell.",
    meta: {
      role: "UX/UI Designer",
      context: "SaaS B2B, équipe produit bilingue",
      team: "Produit, Développement, QA, Architecture",
      location: "Montréal",
    },
    sections: [
      {
        id: "contexte",
        type: "text",
        heading: "Contexte",
        body: [
          "Nutcache est un SaaS B2B. Au sein de l'équipe produit, dans un environnement bilingue anglais / français, j'ai contribué à la stratégie freemium du produit.",
        ],
      },
      {
        id: "contribution",
        type: "list",
        heading: "Ma contribution",
        items: [
          "Conception des mécanismes de monétisation.",
          "Conception des parcours d'upgrade.",
          "Définition des restrictions d'accès.",
          "Identification et conception des opportunités d'upsell.",
        ],
      },
      { id: "probleme", type: "draft", heading: "Le problème", note: "Quel enjeu business et utilisateur ? Qu'est-ce qui ne fonctionnait pas avant ?" },
      { id: "recherche", type: "draft", heading: "Recherche et données", note: "Retours clients, données d'usage, benchmark : sur quoi les décisions se sont-elles appuyées ?" },
      { id: "decisions", type: "draft", heading: "Décisions de design", note: "2 ou 3 décisions clés : l'option retenue, les alternatives écartées, et pourquoi." },
      { id: "solution", type: "draft", heading: "Solution", note: "Visuels : écrans d'upgrade, états verrouillés, paywall, cas limites." },
      { id: "resultats", type: "draft", heading: "Résultats", note: "Uniquement des résultats réels et vérifiables (ou ce qui a été appris si pas de chiffres)." },
    ],
  },
  en: {
    title: "Freemium strategy",
    discipline: "Product · Monetisation",
    summary:
      "Designing the monetisation mechanics of a B2B SaaS: upgrade flows, access restrictions and upsell opportunities.",
    meta: {
      role: "UX/UI Designer",
      context: "B2B SaaS, bilingual product team",
      team: "Product, Development, QA, Architecture",
      location: "Montréal",
    },
    sections: [
      {
        id: "context",
        type: "text",
        heading: "Context",
        body: [
          "Nutcache is a B2B SaaS. On the product team, in a bilingual English / French environment, I contributed to the product's freemium strategy.",
        ],
      },
      {
        id: "contribution",
        type: "list",
        heading: "My contribution",
        items: [
          "Designed the monetisation mechanics.",
          "Designed the upgrade flows.",
          "Defined access restrictions.",
          "Identified and designed upsell opportunities.",
        ],
      },
      { id: "problem", type: "draft", heading: "The problem", note: "What was the business and user stake? What wasn't working before?" },
      { id: "research", type: "draft", heading: "Research and data", note: "Customer feedback, usage data, benchmark: what were decisions based on?" },
      { id: "decisions", type: "draft", heading: "Design decisions", note: "2 or 3 key decisions: the option chosen, the alternatives dropped, and why." },
      { id: "solution", type: "draft", heading: "Solution", note: "Visuals: upgrade screens, locked states, paywall, edge cases." },
      { id: "results", type: "draft", heading: "Results", note: "Only real, verifiable outcomes (or what was learned if there are no numbers)." },
    ],
  },
};

export default project;
