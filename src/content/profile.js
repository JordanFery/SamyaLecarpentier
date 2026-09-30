/**
 * Everything here comes from Samya's CV (2026). Do not add facts that are not
 * validated by her. Missing items are listed in `todo` and surface as drafts.
 */
export const profile = {
  name: "Samya Lecarpentier",
  email: "samya.lecarpentier@gmail.com",
  linkedin: "https://www.linkedin.com/in/samya-lecarpentier",
  city: "Montréal",
  region: "QC",
  // TODO: portrait (src, width, height, alt) — to be provided by Samya.
  portrait: null,
};

export const about = {
  fr: {
    title: "Designer UX/UI, formée au design graphique.",
    intro: [
      "J'évolue en SaaS B2B au sein d'équipes produit, avec une approche centrée utilisateur, orientée valeur et impact.",
      "Avant le produit, j'ai passé cinq ans en design graphique : identités visuelles, packaging, rapports annuels, infolettres. Je mets aujourd'hui cette expertise visuelle au service d'expériences claires et cohérentes, de la réflexion UX à la conception UI.",
    ],
    teaser:
      "Designer UX/UI en SaaS B2B, avec cinq ans de design graphique derrière moi. Je conçois des fonctionnalités de bout en bout, des besoins aux cas limites, et je fais évoluer les design systems qui les portent.",
    brings: [
      {
        title: "Des fonctionnalités pensées de bout en bout",
        body: "De l'analyse des besoins à l'implémentation : parcours utilisateurs, règles métier, comportements et cas limites.",
      },
      {
        title: "Une amélioration continue fondée sur les faits",
        body: "Analyse et priorisation des retours clients, des données d'usage et des anomalies.",
      },
      {
        title: "Un design system gouverné",
        body: "Migration de Material Design 2 vers Material Design 3 et gouvernance, pour la cohérence et la scalabilité du produit.",
      },
      {
        title: "Une collaboration étroite",
        body: "Avec les équipes Produit, Développement, QA et Architecture, et des workflows IA (Claude + Figma) pour accélérer l'idéation, la conception et la livraison.",
      },
    ],
    draft: {
      heading: "Ma manière de travailler",
      note: "Texte à écrire avec Samya : comment elle aborde un problème, ce qui l'intéresse, ce qu'elle cherche dans une équipe.",
    },
  },
  en: {
    title: "UX/UI designer, trained in graphic design.",
    intro: [
      "I work in B2B SaaS on product teams, with a user-centred approach focused on value and impact.",
      "Before product, I spent five years in graphic design: visual identities, packaging, annual reports, newsletters. Today I bring that visual expertise to clear, consistent experiences, from UX thinking to UI design.",
    ],
    teaser:
      "UX/UI designer in B2B SaaS, with five years of graphic design behind me. I design features end to end, from needs to edge cases, and evolve the design systems that support them.",
    brings: [
      {
        title: "Features designed end to end",
        body: "From needs analysis to implementation: user flows, business rules, behaviours and edge cases.",
      },
      {
        title: "Continuous improvement grounded in evidence",
        body: "Analysing and prioritising customer feedback, usage data and bugs.",
      },
      {
        title: "A governed design system",
        body: "Migration from Material Design 2 to Material Design 3 and its governance, for a consistent, scalable product.",
      },
      {
        title: "Close collaboration",
        body: "With Product, Development, QA and Architecture teams, and AI workflows (Claude + Figma) to speed up ideation, design and delivery.",
      },
    ],
    draft: {
      heading: "How I work",
      note: "To write with Samya: how she approaches a problem, what interests her, what she looks for in a team.",
    },
  },
};

