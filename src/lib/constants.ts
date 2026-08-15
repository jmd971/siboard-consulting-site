export const SITE = {
  name: "Siboard Consulting",
  shortName: "Siboard",
  tagline: "On regarde comment vous travaillez vraiment. Ensuite on répare.",
  email: "contact@siboard-consulting.fr",
  phone: "+590 690 00 00 00",
  address: "73 rue Vatable, 97110 Pointe-à-Pitre, Guadeloupe",
  siret: "89080598900013",
  vat: "FR79890805989",
  url: "https://www.siboard-consulting.fr",
} as const;

export const NAV_LINKS = [
  { href: "/etat-des-lieux", label: "État des lieux" },
  { href: "/solutions", label: "Solutions" },
  { href: "/ventures", label: "Nos plateformes" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
] as const;

export const CTA_PRIMARY = {
  href: "/etat-des-lieux",
  label: "Demander un état des lieux",
} as const;

export const AUDIT_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_AUDIT_WEBHOOK_URL ??
  "https://link.siboard-consulting.fr/webhook/audit-gratuit";

/* ------------------------------------------------------------------ */
/* Étape 1 — L'État des lieux (produit d'entrée, payant)              */
/* ------------------------------------------------------------------ */

export const ETAT_DES_LIEUX = {
  eyebrow: "Étape 1",
  name: "L’État des lieux",
  title: "On regarde comment vous travaillez vraiment.",
  intro:
    "Nous suivons le parcours réel de votre activité, depuis le moment où un client vous découvre jusqu’à la facture encaissée. Nous ouvrons ce que vos outils contiennent déjà : votre historique de ventes, vos délais de réponse, vos devis restés sans suite, votre base clients.",
  chercheTitle: "Nous cherchons trois choses",
  cherche: ["Où ça fuit.", "Où ça attend.", "Où quelqu’un recopie de l’information d’un endroit à un autre."],
  regardeTitle: "Ce que nous regardons",
  regarde: [
    "Comment vos prospects arrivent, et ce qu’ils deviennent.",
    "Le temps qui s’écoule entre leur première demande et votre réponse.",
    "Ce que vos devis deviennent quand personne ne relance.",
    "Ce que votre base clients contient réellement, et ce qu’elle vaut.",
    "Les tâches que quelqu’un refait à la main chaque semaine.",
    "Les chiffres dont vous avez besoin pour décider, et le temps qu’il vous faut pour les obtenir.",
  ],
  livrableTitle: "Ce que vous recevez",
  livrable:
    "Un document qui tient debout tout seul. Il contient la carte de votre parcours client avec les points de rupture, le chiffrage de chaque fuite en euros et en heures, l’ordre dans lequel les traiter, et ce que nous vous déconseillons de faire.",
  livrablePrecision:
    "Les montants sont calculés à partir de vos données. Pas de moyennes de marché, pas de projections empruntées à d’autres entreprises.",
  delai:
    "De deux à quatre semaines selon le périmètre : un entretien de cadrage, une collecte de données, un rendez-vous de restitution.",
  tarifs: [
    { perimetre: "TPE, un site, jusqu’à 10 personnes", prix: "1 900 €" },
    { perimetre: "PME, plusieurs services ou plusieurs sites", prix: "3 900 €" },
    { perimetre: "Groupe ou collectivité", prix: "à partir de 6 500 €" },
  ],
  propriete:
    "Le document vous appartient. Vous êtes libre de le faire exécuter par qui vous voulez.",
  garantie:
    "Si le montant des fuites identifiées ne dépasse pas le prix du diagnostic, nous vous le remboursons.",
} as const;

/* ------------------------------------------------------------------ */
/* Étape 2 — Le Socle et les cinq modules                             */
/* ------------------------------------------------------------------ */

export const SOCLE = {
  name: "Le Socle Siboard",
  intro:
    "Tout ce que nous installons repose sur une même fondation, que nous avons construite et qui nous appartient.",
  contenu: [
    "Votre base de données cloisonnée",
    "La connexion à vos outils existants",
    "Le moteur qui produit vos documents",
    "L’envoi par email, SMS et WhatsApp",
    "L’analyse de votre historique de ventes",
    "Le journal de ce qui a été fait, par qui et quand",
  ],
  benefice:
    "Le premier système coûte son prix, les suivants coûtent moins cher parce que la fondation est déjà posée. Et le jour où vous voulez quelque chose qui n’existe dans aucun logiciel du marché, nous ne repartons pas de zéro.",
  prix: "2 900 €",
  mensuel: "190 € / mois",
  note: "Il ne se vend jamais seul. Il vient toujours avec au moins un système.",
} as const;

export type Module = {
  slug: string;
  name: string;
  subtitle: string;
  prescription: string;
  installe: string;
  prix: string;
  prixOption?: string;
  mensuel: string;
  preuve?: string;
};

export const MODULES: Module[] = [
  {
    slug: "accueil",
    name: "L’Accueil",
    subtitle: "Répondre en une minute, qualifier, poser le rendez-vous.",
    prescription:
      "Vos demandes arrivent le soir et le week-end. Vous répondez en deux jours au lieu de deux heures. Et vous passez vingt minutes à poser les mêmes questions de base à chaque prospect.",
    installe:
      "Un assistant qui répond en moins d’une minute sur votre site, sur WhatsApp ou au téléphone. Il pose vos questions de qualification, écarte ce qui n’est pas pour vous, propose un créneau dans votre agenda, et prévient la bonne personne avec tout le contexte déjà réuni.",
    prix: "2 500 €",
    prixOption: "6 500 € avec l’agent vocal qui décroche au téléphone",
    mensuel: "+ 90 € / mois",
    preuve:
      "Évolutia Formation : assistant de qualification des candidats et gestion des rendez-vous automatisée. DFP France : prise de rendez-vous entièrement automatisée avec assistant WhatsApp.",
  },
  {
    slug: "bureau",
    name: "Le Bureau",
    subtitle: "Les documents traités, classés et tracés sans ressaisie.",
    prescription:
      "Quelqu’un chez vous passe une partie de sa semaine à ouvrir un document, lire, recopier ailleurs et classer. Ou vous courez après les pièces que vos clients doivent vous fournir.",
    installe:
      "Le circuit complet du document, de son arrivée à son classement. La collecte auprès de vos clients avec les relances automatiques, la lecture et l’extraction des informations, le contrôle de ce qui manque, la production du document final déjà mis en forme, et l’archivage avec la trace de qui a fait quoi.",
    prix: "à partir de 4 900 €",
    mensuel: "+ 90 € / mois",
    preuve:
      "Un cabinet d’expertise immobilière : le circuit papier des lettres de mission remplacé par une saisie sur tablette avec signature à l’écran, document généré, archivé et horodaté. Axecime : la collecte d’un dossier de 78 pièces réparties en 11 catégories, transformée en portail où le client dépose et voit ce qu’il lui reste à fournir.",
  },
  {
    slug: "fil",
    name: "Le Fil",
    subtitle: "Garder le lien jusqu’à la signature.",
    prescription:
      "Vos devis restent sans réponse. Vous relancez une fois puis vous passez à autre chose. Et vous découvrez six semaines plus tard que le client a signé ailleurs.",
    installe:
      "Une séquence déclenchée par un événement précis, comme un devis envoyé ou un formulaire rempli. Quatre à six messages écrits avec vos mots, répartis sur trois semaines, sur le canal où votre client répond vraiment. La séquence s’arrête net dès qu’il réagit, et vous êtes prévenu avec tout l’historique.",
    prix: "1 900 €",
    prixOption:
      "Option La Preuve, la même mécanique appliquée aux avis Google, 900 €",
    mensuel: "+ 90 € / mois",
  },
  {
    slug: "retour",
    name: "Le Retour",
    subtitle: "Faire revenir les clients qui vous connaissent déjà.",
    prescription:
      "Votre base clients dort. Vous payez de la publicité pour trouver des inconnus alors que d’anciens clients ne sont plus jamais contactés. Et vous ne sauriez pas dire qui sont vos meilleurs clients.",
    installe:
      "D’abord l’analyse de votre historique. Nous classons vos clients par date du dernier achat, par fréquence et par montant, et nous identifions nommément ceux qui dormaient et ce qu’ils représentent. Ensuite la campagne de réveil, avec un message différent selon le profil.",
    prix: "1 900 € l’analyse seule",
    prixOption: "3 500 € avec la campagne installée",
    mensuel: "+ 90 € / mois",
    preuve:
      "Un institut de beauté guadeloupéen : l’analyse d’une année de caisse a montré que 36 clientes faisaient 80 % du chiffre, et a identifié nommément 17 clientes dormantes représentant 3 029 € à récupérer.",
  },
  {
    slug: "point",
    name: "Le Point",
    subtitle: "Vos chiffres chaque matin, là où vous travaillez déjà.",
    prescription:
      "Il faut ouvrir quatre outils pour savoir où vous en êtes. L’information vous arrive avec deux jours de retard. Et personne n’ouvre le tableau de bord qu’on vous avait installé.",
    installe:
      "Un système qui va chercher vos chiffres tout seul, dans votre logiciel de vente, votre comptabilité ou votre outil de gestion, puis vous envoie ce qui compte à l’endroit où vous regardez déjà. Les chiffres de la veille le matin, un récapitulatif chaque semaine, une alerte quand quelque chose sort de l’ordinaire. Aucun nouvel outil à apprendre.",
    prix: "3 500 €",
    prixOption:
      "7 500 € avec le commentaire rédigé automatiquement, qui explique le chiffre au lieu de l’afficher",
    mensuel: "+ 90 € / mois",
  },
];

export const LOGICIEL_METIER = {
  name: "Le logiciel métier",
  intro:
    "Il arrive que le process d’une entreprise ne rentre dans aucun outil du marché. Dans ce cas nous construisons le logiciel qui lui correspond, sur le même socle.",
  preuve:
    "Nous l’avons fait pour un cabinet d’expertise immobilière, pour un établissement hospitalier, et pour trois plateformes que nous éditons nous-mêmes.",
  prix: "à partir de 15 000 €",
} as const;

export const FORMULE_COMPLETE = {
  title: "Le socle et trois systèmes, installés en 90 jours",
  prix: "11 900 €",
  mensuel: "460 € / mois",
} as const;

/* ------------------------------------------------------------------ */
/* Clients                                                             */
/* ------------------------------------------------------------------ */

/* Chiffres du portefeuille, releves le 14/08/2026 dans le gestionnaire
   de fiches Google (business.google.com/locations) : 15 fiches gerees,
   dont celle de Siboard, donc 14 etablissements clients.
   NE PAS inventer ces nombres : ils se recomptent dans le gestionnaire. */
export const PORTEFEUILLE = {
  etablissements: 14,
  secteurs: 9,
  territoires: 5,
  territoiresDetail: "Guadeloupe, Martinique, Guyane, \u00cele-de-France, Sarthe",
  anciennete: "5 ans",
} as const;

export const SECTEURS_ACCOMPAGNES = [
  "Sant\u00e9 et bien-\u00eatre",
  "Formation",
  "Assurance et courtage",
  "Ressources humaines",
  "Informatique",
  "B\u00e2timent",
  "Artisanat",
  "Restauration",
  "Commerce et mode",
] as const;

export type Client = {
  slug: string;
  name: string;
  initials: string;
  sector: string;
  location: string;
  result: string;
  detail: string;
  href?: string;
  featured?: boolean;
};

export const CLIENTS: Client[] = [
  {
    slug: "odyssee-by-bea",
    name: "Odyssée by Béa",
    initials: "OB",
    sector: "Boutique mode & accessoires, showroom privé",
    location: "Baie-Mahault, Guadeloupe",
    result: "Zéro présence digitale → 1ère position Google",
    detail:
      "Création complète de A à Z : site web + Google Business Profile + prise de RDV en ligne + lien de paiement Stripe + stratégie avis Google (QR code + relances ×2).",
    href: "https://odysseebybea.fr",
    featured: true,
  },
  {
    slug: "sacodif",
    name: "Sacodif",
    initials: "SC",
    sector: "Expert-comptable",
    location: "Créteil, Île-de-France",
    result: "3ème page Google → 3ème position « expert comptable Créteil »",
    detail: "Repositionnement SEO — refonte du contenu et de la structure du site.",
    href: "https://sacodif.fr",
    featured: true,
  },
  {
    slug: "evolutia-formation",
    name: "Évolutia Formation",
    initials: "EF",
    sector: "Formation sur mesure concours territoriaux",
    location: "Guadeloupe",
    result: "1ère position Google · « formations concours publiques Guadeloupe »",
    detail:
      "Environnement digital complet : site web + SEO ciblé + chatbot de qualification des candidats + gestion de rendez-vous automatisée.",
    href: "https://evolutiaformation.fr",
    featured: true,
  },
  {
    slug: "dfp-france",
    name: "DFP France",
    initials: "DFP",
    sector: "Films techniques pour vitrages (solaire, sécurité, anti-graffiti)",
    location: "Île-de-France",
    result: "Agenda en ligne opérationnel, flux de RDV automatisé",
    detail: "Création complète de A à Z : site web + système de prise de rendez-vous intégré.",
    href: "https://www.dfpfrance.fr",
    featured: true,
  },
  {
    slug: "axecime",
    name: "Axecime",
    initials: "AX",
    sector: "Courtage financier (prêts immobiliers, assurance)",
    location: "Les Abymes, Guadeloupe",
    result: "Processus de collecte de dossiers entièrement automatisé, zéro relance manuelle",
    detail:
      "Application métier sur mesure : gestion et automatisation des données clients, workflow de récupération des dossiers incomplets, relances automatiques + SEO + Google Business Profile.",
    href: "https://axecime.com",
    featured: true,
  },
  {
    slug: "fast-computer-company",
    name: "Fast Computer Company",
    initials: "FCC",
    sector: "Magasin informatique & réparation",
    location: "Baie-Mahault, Guadeloupe",
    result: "Présence digitale complète, acquisition et support client automatisés 24h/24",
    detail:
      "Création complète de A à Z : site web + Google Business Profile + chatbot support et acquisition client + automatisation des prises de RDV.",
    href: "https://fcc-gp.com",
    featured: true,
  },
  {
    slug: "magik33-studio",
    name: "Magik33 Studio",
    initials: "M33",
    sector: "Studio d'enregistrement & production musicale",
    location: "Petit-Bourg, Guadeloupe",
    result: "Présence digitale et visibilité Google activées",
    detail:
      "Création de site web + Google Business Profile + stratégie avis clients pour un studio de référence en Guadeloupe.",
    href: "https://magik33studio.com",
    featured: false,
  },
  {
    slug: "pole-sante-sud",
    name: "Pôle Santé Sud",
    initials: "PSS",
    sector: "Centre du sommeil & santé pluridisciplinaire",
    location: "Guadeloupe",
    result: "Visibilité locale et prise de RDV en ligne opérationnels",
    detail:
      "Optimisation Google Business Profile + stratégie avis + automatisation de la prise de rendez-vous.",
    featured: false,
  },
  {
    slug: "bateau-alize",
    name: "Bateau Alizé",
    initials: "BA",
    sector: "Cabaret flottant · Événementiel B2B",
    location: "Paris 12e",
    result: "Mission Mistinguett 90J — offre Green Séminaire B2B activée",
    detail: "Audit stratégique + Mission Croissance 90J done for you.",
    featured: false,
  },
];

export const PROOF_STATS = [
  {
    label: "Odyssée by Béa",
    value: "1ère",
    detail: "position Google · « boutique de femme Guadeloupe »",
  },
  {
    label: "Évolutia Formation",
    value: "1ère",
    detail: "position Google · « formations concours publiques Guadeloupe »",
  },
  {
    label: "Sacodif",
    value: "Page 3 → P1",
    detail: "« expert comptable Créteil » · Île-de-France",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Nos plateformes (ventures)                                          */
/* ------------------------------------------------------------------ */

export const ECOSYSTEME = [
  {
    name: "AdamBoards",
    description:
      "Le pilotage d’une TPE de bout en bout : les chiffres, l’analyse des ventes, les actions à mener, et les campagnes qui les exécutent.",
    note: "Plateforme et application construites par Siboard.",
    domain: "adamboards.fr",
    href: "https://adamboards.fr",
    partenaire: "Co-édité avec un expert-comptable",
    role:
      "Import des écritures comptables, compte de résultat, budget, trésorerie et rapprochement bancaire. Analyse des ventes client par client et produit par produit. Rapports de préconisation qui disent quelle action mener et sur qui, puis mise en place des campagnes marketing qui l’exécutent.",
    prouve:
      "Que nous savons relier une donnée comptable à une action commerciale chiffrée et aller jusqu’à son exécution, avec une couche d’intelligence artificielle encadrée par des règles de calcul déterministes.",
    nourrit: ["Le Retour", "Le Point"],
  },
  {
    name: "TransmiExpert",
    description:
      "Un livret patrimonial numérique pour les familles, et une application d’accompagnement à l’expertise immobilière.",
    note: "Site web, livret et application construits par Siboard.",
    domain: "transmiexpert.fr",
    href: "https://www.transmiexpert.fr",
    partenaire: "Co-édité avec un expert évaluateur immobilier",
    role:
      "Une famille remplit son patrimoine en ligne, et le livret imprimable de 48 pages se génère tout seul, personnalisé et prêt à être remis. L’application d’expertise, elle, remplace le circuit papier de la visite : saisie sur tablette, signature à l’écran, rapport produit et archivé avec sa piste d’audit.",
    prouve:
      "Que nous savons transformer une saisie en document professionnel complet sans intervention humaine, et remplacer un circuit papier de terrain par un circuit tracé.",
    nourrit: ["Le Bureau"],
  },
  {
    name: "SecureXia",
    description:
      "Service managé de mise en conformité incendie pour les ERP en Guadeloupe — visite terrain + plateforme de suivi.",
    note: "Plateforme client et système de documentation construits par Siboard.",
    domain: "securexia.fr",
    href: "https://securexia.fr",
    partenaire: "Co-édité avec un consultant en conformité ERP",
    role:
      "Le suivi de la conformité d’un établissement recevant du public, de la visite terrain au dossier remis à la commission de sécurité.",
    prouve:
      "Que nous savons modéliser une réglementation et la rendre utilisable par un exploitant sur le terrain.",
    nourrit: ["Le Bureau"],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Mission 90J                                                         */
/* ------------------------------------------------------------------ */

export const MISSION_90J_DELIVERABLES = [
  {
    title: "Brief web + pilotage prestataire",
    description: "Une page dédiée à votre produit phare, conçue pour convertir.",
  },
  {
    title: "LinkedIn management",
    description: "Optimisation de votre page + 1 post par semaine rédigé et validé.",
  },
  {
    title: "Prospection LinkedIn ciblée",
    description: "40 messages par semaine adressés à vos décideurs (DRH, RSE, Achats…).",
  },
  {
    title: "Tableau de bord commercial",
    description: "Pipeline partagé en temps réel, vous voyez chaque RDV qualifié arriver.",
  },
  {
    title: "Réactivation base clients",
    description: "Campagne dédiée pour rouvrir des conversations endormies depuis des mois.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Legacy — conservés le temps de la bascule des anciennes pages       */
/* ------------------------------------------------------------------ */

export const BRIQUES_AUTOMATISATION = [
  {
    title: "Prise de RDV automatisée",
    description:
      "Confirmations, rappels et anti no-show. Votre agenda se remplit pendant que vous travaillez.",
  },
  {
    title: "Collecte d'avis Google",
    description:
      "Chaque client satisfait reçoit la bonne demande au bon moment. Votre réputation locale grandit toute seule.",
  },
  {
    title: "Réactivation clients inactifs",
    description:
      "Vos anciens clients reviennent grâce à des séquences SMS et WhatsApp personnalisées.",
  },
  {
    title: "Agent IA conversationnel",
    description:
      "Un assistant qui répond, qualifie et oriente vos prospects 24h/24, dans votre ton de marque.",
  },
] as const;

export const SOLUTIONS_BRIQUES_AUTO = [
  {
    title: "Agenda rempli automatiquement",
    description:
      "Confirmations, rappels et anti no-show. Votre planning se remplit pendant que vous travaillez.",
  },
  {
    title: "Collecte d'avis Google",
    description:
      "QR code en point de vente, email post-prestation automatique, relances J+3 et J+7. Votre réputation locale grandit sans y penser.",
  },
  {
    title: "Réactivation clients inactifs",
    description:
      "Vos anciens clients reviennent grâce à des séquences personnalisées par WhatsApp et SMS.",
  },
  {
    title: "Synchronisation multi-outils",
    description:
      "Vos données circulent entre vos applications sans double saisie ni intervention manuelle.",
  },
] as const;

export const SOLUTIONS_BRIQUES_IA = [
  {
    title: "Agent conversationnel 24h/24",
    description:
      "Il répond à vos prospects, qualifie leurs besoins et les oriente — même quand vous dormez.",
  },
  {
    title: "Agent vocal qui décroche à votre place",
    description:
      "Filtre les appels entrants, prend les RDV et transmet les demandes urgentes. Aucune intervention humaine.",
  },
  {
    title: "Assistant métier sur mesure",
    description:
      "Entraîné sur votre contexte et vos documents — pas un chatbot générique.",
  },
  {
    title: "Intégrations avancées sur mesure",
    description:
      "Connexions API, bases de données, outils métier — on bâtit ce que les solutions génériques ne peuvent pas faire.",
  },
] as const;

export const SECTEURS = [
  "Commerce / Retail",
  "Services",
  "Restauration",
  "Artisanat",
  "BTP",
  "Événementiel",
  "Santé / Bien-être",
  "Immobilier / Courtage",
  "Collectivité / Secteur public",
  "Autre",
] as const;

export const PROBLEMES = [
  "Je perds des prospects / leads",
  "Trop de no-shows sur mes RDV",
  "Mes clients ne laissent pas d'avis",
  "Je veux automatiser des tâches répétitives",
  "On ressaisit trop d'informations à la main",
  "Ma base clients dort",
  "J'ai une offre B2B à développer",
  "Je veux créer ou refaire mon site web",
  "Autre",
] as const;
