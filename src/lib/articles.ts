/* Contenu du blog.
   Cible : le cluster « formation IA entreprise », seul endroit ou ce que
   Siboard vend et ce que les gens cherchent coincident vraiment (releve
   d'autocompletion du 15/08/2026).
   Regle d'ecriture : reponse directe en tete de chaque article, pour le
   referencement classique comme pour les moteurs IA. Pas de tiret
   cadratin, pas d'enumeration systematique par trois. */

export type Section = { titre: string; paragraphes: string[]; liste?: string[] };
export type Article = {
  slug: string;
  titre: string;
  titreSeo: string;
  chapo: string;
  description: string;
  date: string;
  dateLisible: string;
  lecture: string;
  reponseDirecte: string;
  sections: Section[];
  faq: { q: string; r: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "formation-ia-intra-entreprise",
    titreSeo:
      "Formation IA intra-entreprise : le guide",
    titre: "Formation IA intra-entreprise : ce qu’il faut savoir avant de la commander",
    chapo:
      "Une journée en intra ne vaut pas mieux qu’un stage en inter par principe. Elle vaut mieux quand elle part de vos dossiers. Voici comment le vérifier avant de signer.",
    description:
      "Intra ou inter, combien de participants, ce qu’une journée produit vraiment, et les six questions à poser avant de commander.",
    date: "2026-08-16",
    dateLisible: "16 août 2026",
    lecture: "7 min",
    reponseDirecte:
      "Une formation IA intra-entreprise se déroule dans vos locaux, pour vos seuls salariés, sur vos propres dossiers. Elle coûte plus cher qu’un stage inter par participant dès qu’on descend sous six personnes, et elle devient nettement plus rentable au-delà. Sa vraie valeur ne tient pas au format mais à une chose : que le formateur travaille sur vos documents réels et non sur un support générique.",
    sections: [
      {
        titre: "La différence qui compte n’est pas intra contre inter",
        paragraphes: [
          "En inter-entreprises, vos salariés rejoignent un groupe venu d’ailleurs, dans une salle louée, sur un programme fixé à l’avance. En intra, le formateur vient chez vous et ne forme que vos équipes.",
          "Beaucoup de dirigeants choisissent l’intra pour la logistique, parce que personne ne se déplace. C’est un mauvais critère. Le vrai avantage de l’intra, c’est que le formateur peut ouvrir vos vrais documents : votre modèle de devis, vos comptes rendus de chantier, vos réponses aux appels d’offres, vos courriers de relance.",
          "Un stage en inter apprend à écrire une bonne demande à un assistant. Une journée en intra bien menée produit, à la fin de l’après-midi, une demande qui fonctionne sur le document que votre assistante remplit tous les lundis. La différence n’est pas pédagogique, elle est opérationnelle.",
        ],
      },
      {
        titre: "Combien de participants, réellement",
        paragraphes: [
          "Au-delà de huit personnes, un formateur ne peut plus passer derrière chaque poste. La journée bascule alors en conférence, et une conférence sur l’intelligence artificielle ne change rien au lundi suivant.",
          "En dessous de quatre, le coût par personne devient difficile à défendre et la dynamique de groupe disparaît, alors que c’est souvent un participant qui débloque les autres en montrant un usage auquel personne n’avait pensé.",
          "La zone utile se situe entre six et huit. Si un prestataire vous propose de former vingt personnes en une journée, demandez-lui comment il compte s’y prendre pour la mise en pratique. La réponse vous dira tout.",
        ],
      },
      {
        titre: "Ce qu’une journée peut produire, et ce qu’elle ne produira pas",
        paragraphes: [
          "Elle produit des usages immédiats sur des tâches d’écriture et de synthèse. Rédiger un compte rendu à partir de notes, reformuler un courrier difficile, préparer une réunion, traduire, résumer un document de trente pages. Ce sont des gains réels et vérifiables dès la semaine suivante.",
          "Elle produit aussi une chose que les dirigeants sous-estiment : une règle commune sur ce qui ne doit jamais sortir de l’entreprise. Sans cette règle, vos salariés utilisent déjà ces outils, mais sans cadre, avec vos données dedans.",
          "Elle ne produira pas d’automatisation. Une automatisation est un système qui tourne sans personne, et cela demande de la construction, pas de la formation. Un prestataire qui vous promet les deux dans la même journée vend l’un des deux en trompe-l’œil.",
        ],
      },
      {
        titre: "Les six questions à poser avant de signer",
        paragraphes: [
          "Elles filtrent en dix minutes ceux qui déroulent un support acheté de ceux qui vont travailler sur votre métier.",
        ],
        liste: [
          "Sur quels documents à nous allez-vous travailler l’après-midi ?",
          "Que recevons-nous avant la journée pour préparer, et qui doit le remplir ?",
          "Combien de participants au maximum, et pourquoi ce nombre ?",
          "Qu’est-ce que mes salariés savent faire à 17 h qu’ils ne savaient pas faire à 9 h ?",
          "Que se passe-t-il si personne ne s’en sert trois semaines plus tard ?",
          "Qu’est-ce que je récupère par écrit à la fin de la journée ?",
        ],
      },
      {
        titre: "Le signe qu’une formation a servi",
        paragraphes: [
          "Ce n’est pas la satisfaction en fin de journée, qui est toujours bonne. C’est ce qui reste trente jours après.",
          "Le meilleur indicateur que nous connaissions est une liste écrite, produite par les participants eux-mêmes, des tâches qu’ils refont à l’identique chaque semaine, classées et chiffrées en heures. Cette liste survit à l’enthousiasme. Elle vous sert même si vous ne faites rien d’autre, et elle appartient à l’entreprise, pas au formateur.",
          "Si votre prestataire ne prévoit rien d’écrit, la journée sera agréable et vous n’en verrez pas la trace au trimestre suivant.",
        ],
      },
    ],
    faq: [
      {
        q: "Une formation IA intra-entreprise est-elle finançable par un OPCO ?",
        r: "Seulement si le prestataire est un organisme de formation certifié Qualiopi. Beaucoup de consultants qui animent très bien ne le sont pas. Posez la question dès le premier échange : la réponse change complètement le budget et le circuit de décision.",
      },
      {
        q: "Faut-il former tout le monde ou seulement certains services ?",
        r: "Un groupe mixte fonctionne mieux qu’un groupe d’un seul service. L’administratif et le commercial n’ont pas les mêmes tâches, et c’est justement en s’écoutant qu’ils repèrent des usages transposables. Le prérequis n’est pas le service, c’est de venir avec ses vrais dossiers.",
      },
      {
        q: "Combien de temps avant de voir un effet ?",
        r: "Sur les tâches d’écriture, dès la semaine suivante si les participants ont travaillé sur leurs propres documents pendant la journée. Sur tout ce qui demande une automatisation, il ne se passera rien sans un chantier séparé.",
      },
    ],
  },
  {
    slug: "vos-equipes-nutilisent-pas-lia",
    titreSeo:
      "Pourquoi vos équipes n’utilisent pas l’IA",
    titre: "Vos équipes n’utilisent pas l’IA. Voici les quatre vraies raisons.",
    chapo:
      "Ce n’est presque jamais un problème de génération ni de compétence. C’est un problème de permission, de règle et de temps alloué.",
    description:
      "Les quatre blocages réels observés en entreprise : par où commencer, oser se tromper, la règle sur les données, le temps alloué.",
    date: "2026-08-16",
    dateLisible: "16 août 2026",
    lecture: "6 min",
    reponseDirecte:
      "Quand une équipe n’utilise pas l’intelligence artificielle, c’est rarement par incompétence ou par âge. Quatre blocages reviennent systématiquement : personne ne sait par quelle tâche commencer, personne n’ose se tromper devant les autres, aucune règle ne dit ce qu’on a le droit de mettre dedans, et aucun temps n’est officiellement alloué pour apprendre. Les quatre relèvent du dirigeant, pas du salarié.",
    sections: [
      {
        titre: "Premier blocage : personne ne sait par quelle tâche commencer",
        paragraphes: [
          "Vos salariés ont vu des démonstrations spectaculaires et n’en tirent rien, parce que la distance est trop grande entre une vidéo impressionnante et le devis qu’ils doivent sortir cet après-midi.",
          "Ce qui débloque n’est pas une présentation de plus, c’est de nommer une tâche précise que quelqu’un fait vraiment. Pas « gagner du temps », mais « le compte rendu de la réunion du lundi » ou « la réponse type aux demandes de tarif ».",
          "Une seule tâche traitée en entier vaut mieux que dix usages évoqués. Une fois qu’un salarié a vu son propre document sortir correct, il en trouve d’autres tout seul.",
        ],
      },
      {
        titre: "Deuxième blocage : personne n’ose se tromper devant les autres",
        paragraphes: [
          "Utiliser un outil que l’on maîtrise mal devant ses collègues, quand on a vingt ans de métier, coûte quelque chose. Les salariés les plus expérimentés sont souvent les plus réticents, non par rigidité mais parce qu’ils ont plus à perdre en paraissant maladroits.",
          "Ce qui débloque, c’est un cadre où l’erreur est le programme. Une séance où l’on cherche exprès à faire dire des bêtises à l’outil fait plus pour l’adoption que trois démonstrations réussies. Elle enseigne au passage la compétence la plus utile de toutes : reconnaître une réponse fausse au lieu de la recopier.",
        ],
      },
      {
        titre: "Troisième blocage : aucune règle sur les données",
        paragraphes: [
          "Vos salariés utilisent déjà ces outils. La question n’est pas de savoir s’ils le font, mais avec quoi dedans.",
          "En l’absence de consigne, deux comportements coexistent dans la même entreprise. Certains n’osent rien y mettre et n’en tirent donc rien. D’autres y collent des contrats, des dossiers clients ou des éléments de paie sans se poser de question.",
          "Une règle d’une page suffit à régler les deux. Ce qui ne sort jamais, ce qui peut sortir anonymisé, ce qui sort librement. Sans elle, vous avez le risque sans le bénéfice.",
        ],
      },
      {
        titre: "Quatrième blocage : aucun temps alloué",
        paragraphes: [
          "Apprendre un outil pendant qu’on tient sa charge de travail habituelle ne fonctionne pour personne. Demander à une assistante déjà en tension d’explorer un assistant conversationnel sur son temps libre revient à ne rien demander.",
          "Ce qui débloque tient en une phrase du dirigeant : une demi-journée bloquée dans l’agenda, avec quelqu’un pour accompagner, et l’autorisation explicite de ne rien produire d’autre pendant ce temps.",
          "C’est le blocage le plus simple à lever et le plus souvent ignoré, parce qu’il ne coûte pas d’argent mais qu’il coûte une décision.",
        ],
      },
      {
        titre: "Ce que ça dit de votre organisation",
        paragraphes: [
          "Les quatre blocages ont un point commun : aucun ne se règle par un achat de licence. Ils se règlent par une permission, une règle, un créneau et un premier cas traité en entier.",
          "C’est aussi pour cette raison qu’une journée de formation bien menée produit un effet disproportionné par rapport à sa durée. Elle ne transmet pas seulement une technique, elle donne officiellement le droit d’essayer.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il commencer par les jeunes salariés ?",
        r: "Non, et c’est même souvent contre-productif. Les salariés expérimentés connaissent les tâches qui coûtent cher à l’entreprise, ce que les nouveaux ignorent. Un groupe mixte progresse plus vite qu’un groupe jeune.",
      },
      {
        q: "Faut-il interdire l’usage tant qu’il n’y a pas de règle ?",
        r: "Interdire ne fonctionne pas, l’usage continue en dehors de votre vue et sans cadre. Écrire la règle d’une page prend une heure et règle le sujet mieux qu’une interdiction que personne ne respectera.",
      },
      {
        q: "Comment savoir si ça a marché ?",
        r: "Regardez une tâche précise trente jours après, pas la satisfaction générale. Si le compte rendu du lundi prend vingt minutes au lieu d’une heure, ça a marché. Si personne ne peut nommer de tâche changée, ça n’a pas marché.",
      },
    ],
  },
  {
    slug: "quelles-taches-lia-peut-reprendre",
    titreSeo:
      "Quelles tâches l’IA peut vraiment reprendre",
    titre: "Quelles tâches de votre entreprise l’IA peut réellement reprendre",
    chapo:
      "Une méthode simple pour trier, en une demi-journée, ce qui est automatisable tout de suite, ce qui l’est plus tard, et ce qui ne le sera jamais.",
    description:
      "Les trois critères de tri, ce qui est automatisable tout de suite, ce qui l’est plus tard, et ce qui ne doit jamais partir.",
    date: "2026-08-16",
    dateLisible: "16 août 2026",
    lecture: "8 min",
    reponseDirecte:
      "Une tâche est automatisable quand elle réunit trois conditions : elle se répète à l’identique, elle passe par de l’écrit ou de la donnée structurée, et une erreur y est rattrapable. Si l’une des trois manque, l’automatisation coûtera plus cher qu’elle ne rapporte. Ce tri se fait en une demi-journée avec les gens qui font le travail, pas avec un consultant seul devant un tableur.",
    sections: [
      {
        titre: "Les trois critères, dans cet ordre",
        paragraphes: [
          "Le premier est la répétition. Une tâche faite deux fois par an ne mérite aucun investissement, même si elle est pénible. Le seuil utile commence autour d’une fois par semaine.",
          "Le deuxième est la nature de la matière. Du texte, un tableau, un formulaire, un fichier : une machine s’en saisit. Une conversation de couloir, une visite de chantier, un tour de main : non.",
          "Le troisième est la conséquence d’une erreur. Un compte rendu mal résumé se corrige en deux minutes. Un montant faux envoyé à un client ou à l’administration ne se corrige pas de la même façon. Plus la conséquence est lourde, plus il faut un contrôle humain à la fin, et plus le gain de temps se réduit.",
        ],
      },
      {
        titre: "Ce qui est automatisable tout de suite",
        paragraphes: [
          "Ce sont les tâches d’écriture répétitive et de mise en forme, où l’erreur se voit et se rattrape.",
        ],
        liste: [
          "Transformer des notes de réunion en compte rendu structuré",
          "Rédiger la réponse type à une demande de renseignement qui revient chaque semaine",
          "Résumer un document long avant de le faire circuler",
          "Reformuler un courrier de relance pour qu’il reste ferme sans être blessant",
          "Préparer une trame d’entretien ou de rendez-vous à partir d’un dossier",
          "Extraire les informations d’un document reçu pour les reporter dans votre outil",
        ],
      },
      {
        titre: "Ce qui est automatisable, mais plus tard",
        paragraphes: [
          "Ces tâches remplissent les critères mais demandent de la construction, pas seulement de la prise en main. Elles relèvent d’un chantier, avec un budget et un délai, et non d’une journée de formation.",
        ],
        liste: [
          "Répondre aux demandes entrantes 24 h sur 24 et poser un rendez-vous dans l’agenda",
          "Relancer automatiquement un devis sans réponse, puis s’arrêter dès que le client réagit",
          "Collecter des pièces auprès d’un client et relancer celles qui manquent",
          "Produire chaque matin les chiffres de la veille là où l’équipe travaille déjà",
        ],
      },
      {
        titre: "Ce qui ne doit jamais partir",
        paragraphes: [
          "Il ne s’agit pas de capacité technique mais de décision d’entreprise. Deux catégories doivent rester hors du périmètre, quelles que soient les promesses d’un prestataire.",
          "D’abord tout ce qui engage juridiquement ou financièrement sans relecture humaine : un devis chiffré envoyé seul, une réponse à un appel d’offres, un document contractuel. La machine peut préparer, elle ne signe pas.",
          "Ensuite tout ce qui repose sur la relation : annoncer une mauvaise nouvelle, gérer un client mécontent, arbitrer entre deux collaborateurs. Automatiser cela ne fait pas gagner du temps, cela fait perdre des clients.",
        ],
      },
      {
        titre: "Comment faire le tri en pratique",
        paragraphes: [
          "L’erreur classique est de le faire seul, en réunion de direction. Le dirigeant connaît les process officiels, pas les contournements que ses équipes ont inventés pour tenir. Or ce sont précisément ces contournements qui coûtent des heures.",
          "La méthode qui fonctionne demande une demi-journée. Chaque personne liste les tâches qu’elle refait à l’identique chaque semaine, sans filtrer, y compris celles dont elle a un peu honte. On applique ensuite les trois critères en groupe, puis on chiffre le temps que chacune coûte réellement sur un mois.",
          "En sortie, vous avez une liste classée et chiffrée en heures. C’est déjà un document utile en soi : il vous dit où votre entreprise perd du temps, que vous décidiez ensuite d’automatiser ou non.",
        ],
      },
      {
        titre: "Le piège du chiffrage",
        paragraphes: [
          "Une heure gagnée n’est pas une heure économisée. Si votre assistante gagne six heures par semaine et que personne ne décide de ce qu’elle en fait, ces heures se dissolvent dans le quotidien et le projet n’aura rien rapporté de mesurable.",
          "Le chiffrage n’a de sens que couplé à une décision : ces heures servent à traiter plus de dossiers, à rappeler les clients dormants, ou à ne plus travailler le samedi. Sans cette phrase, la plus belle cartographie reste un document.",
        ],
      },
    ],
    faq: [
      {
        q: "Par où commencer quand tout semble automatisable ?",
        r: "Par la tâche la plus fréquente parmi celles dont l’erreur est rattrapable. Pas par la plus pénible ni par la plus impressionnante. La fréquence fait le retour sur investissement, la rattrapabilité fait la sécurité.",
      },
      {
        q: "Faut-il un outil différent pour chaque tâche ?",
        r: "Non, et c’est une erreur fréquente. Multiplier les abonnements crée un coût récurrent et une charge de maintenance que personne n’assume. Mieux vaut un socle commun sur lequel on ajoute des briques.",
      },
      {
        q: "Combien de temps prend une cartographie complète ?",
        r: "Une demi-journée avec les équipes concernées pour la liste et le classement. Le chiffrage en euros demande ensuite un accès à vos chiffres réels, ce qui relève d’un diagnostic à part entière.",
      },
    ],
  },
];

export const ARTICLE_PAR_SLUG = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]));
