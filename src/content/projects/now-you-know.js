/**
 * Source: Samya's own account (2026), corrected by her: the app was built in
 * stages from an MVP, not through successive redesigns. Her first draft
 * mentioned user research, badges and leaderboards — she withdrew those, so
 * they are deliberately left out.
 */
const dir = "/images/projects/now-you-know";
const sketches = {
  appMap: { src: `${dir}/sketch-app-map.jpg`, width: 1671, height: 1240 },
  home: { src: `${dir}/sketch-home.jpg`, width: 1223, height: 1755 },
  understand: { src: `${dir}/sketch-understand.jpg`, width: 970, height: 1712 },
  act: { src: `${dir}/sketch-act.jpg`, width: 1168, height: 1688 },
  actProject: { src: `${dir}/sketch-act-project.jpg`, width: 1240, height: 1755 },
  actCommit: { src: `${dir}/sketch-act-commit.jpg`, width: 1188, height: 1733 },
  profile: { src: `${dir}/sketch-profile.jpg`, width: 1224, height: 1755 },
};

const lofi = {
  home: { src: `${dir}/lofi-home.png`, width: 734, height: 1462 },
  energies: { src: `${dir}/lofi-energies.png`, width: 750, height: 1476 },
  energyCard: { src: `${dir}/lofi-energy-card.png`, width: 718, height: 1476 },
  impact: { src: `${dir}/lofi-impact.png`, width: 704, height: 1472 },
  solutions: { src: `${dir}/lofi-solutions.png`, width: 716, height: 1466 },
  projects: { src: `${dir}/lofi-projects.png`, width: 708, height: 1474 },
  project: { src: `${dir}/lofi-project.png`, width: 740, height: 1474 },
  habit: { src: `${dir}/lofi-habit.png`, width: 734, height: 1476 },
  profile: { src: `${dir}/lofi-profile.png`, width: 714, height: 1476 },
};

const webApp = {
  home: { src: `${dir}/webapp-home.jpg`, width: 1600, height: 2291 },
  project: { src: `${dir}/webapp-project.jpg`, width: 1600, height: 1616 },
  video: { src: `${dir}/webapp-video.jpg`, width: 1600, height: 1616 },
  profile: { src: `${dir}/webapp-profile.jpg`, width: 1600, height: 1466 },
};

const phone = { width: 375, height: 812 };
const screens = {
  path: { src: `${dir}/screen-path.jpg`, ...phone },
  quiz: { src: `${dir}/screen-quiz.jpg`, ...phone },
  quizFeedback: { src: `${dir}/screen-quiz-feedback.jpg`, ...phone },
  donation: { src: `${dir}/screen-donation.jpg`, ...phone },
  thankYou: { src: `${dir}/screen-thank-you.jpg`, ...phone },
  profile: { src: `${dir}/screen-profile.jpg`, ...phone },
  actsToggle: { src: `${dir}/screen-acts-toggle.jpg`, ...phone },
  actsCounter: { src: `${dir}/screen-acts-counter.jpg`, ...phone },
};

