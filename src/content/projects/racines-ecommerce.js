/** Source: case study and images supplied by Samya (Racines-shop, 2021–2023). */
const dir = "/images/projects/racines-ecommerce";
const images = {
  homeProposed: { src: `${dir}/home-proposed.jpg`, width: 1080, height: 664 },
  homeCurrent: { src: `${dir}/home-current.jpg`, width: 1080, height: 664 },
  checkoutProposed: { src: `${dir}/checkout-proposed.jpg`, width: 1282, height: 2048 },
  checkoutCurrent: { src: `${dir}/checkout-current.jpg`, width: 1148, height: 2048 },
  productProposed: { src: `${dir}/product-mobile-proposed.jpg`, width: 644, height: 1270 },
  productCurrent: { src: `${dir}/product-mobile-current.jpg`, width: 921, height: 1838 },
  usabilityTest: { src: `${dir}/usability-test.jpg`, width: 2048, height: 1203 },
  observations: { src: `${dir}/observations-table.jpg`, width: 1276, height: 1384 },
  workshop: { src: `${dir}/workshop-card-sorting.jpg`, width: 1080, height: 1763 },
};

const project = {
  slug: "racines-ecommerce",
  client: "Racines-shop",
  period: { start: "2021", end: "2023" },
  accent: "brick",
  cover: {
    ...images.homeProposed,
    fit: "contain",
    background: "#161966",
    alt: "Proposition de page d'accueil pour Racines-shop, affichée dans un ordinateur portable.",
  },
  fr: {
    title: "Fluidifier le parcours d'achat",
    discipline: "Recherche UX · Conception",
    summary:
      "Premiers travaux UX d'une épicerie en ligne de produits d'Afrique subsaharienne et de l'océan Indien : audit, tests d'utilisabilité, atelier de tri par cartes et maquettes pour fluidifier le parcours d'achat.",
    meta: {
      role: "UX design, UI design, graphisme",
      context: "Épicerie en ligne, pôle communication de Racines",
      tools: "Adobe XD, Google Forms",
      location: "Montpellier, France",
    },
    sections: [
      {
        id: "contexte",
        heading: "Contexte",
        blocks: [
          {
            type: "text",
            body: [
              "Racines-shop est une épicerie en ligne spécialisée dans les produits d'Afrique subsaharienne et de l'océan Indien. Son ambition : devenir la référence pour la diaspora africaine et malgache, son public principal, ainsi que pour toute personne curieuse de découvrir de nouvelles saveurs. Depuis son lancement, aucune démarche UX n'avait été entreprise.",
              "Designer web au sein du pôle communication, j'ai initié et mené des travaux exploratoires en UX/UI pour améliorer l'expérience de la boutique. Avec les ressources et les moyens disponibles à ce moment-là, j'ai conduit un audit ergonomique et des tests d'utilisabilité, animé un atelier de tri par cartes et conçu des maquettes fonctionnelles pour fluidifier le parcours d'achat et optimiser les conversions.",
            ],
          },
        ],
      },
      {
        id: "objectif",
        heading: "Objectif",
        blocks: [
          {
            type: "statement",
            text: "Identifier et résoudre les points de friction du parcours client pour améliorer l'expérience d'achat.",
          },
        ],
      },
      {
        id: "recherche",
        heading: "Recherche et analyse",
        blocks: [
          {
            type: "facts",
            items: [
              { value: "6", label: "tests d'utilisabilité auprès de la cible principale, sur desktop et mobile" },
              { value: "3", label: "tests incluant un acte d'achat réel" },
              { value: "2", label: "questionnaires : à chaud après le test, puis après réception de la commande" },
            ],
          },
          {
            type: "text",
            heading: "Audit ergonomique",
            body: [
              "J'ai d'abord réalisé un audit ergonomique pour identifier les premiers axes d'amélioration, en analysant les pages clés de la boutique :",
            ],
          },
          {
            type: "list",
            items: ["Page d'accueil", "Page produit", "Tunnel de commande", "Menu et navigation"],
          },
          {
            type: "text",
            heading: "Tests d'utilisabilité",
            body: [
              "Pour mieux comprendre les points de friction rencontrés pendant la navigation, j'ai mené des tests d'utilisabilité basés sur des scénarios d'usage. Six tests, auprès de personnes correspondant à notre cible principale, en alternant desktop et mobile. Trois d'entre eux incluaient un acte d'achat réel.",
            ],
          },
          {
            type: "image",
            ...images.usabilityTest,
            alt: "Enregistrement d'un test d'utilisabilité à distance : écran partagé sur racines-shop.com, méga-menu « L'épicerie salée » ouvert.",
            caption: "Test d'utilisabilité à distance, mai 2021.",
          },
          {
            type: "text",
            heading: "Questionnaire post-test",
            body: [
              "Pour recueillir le ressenti des participants à chaud, je leur ai envoyé un questionnaire Google Forms. Il portait sur :",
            ],
          },
          {
            type: "list",
            items: [
              "l'esthétique du site ;",
              "la navigation ;",
              "la facilité à trouver rapidement les informations demandées dans les scénarios ;",
              "les étapes de commande, lorsqu'un achat avait été effectué.",
            ],
          },
          {
            type: "text",
            body: [
              "Les personnes ayant réalisé un achat réel ont rempli un second questionnaire après réception de leur commande.",
            ],
          },
        ],
      },
      {
        id: "synthese",
        heading: "Synthèse",
        blocks: [
          {
            type: "text",
            body: [
              "Toutes les observations et les réactions des participants ont été consignées dans un tableau, avec une suggestion d'amélioration pour chaque point. Cinq axes en sont ressortis :",
            ],
          },
          {
            type: "image",
            ...images.observations,
            alt: "Extrait du tableau de synthèse des tests sur PC, classé par thème : page d'accueil, navigation, design, recettes, produits, étapes de commande et mode de livraison. Les constats majeurs sont surlignés en rouge.",
            caption: "Extrait du tableau des observations, tests sur PC. En rouge, les constats majeurs.",
          },
          {
            type: "steps",
            items: [
              "Simplifier le processus de commande en retirant les éléments superflus du tunnel d'achat.",
              "Restructurer la page d'accueil et le header.",
              "Améliorer la page d'accueil sur mobile.",
              "Revoir l'architecture de l'information : menu de navigation et barre de recherche.",
              "Corriger les problèmes d'affordance.",
            ],
          },
          {
            type: "text",
            body: [
              "Nous avons ensuite déterminé, par ordre de priorité, ce qui pouvait être mis en place rapidement à notre niveau d'intervention, sans budget.",
            ],
          },
        ],
      },
      {
        id: "atelier",
        heading: "Atelier de co-création",
        blocks: [
          {
            type: "facts",
            items: [{ value: "4", label: "participants internes : communication, qualité, SAV et commercial" }],
          },
          {
            type: "text",
            body: ["J'ai animé un atelier de tri par cartes pour repenser l'arborescence du site."],
          },
          {
            type: "image",
            ...images.workshop,
            alt: "Atelier de tri par cartes : des dizaines de cartes produits sont regroupées sur une table sous des post-it bleus « Ép. salée », « Ép. sucrée », « Ép. asiatique », « Ép. bio » et « Boissons ».",
            caption: "Atelier de tri par cartes avec les équipes internes.",
          },
        ],
      },
      {
        id: "conception",
        heading: "Conception",
        blocks: [
          {
            type: "text",
            body: ["Les maquettes ont été réalisées sur Adobe XD, en regard du site alors en ligne."],
          },
          {
            type: "text",
            heading: "Page d'accueil",
            body: ["Amélioration de la hiérarchie visuelle : barre de recherche mise en avant dans le header, navigation restructurée."],
          },
          {
            type: "compare",
            layout: "stack",
            current: { ...images.homeCurrent, alt: "Page d'accueil du site en ligne : bandeau noir d'informations, logo centré, menu sur une ligne, grand carrousel photo." },
            proposed: { ...images.homeProposed, alt: "Proposition de page d'accueil : barre de recherche centrale dans le header, menu par univers, carrousel accompagné de deux encarts « Le coin des promos » et « Nos recettes »." },
          },
          {
            type: "text",
            heading: "Page produit — mobile",
            body: ["Présentation optimisée des informations : description, prix, disponibilité, option de grammage."],
          },
          {
            type: "compare",
            layout: "phone",
            current: { ...images.productCurrent, alt: "Page produit mobile du site en ligne : visuel du produit, stock, prix, sélecteur de quantité et bouton « Ajouter au panier »." },
            proposed: { ...images.productProposed, alt: "Proposition de page produit mobile : barre de recherche, fil d'Ariane, avis clients, choix du grammage 250 g ou 500 g, prix et bouton « Ajouter au panier »." },
            caption: "La capture du site en ligne date de 2025.",
          },
          {
            type: "text",
            heading: "Tunnel de commande",
            body: ["Simplification des étapes pour réduire l'abandon."],
          },
          {
            type: "compare",
            layout: "side",
            current: { ...images.checkoutCurrent, alt: "Panier du site en ligne : nombreux boutons secondaires, champ de code promo et estimation des frais de port sous la liste des articles." },
            proposed: { ...images.checkoutProposed, alt: "Proposition de panier : étapes de commande numérotées, articles à gauche, code promo et choix de livraison chiffrés à droite, bouton « Finaliser ma commande » mis en avant." },
            caption: "La capture du site en ligne date de 2025.",
          },
        ],
      },
      {
        id: "resultats",
        heading: "Résultats",
        blocks: [
          {
            type: "text",
            body: [
              "Parmi les recommandations formulées, certaines ont pu être mises en place rapidement grâce à leur faible impact sur les ressources, et ont amélioré l'expérience à court terme.",
              "D'autres optimisations, plus structurantes, n'ont pas pu être déployées faute de budget. Elles restent des axes d'amélioration identifiés pour les futures évolutions de la plateforme. Ces premières itérations ont posé les bases d'une réflexion plus large sur l'ergonomie du site.",
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: "Smoothing the purchase flow",
    discipline: "UX research · Design",
    summary:
      "The first UX work for an online grocery store selling products from sub-Saharan Africa and the Indian Ocean: an audit, usability tests, a card-sorting workshop and mockups to smooth the purchase flow.",
    meta: {
      role: "UX design, UI design, graphic design",
      context: "Online grocery store, Racines communications team",
      tools: "Adobe XD, Google Forms",
      location: "Montpellier, France",
    },
    sections: [
      {
        id: "context",
        heading: "Context",
        blocks: [
          {
            type: "text",
            body: [
              "Racines-shop is an online grocery store specialising in products from sub-Saharan Africa and the Indian Ocean. Its ambition: to become the go-to shop for the African and Malagasy diaspora, its core audience, and for anyone curious to discover new flavours. Since its launch, no UX work had ever been done.",
              "As the web designer in the communications team, I initiated and led exploratory UX/UI work to improve the shop's experience. With the resources available at the time, I ran a UX audit and usability tests, facilitated a card-sorting workshop and designed functional mockups to smooth the purchase flow and improve conversion.",
            ],
          },
        ],
      },
      {
        id: "goal",
        heading: "Goal",
        blocks: [
          {
            type: "statement",
            text: "Identify and resolve the friction points in the customer journey to improve the shopping experience.",
          },
        ],
      },
      {
        id: "research",
        heading: "Research and analysis",
        blocks: [
          {
            type: "facts",
            items: [
              { value: "6", label: "usability tests with the core audience, on desktop and mobile" },
              { value: "3", label: "tests including a real purchase" },
              { value: "2", label: "questionnaires: right after the test, then after the order arrived" },
            ],
          },
          {
            type: "text",
            heading: "UX audit",
            body: ["I started with a UX audit to find the first areas for improvement, analysing the shop's key pages:"],
          },
          {
            type: "list",
            items: ["Home page", "Product page", "Checkout", "Menu and navigation"],
          },
          {
            type: "text",
            heading: "Usability tests",
            body: [
              "To better understand the friction users met while browsing, I ran scenario-based usability tests. Six tests with people matching our core audience, alternating desktop and mobile. Three of them included a real purchase.",
            ],
          },
          {
            type: "image",
            ...images.usabilityTest,
            alt: "Recording of a remote usability test: shared screen on racines-shop.com with the “L'épicerie salée” mega-menu open.",
            caption: "Remote usability test, May 2021.",
          },
          {
            type: "text",
            heading: "Post-test questionnaire",
            body: ["To capture participants' impressions while fresh, I sent them a Google Forms questionnaire covering:"],
          },
          {
            type: "list",
            items: [
              "the look of the site;",
              "navigation;",
              "how easily they found the information the scenarios asked for;",
              "the checkout steps, when a purchase was made.",
            ],
          },
          {
            type: "text",
            body: ["Participants who made a real purchase filled in a second questionnaire once their order arrived."],
          },
        ],
      },
      {
        id: "synthesis",
        heading: "Synthesis",
        blocks: [
          {
            type: "text",
            body: [
              "Every observation and participant reaction went into a single table, with an improvement suggestion for each point. Five areas emerged:",
            ],
          },
          {
            type: "image",
            ...images.observations,
            alt: "Excerpt of the synthesis table for desktop tests, grouped by theme: home page, navigation, design, recipes, products, checkout and delivery. Key findings are highlighted in red.",
            caption: "Excerpt of the observations table, desktop tests (in French). Key findings in red.",
          },
          {
            type: "steps",
            items: [
              "Simplify checkout by removing unnecessary elements from the purchase funnel.",
              "Restructure the home page and header.",
              "Improve the mobile home page.",
              "Rework the information architecture: navigation menu and search bar.",
              "Fix affordance issues.",
            ],
          },
          {
            type: "text",
            body: ["We then prioritised what could be done quickly, within our scope and without a budget."],
          },
        ],
      },
      {
        id: "workshop",
        heading: "Co-creation workshop",
        blocks: [
          {
            type: "facts",
            items: [{ value: "4", label: "internal participants: communications, quality, customer service and sales" }],
          },
          {
            type: "text",
            body: ["I facilitated a card-sorting workshop to rethink the site structure."],
          },
          {
            type: "image",
            ...images.workshop,
            alt: "Card-sorting workshop: dozens of product cards grouped on a table under blue sticky notes labelled with categories such as savoury, sweet, Asian and organic groceries, and drinks.",
            caption: "Card-sorting workshop with internal teams.",
          },
        ],
      },
      {
        id: "design",
        heading: "Design",
        blocks: [
          {
            type: "text",
            body: ["The mockups were designed in Adobe XD, alongside the site that was live at the time."],
          },
          {
            type: "text",
            heading: "Home page",
            body: ["Clearer visual hierarchy: search bar brought forward in the header, restructured navigation."],
          },
          {
            type: "compare",
            layout: "stack",
            current: { ...images.homeCurrent, alt: "Live home page: black information bar, centred logo, one-line menu, large photo carousel." },
            proposed: { ...images.homeProposed, alt: "Proposed home page: central search bar in the header, menu by category, carousel flanked by promotions and recipes tiles." },
          },
          {
            type: "text",
            heading: "Product page — mobile",
            body: ["Better presentation of information: description, price, availability, weight options."],
          },
          {
            type: "compare",
            layout: "phone",
            current: { ...images.productCurrent, alt: "Live mobile product page: product shot, stock, price, quantity selector and add-to-basket button." },
            proposed: { ...images.productProposed, alt: "Proposed mobile product page: search bar, breadcrumb, customer reviews, 250 g or 500 g weight choice, price and add-to-basket button." },
            caption: "The live-site screenshot was taken in 2025.",
          },
          {
            type: "text",
            heading: "Checkout",
            body: ["Fewer, simpler steps to reduce drop-off."],
          },
          {
            type: "compare",
            layout: "side",
            current: { ...images.checkoutCurrent, alt: "Live basket page: many secondary buttons, promo code field and shipping estimate below the item list." },
            proposed: { ...images.checkoutProposed, alt: "Proposed basket page: numbered checkout steps, items on the left, promo code and priced delivery options on the right, prominent complete-order button." },
            caption: "The live-site screenshot was taken in 2025.",
          },
        ],
      },
      {
        id: "results",
        heading: "Results",
        blocks: [
          {
            type: "text",
            body: [
              "Some of the recommendations could be rolled out quickly because they needed few resources, improving the experience in the short term.",
              "Other, more structural improvements couldn't be deployed for lack of budget. They remain identified priorities for the platform's future. These first iterations laid the groundwork for a broader reflection on the site's usability.",
            ],
          },
        ],
      },
    ],
  },
};

export default project;
