// src/components/faq/FaqSolutions.tsx
// À intégrer en bas de la page /solutions, avant le CTA final

export const faqSolutions = [
  {
    question: "Combien de temps faut-il pour voir les premiers résultats ?",
    answer:
      "Pour les automatisations simples (prise de RDV, collecte d'avis), les premiers résultats sont visibles dès la première semaine de déploiement. Pour un accompagnement complet avec agents IA, comptez 3 à 4 semaines entre l'audit et la mise en production. On priorise toujours ce qui rapporte le plus vite.",
  },
  {
    question: "Faut-il changer tous ses outils existants ?",
    answer:
      "Non. On part de ce que vous avez déjà et on comble ce qui manque. Notre approche est additive : on n'impose pas de stack technique, on s'adapte à votre environnement. Si un outil existant fait le travail, on le conserve. On ne remplace que ce qui bloque.",
  },
  {
    question: "Quelle est la différence entre automatisation et agent IA ?",
    answer:
      "L'automatisation exécute des règles fixes : si X alors Y. Elle est idéale pour les tâches répétitives et prévisibles (envoyer un rappel de RDV, collecter un avis Google). Un agent IA comprend le contexte, prend des décisions et s'adapte : il peut qualifier un prospect, répondre à une question complexe ou gérer un appel entrant. Les deux sont complémentaires — on commence souvent par l'automatisation, puis on ajoute les agents quand la base est saine.",
  },
  {
    question: "Est-ce que ça fonctionne pour n'importe quel secteur ?",
    answer:
      "Oui. Nous avons déployé des solutions pour une boutique de mode, un magasin informatique, un cabinet d'expert-comptable, un courtier financier et des artisans. La méthode s'adapte au process du client, pas l'inverse. L'audit initial permet de valider ce qui est pertinent dans votre contexte spécifique.",
  },
  {
    question: "Vous ne faites que du marketing et de l'acquisition client ?",
    answer:
      "Non — et c'est précisément notre différence. L'acquisition ne sert à rien si l'interne fuit : devis jamais relancés, factures impayées non suivies, planning sur un fichier Excel partagé, chiffrages refaits de zéro à chaque demande. Nous automatisons les deux faces de votre activité : faire entrer les clients, et faire tourner l'entreprise. La plupart de nos missions commencent d'ailleurs par une douleur interne.",
  },
  {
    question: "Quel est le budget minimum pour démarrer ?",
    answer:
      "Le diagnostic d'efficacité est à 350 € HT — analyse complète de vos flux, chiffrage de vos fuites de temps et d'argent, plan d'action priorisé. Il est déduit du montant de la mission si vous nous confiez le déploiement. La construction de votre système se chiffre ensuite selon le périmètre : de 1 500 € HT pour 2-3 briques d'automatisation à 6 000 € HT et plus pour une infrastructure complète avec agents IA et développements sur mesure. Chaque proposition est chiffrée après le diagnostic — jamais avant.",
  },
  {
    question: "Qu'est-ce qui est inclus après le déploiement ?",
    answer:
      "Votre système est vivant : il évolue avec votre activité. L'abonnement Système (à partir de 197 € HT/mois) comprend l'hébergement et la supervision de vos automatisations, les évolutions et ajouts de briques, le rapport mensuel d'activité (ce que le système a capté, relancé, encaissé), et le support prioritaire. Vous pilotez au quotidien — nous faisons tourner et évoluer l'infrastructure.",
  },
];

// Schema JSON-LD FAQPage pour /solutions
export const faqSolutionsSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSolutions.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

// HowTo Schema pour la méthode Audit → Déploiement → Autonomie
export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment automatiser son activité avec Siboard Consulting",
  description:
    "Méthode en 3 étapes pour automatiser les process d'une TPE/PME et déployer des agents IA sur mesure.",
  step: [
    {
      "@type": "HowToStep",
      name: "Audit",
      text: "On cartographie vos flux actuels : où entrent les prospects, où se perdent les RDV, où part votre temps. On priorise ce qui rapporte le plus vite.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Déploiement",
      text: "On construit les briques manquantes — automatisation ou agents IA — adaptées à votre stack et à votre activité. Pas de package générique.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Pilotage",
      text: "On vous forme à l'usage quotidien : vous gardez la main sur votre activité, vos données, vos décisions. Nous, on fait vivre l'infrastructure : supervision, évolutions, nouvelles briques au fil de vos besoins. Vous pilotez le business, le système travaille.",
      position: 3,
    },
  ],
};