const project = {
  slug: "now-you-know",
  client: "Now You Know",
  period: { start: "2019", end: "2021" },
  accent: "ink",
  cover: {
    src: `${dir}/cover.jpg`,
    width: 1800,
    height: 1200,
    fit: "contain",
    background: "#163029",
    alt: "Trois écrans de l'application Now You Know : le parcours éducatif en paliers, une question de quiz sur le climat et la fiche d'un projet à soutenir avec ses Acts.",
  },
  fr: {
    title: "Sensibiliser au climat par le jeu",
    discipline: "Produit 0 → 1 · Gamification",
    summary:
      "Une application mobile où quiz et engagement se rencontrent pour sensibiliser au climat et soutenir gratuitement des projets écologiques, lancée en MVP puis enrichie par étapes.",
    meta: {
      role: "Co-fondatrice, UX/UI designer",
      context: "Projet entrepreneurial, application mobile et web app",
      team: "Développeurs, chef de projet",
      tools: "Adobe XD, Illustrator",
      location: "Paris, en télétravail",
    },
    sections: [
      {
        id: "contexte",
        heading: "Contexte",
        blocks: [
          {
            type: "text",
            body: [
              "Now You Know est un projet entrepreneurial que j'ai co-fondé : une application mobile pour sensibiliser aux enjeux environnementaux et permettre de faire des dons gratuits à des projets écologiques, grâce à une monnaie virtuelle, les Acts.",
            ],
          },
          {
            type: "list",
            items: [
              "Parcours utilisateurs et architecture de l'information de l'application.",
              "Wireframes et UI des versions alpha, beta, beta 2 et de la web app.",
              "Mécaniques de gamification : quiz, collecte d'Acts, projets soutenus.",
              "Co-création de l'identité visuelle : logo et univers graphique.",
              "Collaboration avec les développeurs et le chef de projet pour garder design et développement alignés.",
            ],
          },
        ],
      },
      {
        id: "objectif",
        heading: "Objectif",
        blocks: [
          {
            type: "text",
            body: ["Créer une expérience engageante qui encourage l'apprentissage et l'action à travers des mécaniques de gamification."],
          },
          {
            type: "statement",
            text: "Comment encourager les utilisateurs à revenir sur l'application et à s'impliquer dans des actions concrètes ?",
          },
        ],
      },
      {
        id: "mvp",
        heading: "Un MVP, puis des étapes",
        blocks: [
          {
            type: "text",
            body: [
              "Dès le départ, nous avions pensé l'ensemble des fonctionnalités. Mais plutôt que de tout lancer d'un coup, nous avons développé l'application en plusieurs temps, en commençant par un MVP resserré.",
              "L'objectif : obtenir rapidement des retours d'utilisateurs réels et repérer les freins à l'expérience, notamment :",
            ],
          },
          {
            type: "list",
            items: ["la qualité des informations ;", "la surcharge cognitive ;", "la fluidité de la navigation."],
          },
        ],
      },
      {
        id: "esquisses",
        heading: "Des esquisses aux wireframes",
        blocks: [
          {
            type: "text",
            body: [
              "Avant les maquettes, l'application a d'abord pris forme sur papier, puis en wireframes basse fidélité.",
            ],
          },
          {
            type: "text",
            heading: "Sur papier",
            body: ["Une cartographie des parcours et des mécaniques de gamification, puis les croquis des écrans clés."],
          },
          {
            type: "image",
            ...sketches.appMap,
            alt: "Page de carnet : arborescence dessinée à la main. Depuis l'onboarding partent le profil (progression, Acts générés, impact positif, arbres plantés, gestes adoptés), le parcours « Comprendre » en cinq paliers ponctués de quiz, le bouton Act à activer toutes les 24 heures et l'univers « Agir » (projets et ONG, métiers et offres d'emploi, conseils pour réduire son empreinte).",
            caption: "Cartographie de l'application et de ses mécaniques de gamification.",
          },
          {
            type: "gallery",
            items: [
              {
                ...sketches.home,
                alt: "Wireframe papier de l'accueil : l'écran est partagé en deux zones, « Comprendre » et « Agir ». Des recherches de logo sont dessinées en marge.",
                caption: "Accueil : comprendre ou agir.",
              },
              {
                ...sketches.understand,
                alt: "Wireframe papier « Comprendre » : trois thèmes, Énergie, Pollution atmosphérique, Société et économie, avec le bouton Act et une barre de progression. Les onglets du bas sont annotés passé, présent, futur.",
                caption: "Comprendre : les thèmes d'un palier.",
              },
              {
                ...sketches.act,
                alt: "Wireframe papier « Agir » : deux zones, « Je soutiens » et « Je m'engage pour l'environnement ».",
                caption: "Agir : soutenir ou s'engager.",
              },
              {
                ...sketches.actProject,
                alt: "Wireframe papier d'une fiche projet en pop-up : nom, descriptif, lien « En savoir plus », boutons « Faire un don » et « Partager ». Annotation : à la fermeture, on revient à la liste.",
                caption: "Soutenir un projet : la fiche en pop-up.",
              },
              {
                ...sketches.actCommit,
                alt: "Wireframe papier « Je m'engage pour l'environnement » : Métiers, Je plante un arbre, J'adopte un geste pour la planète. Annotation : le nombre d'arbres plantés remonte dans le profil.",
                caption: "S'engager : métiers, arbres, gestes.",
              },
              {
                ...sketches.profile,
                alt: "Wireframe papier du profil : avatar, niveau, paliers terminés, Acts, arbres plantés, associations soutenues, gestes adoptés et empreinte écologique. En marge, les réglages liés aux Acts.",
                caption: "Profil : suivre son impact.",
              },
            ],
          },
          {
            type: "text",
            heading: "Wireframes basse fidélité",
            body: [
              "Les cinq onglets de navigation reprennent les cinq paliers du parcours : Enjeux, Zoom énergies et Situation d'urgence côté « Now You Know », Impact et Solutions côté « Now You Act ».",
            ],
          },
          {
            type: "gallery",
            items: [
              { ...lofi.home, alt: "Wireframe basse fidélité de l'accueil : deux zones, « Now You Know » et « Now You Act ».", caption: "Accueil : Now You Know ou Now You Act." },
              { ...lofi.energies, alt: "Wireframe « Now You Know – Zoom énergies » : énergies fossiles, renouvelables et nucléaires, en volets dépliables.", caption: "Zoom énergies : trois familles d'énergies." },
              { ...lofi.energyCard, alt: "Wireframe « énergies fossiles » : un texte d'introduction, puis un carrousel de cartes, ici le pétrole.", caption: "Une fiche par énergie, en carrousel." },
              { ...lofi.impact, alt: "Wireframe « Now You Act – Impact » : deux zones, « L'impact de l'Homme » et « Mon impact personnel ».", caption: "Impact : collectif ou personnel." },
              { ...lofi.solutions, alt: "Wireframe « Now You Act – Solutions » : deux zones, « Je soutiens » et « Je m'engage pour l'environnement ».", caption: "Solutions : soutenir ou s'engager." },
              { ...lofi.projects, alt: "Wireframe « Je soutiens un projet » : une grille de quatre projets, avec image et nom.", caption: "Choisir un projet à soutenir." },
              { ...lofi.project, alt: "Wireframe d'une fiche projet en pop-up : image, nom, descriptif, lien « en savoir plus », boutons « faire un don » et « partager ».", caption: "La fiche projet : don ou partage." },
              { ...lofi.habit, alt: "Wireframe « Je m'engage à adopter un geste » : un carrousel de cartes, ici « Se déplacer ».", caption: "Adopter un geste, en carrousel." },
              { ...lofi.profile, alt: "Wireframe du profil : avatar, progression en cinq points, Acts générés, invitations, empreinte carbone et jauge d'impact sur la planète.", caption: "Le profil : Acts, empreinte, impact." },
            ],
          },
        ],
      },
      {
        id: "alpha",
        heading: "Alpha : comprendre et collecter",
        blocks: [
          {
            type: "facts",
            items: [
              { value: "5", label: "paliers dans le parcours éducatif, chacun conclu par un quiz" },
              { value: "24 h", label: "entre deux activations du compteur d'Acts" },
            ],
          },
          {
            type: "list",
            items: [
              {
                title: "Comprendre la situation climatique",
                body: "Un parcours éducatif en deux temps : « Now You Know », en trois paliers (enjeux, zoom énergies, situation actuelle), puis « Now You Act », en deux paliers (impact, solutions).",
              },
              {
                title: "Collecter des Acts",
                body: "En réussissant le quiz à la fin de chaque palier, et en activant toutes les 24 heures le bouton « Acts » en entrant dans l'application.",
              },
            ],
          },
        ],
      },
      {
        id: "beta",
        heading: "Beta : élargir les usages",
        blocks: [
          {
            type: "list",
            items: [
              { title: "Comprendre", body: "Une information par jour sur la protection de l'environnement." },
              { title: "Collecter des Acts", body: "En découvrant des façons de consommer mieux et moins, avec un catalogue d'alternatives, et en invitant ses amis." },
              { title: "Utiliser ses Acts", body: "Pour financer les projets associatifs de son choix, ou pour soutenir l'application." },
            ],
          },
        ],
      },
      {
        id: "interface",
        heading: "L'interface",
        blocks: [
          {
            type: "text",
            body: [
              "Les maquettes haute fidélité de l'application, dans sa version à quatre onglets : don gratuit, catalogue d'alternatives, parcours éducatif et profil.",
            ],
          },
          {
            type: "text",
            heading: "Apprendre en jouant",
            body: ["Un parcours en paliers, des quiz, et un Act gagné à chaque bonne réponse."],
          },
          {
            type: "gallery",
            items: [
              {
                ...screens.path,
                alt: "Écran du parcours éducatif : une suite de paliers numérotés de 1 à 11, de « Climat » à « Énergies », avec trois cœurs en haut de l'écran.",
                caption: "Le parcours, palier par palier.",
              },
              {
                ...screens.quiz,
                alt: "Écran de quiz « Climat » : « Lequel de ces éléments ne fait pas partie de ce qui constitue le climat ? », quatre réponses, la réponse C sélectionnée.",
                caption: "Une question de quiz.",
              },
              {
                ...screens.quizFeedback,
                alt: "Écran « Bonne réponse ! +1 » avec l'explication de la réponse, un bouton « prochaine question +1 Act » et une proposition de don gratuit.",
                caption: "La bonne réponse rapporte un Act.",
              },
            ],
          },
          {
            type: "text",
            heading: "Agir sans dépenser",
            body: ["Les Acts gagnés sont reversés au projet de son choix, et le profil rassemble l'impact de chacun."],
          },
          {
            type: "gallery",
            items: [
              {
                ...screens.donation,
                alt: "Fiche d'un projet associatif : un curseur « Combien d'Acts souhaitez-vous reverser ? », un bouton « Reverser mes Acts », la description et les soutiens du projet.",
                caption: "Choisir combien d'Acts reverser.",
              },
              {
                ...screens.thankYou,
                alt: "Écran « Merci pour ton soutien ! » sur la photo d'un phoque, avec les boutons « Regarder une vidéo +10 » et « Partager le projet ».",
                caption: "Le remerciement, et une invitation à partager.",
              },
              {
                ...screens.profile,
                alt: "Écran de profil : Acts générés, projets soutenus, Acts reversés, un onglet « Mon impact » et la liste des projets soutenus.",
                caption: "Le profil, pour suivre son impact.",
              },
            ],
          },
        ],
      },
      {
        id: "beta-2",
        heading: "Beta 2 : revenir à l'essentiel",
        blocks: [
          {
            type: "text",
            body: ["Changement de direction : le menu est réduit à trois onglets, centrés sur l'apprentissage et l'action."],
          },
          {
            type: "facts",
            items: [
              { value: "3", label: "onglets : Apprendre, Agir, Profil" },
              { value: "15 s", label: "de vidéo partenaire pour soutenir un projet, gratuitement" },
            ],
          },
          {
            type: "list",
            items: [
              { title: "Apprendre", body: "Les quiz." },
              { title: "Agir", body: "Le don gratuit à des projets associatifs : pour soutenir un projet, l'utilisateur visionne 15 secondes d'une vidéo d'un partenaire de l'application." },
              { title: "Profil", body: "Suivre son impact et réaliser des mini-quêtes pour gagner des Acts." },
            ],
          },
          {
            type: "text",
            heading: "Pourquoi le compteur d'Acts a disparu",
            body: ["Présent depuis l'alpha, le compteur d'Acts était devenu un point de friction :"],
          },
          {
            type: "steps",
            items: [
              "Il fallait penser à le réactiver pour générer des Acts. Sans activation, la navigation ne rapportait rien : nous imposions une charge mentale à l'utilisateur.",
              "Cette obligation créait de la frustration : l'application forçait l'utilisateur à faire quelque chose.",
            ],
          },
          {
            type: "gallery",
            items: [
              {
                ...screens.actsToggle,
                alt: "Message d'accueil : « Avant toute chose, pense à réactiver ce bouton toutes les 24 h afin de continuer à générer de l'argent (des Acts) même quand l'application est fermée. » Une flèche désigne l'interrupteur Acts.",
                caption: "Le bouton à réactiver toutes les 24 heures.",
              },
              {
                ...screens.actsCounter,
                alt: "Message expliquant le compteur affiché en haut de l'écran, « 10,0123 » : « Les chiffres qui défilent là-haut, c'est la monnaie de l'application : les Acts. »",
                caption: "Le compteur, avec ses décimales.",
              },
            ],
          },
          {
            type: "text",
            body: [
              "La façon de générer les Acts a aussi changé. Avant, leur nombre dépendait du cours de l'Act : si une publicité rapportait 0,05 € et que 10 000 Acts valaient 0,01 €, la regarder générait 50 000 Acts, avec un affichage à trois chiffres après la virgule. En beta 2, les Acts s'affichent en nombres entiers (par exemple, 1 947 Acts générés).",
            ],
          },
          { type: "draft", note: "Visuels : écrans de la beta 2, avec le menu à trois onglets et le don par vidéo de 15 secondes." },
        ],
      },
      {
        id: "web-app",
        heading: "Une web app pour tous",
        blocks: [
          {
            type: "text",
            body: [
              "Nous avons aussi conçu une web app pour ordinateur : tout le monde n'a pas de smartphone ou n'est pas à l'aise avec son usage, les seniors par exemple.",
            ],
          },
          {
            type: "text",
            body: [
              "On y retrouve le parcours de don de l'application : choisir un projet, regarder la courte vidéo d'un partenaire pour donner gratuitement, puis suivre sa progression et ses défis.",
            ],
          },
          {
            type: "image",
            ...webApp.home,
            alt: "Page d'accueil de la web app : un projet mis en avant avec sa jauge de financement et un bouton « Faire un don gratuit », puis des cartes de projets en cours de financement et de projets déjà financés.",
            caption: "L'accueil : le projet du moment, les projets en cours de financement et ceux déjà financés.",
          },
          {
            type: "gallery",
            wide: true,
            items: [
              {
                ...webApp.project,
                alt: "Page d'un projet : photos, description et association porteuse, avec un encart indiquant le nombre de dons, la jauge de financement, le bouton « Faire un don gratuit » et l'explication du don par la vidéo d'un partenaire.",
                caption: "La page projet explique le don gratuit.",
              },
              {
                ...webApp.video,
                alt: "Écran assombri avec un bouton lecture : « Regarde la vidéo de notre partenaire qui va s'afficher pour effectuer un don gratuit », et un bouton « Lancer la vidéo ».",
                caption: "Le don : regarder la vidéo d'un partenaire.",
              },
            ],
          },
          {
            type: "image",
            ...webApp.profile,
            alt: "Page de profil : avatar et badge, total d'Acts, onglets « Ma progression », « Mes projets soutenus » et « Classement », jauge de niveau et cartes de défis avec leur récompense en Acts.",
            caption: "Le profil : niveau, progression et défis à relever.",
          },
        ],
      },
    ],
  },
  en: {
    title: "Climate awareness through play",
    discipline: "0 → 1 product · Gamification",
    summary:
      "A mobile app where quizzes and engagement meet to raise climate awareness and support ecological projects for free, launched as an MVP and then built out in stages.",
    meta: {
      role: "Co-founder, UX/UI designer",
      context: "Entrepreneurial project, mobile app and web app",
      team: "Developers, project manager",
      tools: "Adobe XD, Illustrator",
      location: "Paris, remote",
    },
    sections: [
      {
        id: "context",
        heading: "Context",
        blocks: [
          {
            type: "text",
            body: [
              "Now You Know is an entrepreneurial project I co-founded: a mobile app to raise awareness of environmental issues and let people donate to ecological projects for free, through a virtual currency called Acts.",
            ],
          },
          {
            type: "list",
            items: [
              "User flows and information architecture for the app.",
              "Wireframes and UI for the alpha, beta, beta 2 and web app.",
              "Gamification mechanics: quizzes, collecting Acts, supported projects.",
              "Co-created the visual identity: logo and visual world.",
              "Worked with developers and the project manager to keep design and development aligned.",
            ],
          },
        ],
      },
      {
        id: "goal",
        heading: "Goal",
        blocks: [
          {
            type: "text",
            body: ["Create an engaging experience that encourages learning and action through gamification."],
          },
          {
            type: "statement",
            text: "How do we get people to come back to the app and take concrete action?",
          },
        ],
      },
      {
        id: "mvp",
        heading: "An MVP, then stages",
        blocks: [
          {
            type: "text",
            body: [
              "From the start, we had the full feature set in mind. But rather than launch everything at once, we built the app in stages, starting with a focused MVP.",
              "The goal: get feedback from real users quickly and spot what got in the way of the experience, in particular:",
            ],
          },
          {
            type: "list",
            items: ["the quality of the information;", "cognitive overload;", "how smoothly people could navigate."],
          },
        ],
      },
      {
        id: "sketches",
        heading: "From sketches to wireframes",
        blocks: [
          {
            type: "text",
            body: [
              "Before the mockups, the app first took shape on paper, then as low-fidelity wireframes.",
            ],
          },
          {
            type: "text",
            heading: "On paper",
            body: ["A map of the flows and gamification mechanics, then sketches of the key screens."],
          },
          {
            type: "image",
            ...sketches.appMap,
            alt: "Notebook page with a hand-drawn site map. From onboarding branch out the profile (progress, Acts earned, positive impact, trees planted, habits adopted), the five-level “Understand” path punctuated by quizzes, the Act button to activate every 24 hours, and the “Act” area (projects and NGOs, green jobs, tips to reduce one's footprint).",
            caption: "Map of the app and its gamification mechanics (in French).",
          },
          {
            type: "gallery",
            items: [
              {
                ...sketches.home,
                alt: "Paper wireframe of the home screen, split into two areas: “Understand” and “Act”. Logo explorations are drawn in the margin.",
                caption: "Home: understand or act.",
              },
              {
                ...sketches.understand,
                alt: "Paper wireframe of “Understand”: three themes, Energy, Air pollution, Society and economy, with the Act button and a progress bar. Bottom tabs are annotated past, present, future.",
                caption: "Understand: the themes of a level.",
              },
              {
                ...sketches.act,
                alt: "Paper wireframe of “Act”: two areas, “I support” and “I commit to the environment”.",
                caption: "Act: support or commit.",
              },
              {
                ...sketches.actProject,
                alt: "Paper wireframe of a project pop-up: name, description, “learn more” link, “donate” and “share” buttons. Note: closing it returns to the list.",
                caption: "Supporting a project: the pop-up.",
              },
              {
                ...sketches.actCommit,
                alt: "Paper wireframe of “I commit to the environment”: Jobs, I plant a tree, I adopt a habit for the planet. Note: the number of trees planted feeds into the profile.",
                caption: "Committing: jobs, trees, habits.",
              },
              {
                ...sketches.profile,
                alt: "Paper wireframe of the profile: avatar, level, completed levels, Acts, trees planted, associations supported, habits adopted and ecological footprint. Act-related settings are noted in the margin.",
                caption: "Profile: tracking one's impact.",
              },
            ],
          },
          {
            type: "text",
            heading: "Low-fidelity wireframes",
            body: [
              "The five navigation tabs mirror the five levels of the path: Stakes, Energy close-up and Emergency on the “Now You Know” side, Impact and Solutions on the “Now You Act” side.",
            ],
          },
          {
            type: "gallery",
            items: [
              { ...lofi.home, alt: "Low-fidelity wireframe of the home screen: two areas, “Now You Know” and “Now You Act”.", caption: "Home: Now You Know or Now You Act (in French)." },
              { ...lofi.energies, alt: "“Now You Know – Energy close-up” wireframe: fossil, renewable and nuclear energy, as expandable panels.", caption: "Energy close-up: three families of energy." },
              { ...lofi.energyCard, alt: "“Fossil energy” wireframe: an introduction, then a carousel of cards, here oil.", caption: "One card per energy source, in a carousel." },
              { ...lofi.impact, alt: "“Now You Act – Impact” wireframe: two areas, humanity's impact and my personal impact.", caption: "Impact: collective or personal." },
              { ...lofi.solutions, alt: "“Now You Act – Solutions” wireframe: two areas, “I support” and “I commit to the environment”.", caption: "Solutions: support or commit." },
              { ...lofi.projects, alt: "“I support a project” wireframe: a grid of four projects, each with an image and a name.", caption: "Choosing a project to support." },
              { ...lofi.project, alt: "Project pop-up wireframe: image, name, description, “learn more” link, “donate” and “share” buttons.", caption: "The project card: donate or share." },
              { ...lofi.habit, alt: "“I commit to adopting a habit” wireframe: a carousel of cards, here “Getting around”.", caption: "Adopting a habit, in a carousel." },
              { ...lofi.profile, alt: "Profile wireframe: avatar, five-step progress, Acts generated, invitations, carbon footprint and a planet impact gauge.", caption: "The profile: Acts, footprint, impact." },
            ],
          },
        ],
      },
      {
        id: "alpha",
        heading: "Alpha: understand and collect",
        blocks: [
          {
            type: "facts",
            items: [
              { value: "5", label: "levels in the learning path, each ending with a quiz" },
              { value: "24 h", label: "between two activations of the Acts counter" },
            ],
          },
          {
            type: "list",
            items: [
              {
                title: "Understand the climate situation",
                body: "A two-part learning path: “Now You Know”, in three levels (stakes, energy close-up, current situation), then “Now You Act”, in two levels (impact, solutions).",
              },
              {
                title: "Collect Acts",
                body: "By passing the quiz at the end of each level, and by activating the “Acts” button every 24 hours when opening the app.",
              },
            ],
          },
        ],
      },
      {
        id: "beta",
        heading: "Beta: broadening use",
        blocks: [
          {
            type: "list",
            items: [
              { title: "Understand", body: "One piece of information a day about protecting the environment." },
              { title: "Collect Acts", body: "By discovering ways to consume better and less, through a catalogue of alternatives, and by inviting friends." },
              { title: "Spend Acts", body: "To fund the community projects of your choice, or to support the app." },
            ],
          },
        ],
      },
      {
        id: "interface",
        heading: "The interface",
        blocks: [
          {
            type: "text",
            body: [
              "High-fidelity mockups of the app, in its four-tab version: free donation, alternatives catalogue, learning path and profile.",
            ],
          },
          {
            type: "text",
            heading: "Learning through play",
            body: ["A path in levels, quizzes, and one Act earned for every right answer."],
          },
          {
            type: "gallery",
            items: [
              {
                ...screens.path,
                alt: "Learning path screen: a series of levels numbered 1 to 11, from “Climate” to “Energies”, with three hearts at the top of the screen.",
                caption: "The path, level by level (in French).",
              },
              {
                ...screens.quiz,
                alt: "Climate quiz screen asking which of four elements is not part of what makes up the climate, with answer C selected.",
                caption: "A quiz question.",
              },
              {
                ...screens.quizFeedback,
                alt: "“Right answer! +1” screen with an explanation, a “next question +1 Act” button and a free donation suggestion.",
                caption: "A right answer earns one Act.",
              },
            ],
          },
          {
            type: "text",
            heading: "Acting without spending",
            body: ["Acts earned go to the project of your choice, and the profile brings together each person's impact."],
          },
          {
            type: "gallery",
            items: [
              {
                ...screens.donation,
                alt: "Community project page: a slider asking how many Acts to give, a “give my Acts” button, the description and the project's supporters.",
                caption: "Choosing how many Acts to give.",
              },
              {
                ...screens.thankYou,
                alt: "“Thank you for your support!” screen over a photo of a seal, with “watch a video +10” and “share the project” buttons.",
                caption: "The thank-you, and an invitation to share.",
              },
              {
                ...screens.profile,
                alt: "Profile screen: Acts generated, projects supported, Acts given, a “my impact” tab and the list of supported projects.",
                caption: "The profile, to track one's impact.",
              },
            ],
          },
        ],
      },
      {
        id: "beta-2",
        heading: "Beta 2: back to essentials",
        blocks: [
          {
            type: "text",
            body: ["A change of direction: the menu was reduced to three tabs, focused on learning and action."],
          },
          {
            type: "facts",
            items: [
              { value: "3", label: "tabs: Learn, Act, Profile" },
              { value: "15 s", label: "of partner video to support a project, for free" },
            ],
          },
          {
            type: "list",
            items: [
              { title: "Learn", body: "The quizzes." },
              { title: "Act", body: "Free donations to community projects: to support a project, the user watches 15 seconds of a video from one of the app's partners." },
              { title: "Profile", body: "Track your impact and complete mini-quests to earn Acts." },
            ],
          },
          {
            type: "text",
            heading: "Why the Acts counter went away",
            body: ["Present since the alpha, the Acts counter had become a point of friction:"],
          },
          {
            type: "steps",
            items: [
              "Users had to remember to reactivate it to generate Acts. Without it, browsing earned nothing: we were putting a mental load on them.",
              "That obligation was frustrating: the app was forcing people to do something.",
            ],
          },
          {
            type: "gallery",
            items: [
              {
                ...screens.actsToggle,
                alt: "Welcome message asking users to reactivate the Acts switch every 24 hours to keep generating money (Acts) even when the app is closed. An arrow points to the switch.",
                caption: "The switch to reactivate every 24 hours (in French).",
              },
              {
                ...screens.actsCounter,
                alt: "Message explaining the counter shown at the top of the screen, “10.0123”: the scrolling figures are the app's currency, Acts.",
                caption: "The counter, with its decimals.",
              },
            ],
          },
          {
            type: "text",
            body: [
              "How Acts were generated changed too. Before, the amount depended on the Act's rate: if an ad was worth €0.05 and 10,000 Acts were worth €0.01, watching it generated 50,000 Acts, shown with three decimal places. In beta 2, Acts are shown as whole numbers (for example, 1,947 Acts earned).",
            ],
          },
          { type: "draft", note: "Visuals: beta 2 screens, with the three-tab menu and the 15-second video donation." },
        ],
      },
      {
        id: "web-app",
        heading: "A web app for everyone",
        blocks: [
          {
            type: "text",
            body: [
              "We also designed a desktop web app: not everyone has a smartphone or feels comfortable using one, seniors for example.",
            ],
          },
          {
            type: "text",
            body: [
              "It carries over the app's donation flow: choose a project, watch a partner's short video to donate for free, then track your progress and challenges.",
            ],
          },
          {
            type: "image",
            ...webApp.home,
            alt: "Web app home page: a featured project with its funding gauge and a “free donation” button, then cards for projects being funded and projects already funded.",
            caption: "Home: the featured project, projects being funded and those already funded (in French).",
          },
          {
            type: "gallery",
            wide: true,
            items: [
              {
                ...webApp.project,
                alt: "Project page: photos, description and the association behind it, with a panel showing the number of donations, the funding gauge, a “free donation” button and an explanation of donating by watching a partner's video.",
                caption: "The project page explains free donation.",
              },
              {
                ...webApp.video,
                alt: "Dimmed screen with a play button asking the user to watch a partner's video to make a free donation, and a “start the video” button.",
                caption: "The donation: watching a partner's video.",
              },
            ],
          },
          {
            type: "image",
            ...webApp.profile,
            alt: "Profile page: avatar and badge, Acts total, “my progress”, “projects supported” and “leaderboard” tabs, a level gauge and challenge cards with their Act rewards.",
            caption: "The profile: level, progress and challenges.",
          },
        ],
      },
    ],
  },
};

export default project;
