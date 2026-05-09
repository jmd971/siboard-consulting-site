// src/components/faq/FaqMission90J.tsx
// À intégrer en bas de la page /mission-90j, avant le CTA final

export const faqMission90J = [
  {
    question: "Qu'est-ce qu'un RDV qualifié ?",
    answer:
      "Un RDV qualifié est un rendez-vous effectivement tenu avec un décideur (dirigeant, DRH, responsable achats ou RSE selon votre cible), ayant un projet réel en cours, dans une entreprise correspondant à votre profil cible. Chaque RDV qualifié est tracé dans le tableau de bord partagé et lié à une fiche prospect complète. Un simple appel entrant ou une prise de contact sans suite ne compte pas.",
  },
  {
    question: "Que se passe-t-il si les 10 RDV ne sont pas atteints en 90 jours ?",
    answer:
      "La mission se prolonge sans facturation complémentaire jusqu'à l'atteinte de l'objectif. Cette garantie est contractualisée dès la signature. C'est notre engagement : on s'arrête quand vous avez vos résultats, pas quand le calendrier se termine.",
  },
  {
    question: "Est-ce que la Mission 90J fonctionne dans tous les secteurs ?",
    answer:
      "La Mission 90J est conçue pour les prestataires de services B2B avec une offre différenciante à activer. Elle est particulièrement efficace dans l'événementiel, les services aux entreprises, la formation professionnelle, le conseil et les métiers de l'accompagnement. Un audit préalable permet de valider l'adéquation avant tout engagement.",
  },
  {
    question: "Quelle est la différence avec une agence de prospection classique ?",
    answer:
      "Une agence de prospection envoie des messages en masse et vous facture au volume. Nous, on commence par identifier votre produit le plus puissant, on construit la page dédiée, on rédige le narratif B2B, on gère le LinkedIn — et on garantit un résultat en RDV, pas en envois. C'est une mission de croissance commerciale complète, pas de la sous-traitance de cold outreach.",
  },
  {
    question: "Combien de temps dois-je y consacrer de mon côté ?",
    answer:
      "Peu. Votre rôle est de valider : les messages avant envoi, les rendez-vous entrants et les comptes-rendus mensuels. Comptez 1 à 2 heures par semaine maximum. Nous gérons l'intégralité de l'exécution — c'est le sens de done for you.",
  },
  {
    question: "Peut-on travailler ensemble si je suis en Guadeloupe ?",
    answer:
      "Oui. La Mission 90J fonctionne à distance — toute la gestion est digitale. Pour les clients en Guadeloupe, Martinique ou Guyane, nous pouvons cibler des prospects locaux (collectivités, grandes entreprises régionales) ou métropolitains selon votre offre.",
  },
];

// Schema JSON-LD FAQPage pour /mission-90j
export const faqMission90JSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqMission90J.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};