export const experience = [
  {
    id: "nutcache",
    company: "Nutcache",
    start: "2025",
    end: null,
    fr: {
      role: "UX/UI Designer",
      context: "SaaS B2B · Équipe produit bilingue anglais / français · Montréal",
      highlights: [
        "Conception de fonctionnalités de bout en bout, de l'analyse des besoins à l'implémentation : parcours utilisateurs, règles métier, comportements et cas limites.",
        "Pilotage de l'amélioration continue du produit, par l'analyse et la priorisation des retours clients, des données d'usage et des anomalies.",
        "Contribution à la stratégie produit freemium : mécanismes de monétisation, parcours d'upgrade, restrictions d'accès et opportunités d'upsell.",
        "Pilotage de la migration du design system de Material Design 2 vers Material Design 3, et de sa gouvernance.",
        "Collaboration avec les équipes Produit, Développement, QA et Architecture ; intégration de workflows IA (Claude + Figma).",
      ],
    },
    en: {
      role: "UX/UI Designer",
      context: "B2B SaaS · Bilingual English / French product team · Montréal",
      highlights: [
        "End-to-end feature design, from needs analysis to implementation: user flows, business rules, behaviours and edge cases.",
        "Leading continuous product improvement by analysing and prioritising customer feedback, usage data and bugs.",
        "Contributing to the freemium product strategy: monetisation mechanics, upgrade flows, access restrictions and upsell opportunities.",
        "Leading the design system migration from Material Design 2 to Material Design 3, and its governance.",
        "Working with Product, Development, QA and Architecture teams; bringing in AI workflows (Claude + Figma).",
      ],
    },
  },
  {
    id: "racines",
    company: "Racines SAS",
    start: "2020",
    end: "2024",
    fr: {
      role: "Designer web + UX/UI",
      context: "Entreprise agroalimentaire · Montpellier, France",
      highlights: [
        "Audit ergonomique du site e-commerce et atelier UX de tri par cartes pour identifier les irritants et structurer les priorités.",
        "Tests utilisateurs sur mobile et desktop, puis maquettes haute fidélité pour simplifier le parcours d'achat.",
        "Identité visuelle, packaging, rapports annuels, visuels web et réseaux sociaux.",
        "Infolettres mensuelles (B2B : 1 200 clients, B2C : plus de 15 000 abonnés) et publications sur les réseaux sociaux.",
      ],
    },
    en: {
      role: "Web + UX/UI Designer",
      context: "Food company · Montpellier, France",
      highlights: [
        "UX audit of the e-commerce site and a card-sorting workshop to surface pain points and structure priorities.",
        "User testing on mobile and desktop, then high-fidelity mockups to simplify the purchase flow.",
        "Visual identity, packaging, annual reports, web and social media visuals.",
        "Monthly newsletters (B2B: 1,200 customers, B2C: over 15,000 subscribers) and social media publishing.",
      ],
    },
  },
  {
    id: "now-you-know",
    company: "Now You Know",
    start: "2019",
    end: "2021",
    fr: {
      role: "Co-fondatrice — UI/UX Designer",
      context: "Application mobile · Paris, en télétravail",
      highlights: [
        "Parcours utilisateurs et architecture de l'information de l'application.",
        "Wireframes et UI des versions alpha, beta, beta V2 et web app.",
        "Fonctionnalités de gamification : quiz, collecte de points, projets soutenus.",
        "Co-création de l'identité visuelle (logo et univers graphique).",
      ],
    },
    en: {
      role: "Co-founder — UI/UX Designer",
      context: "Mobile app · Paris, remote",
      highlights: [
        "User flows and information architecture for the app.",
        "Wireframes and UI for the alpha, beta, beta V2 and web app releases.",
        "Gamification features: quizzes, points, supported projects.",
        "Co-created the visual identity (logo and visual world).",
      ],
    },
  },
];

export const education = {
  year: "2018",
  fr: {
    degree: "Maîtrise en design graphique et design d'interaction",
    school: "Université Polytechnique des Hauts-de-France, Valenciennes",
  },
  en: {
    degree: "Master's in graphic design and interaction design",
    school: "Université Polytechnique des Hauts-de-France, Valenciennes",
  },
};

export const skills = {
  fr: [
    {
      heading: "Expérience utilisateur",
      items: ["Audits UX", "Analyse de la concurrence", "Recherche qualitative", "Parcours utilisateurs", "Design UI et prototypage", "Gamification"],
    },
    {
      heading: "Design graphique",
      items: ["Identité visuelle", "Packaging", "Design cross-canal", "Mise en page d'infolettres", "Production imprimée"],
    },
    {
      heading: "Outils",
      items: ["Figma", "Claude", "Notion", "Adobe Creative Suite", "HTML / CSS", "Design Thinking"],
    },
    {
      heading: "Langues",
      items: ["Français", "Anglais"],
    },
  ],
  en: [
    {
      heading: "User experience",
      items: ["UX audits", "Competitive analysis", "Qualitative research", "User flows", "UI design and prototyping", "Gamification"],
    },
    {
      heading: "Graphic design",
      items: ["Visual identity", "Packaging", "Cross-channel design", "Newsletter layout", "Print production"],
    },
    {
      heading: "Tools",
      items: ["Figma", "Claude", "Notion", "Adobe Creative Suite", "HTML / CSS", "Design Thinking"],
    },
    {
      heading: "Languages",
      items: ["French", "English"],
    },
  ],
};
