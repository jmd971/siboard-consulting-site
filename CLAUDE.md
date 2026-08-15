# CLAUDE.md — Site Siboard Consulting

## Contexte projet

Site vitrine de **Siboard Consulting**, cabinet digital fondé par Jean-Marc Dolmare, basé en Guadeloupe, actif en DOM et Île-de-France.

**Positionnement (refonte août 2026)** :

> Siboard analyse comment une entreprise travaille réellement, chiffre ce qu'elle perd, puis construit les systèmes qui le corrigent.

Un cabinet de conseil analyse et laisse un rapport. Une agence installe sans avoir analysé. Siboard fait les deux gestes, et c'est la même personne qui signe le constat et qui construit la réponse.

**Le diagnostic est la valeur ajoutée principale de Jean-Marc.** Tout le site doit le refléter : c'est le produit d'entrée, il est payant, il n'est jamais présenté comme un préliminaire commercial.

---

## ⚠️ Règles éditoriales — non négociables

1. **Il n'y a plus d'audit gratuit.** L'ancienne route `/audit-gratuit` redirige vers `/etat-des-lieux`. Ne jamais réintroduire un « audit offert », « diagnostic gratuit » ou équivalent comme CTA principal. Ce qui est gratuit et sans engagement, c'est le **premier échange de cadrage**, pas le diagnostic.
2. **L'IA n'est jamais le titre.** Elle arrive dans l'amélioration des process, comme moyen. Ne pas mettre « intelligence artificielle », « agents IA » ou « automatisation » en promesse de tête. Les concurrents locaux (Suity, Digitallis) occupent ce terrain et il se commoditise.
3. **Ne jamais nommer les outils** (GoHighLevel, Voiceflow, Make, n8n, Vapi, Supabase) dans les titres ni les accroches. Uniquement dans les sections techniques ou la page À propos.
4. **Les prix sont affichés.** C'est un choix délibéré contre l'usage du marché : les concurrents cachent leurs prix, Siboard les montre. Seul le logiciel métier n'a qu'un plancher. Ne jamais créer de page « Tarifs » isolée : le prix reste attaché à chaque produit, après la description de ce qu'il règle.
5. **Les cinq systèmes sont des prescriptions, pas un catalogue.** Toujours les présenter avec un bloc « On le prescrit quand » qui décrit le symptôme en langage dirigeant.
6. **Jamais de résultat garanti sans condition de vérification.** Les deux seules garanties autorisées sont celle de l'État des lieux (remboursé si les fuites trouvées sont inférieures au prix) et celle de la Mission 90J (10 RDV ou prolongation).
7. **Pas de logo de venture dans le mur de logos clients.** AdamBoards, TransmiExpert et SecureXia sont des produits édités par Siboard, pas des clients. Ils vivent sur `/ventures`.
8. **Écriture humaine.** Éviter les tirets cadratins, les points médians décoratifs et les énumérations systématiques par trois. Phrases courtes, mots concrets, langage du dirigeant.

---

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS v4 (tokens dans `src/app/globals.css`)
- **Composants** : shadcn/ui
- **Déploiement** : Vercel, auto-deploy `main` → production
- **Formulaires** : `AuditForm` (`src/app/audit-gratuit/audit-form.tsx`), POST webhook GoHighLevel
- **Contenu** : centralisé dans `src/lib/constants.ts`, pas de CMS
- **Langue** : Français
- **TVA** : 8,5 % (DOM), mentionnée partout où des prix apparaissent

---

## Architecture — 8 routes

```
/                        Homepage
├── /etat-des-lieux      Produit d'entrée payant + formulaire de contact  ← CTA principal
├── /solutions           Le Socle + les 5 systèmes + le logiciel métier
├── /ventures            Les 3 plateformes éditées par Siboard
├── /mission-90j         Mission Croissance 90J
├── /realisations        Portfolio clients
├── /a-propos            Jean-Marc + positionnement
└── /audit-gratuit       → redirige vers /etat-des-lieux (route conservée pour les liens existants)
```

`/automatisation` redirige vers `/solutions` (historique).

---

## L'offre — source de vérité

Tout le contenu commercial vit dans `src/lib/constants.ts`. Modifier là, pas dans les composants.

### Étape 1 — L'État des lieux (`ETAT_DES_LIEUX`)

Diagnostic de process payant. On suit le parcours réel du client, de la découverte à la facture encaissée, et on cherche où ça fuit, où ça attend, et où l'on ressaisit de l'information.

Livrable écrit : carte du parcours avec les points de rupture, chiffrage de chaque fuite en euros et en heures **à partir des données du client** (jamais de moyennes de marché), ordre de traitement, et ce qui est déconseillé.

| Périmètre | Prix HT |
|---|---|
| TPE, un site, jusqu'à 10 personnes | 1 900 € |
| PME, plusieurs services ou sites | 3 900 € |
| Groupe ou collectivité | à partir de 6 500 € |

Deux engagements à toujours afficher ensemble : le document appartient au client et il est libre de le faire exécuter ailleurs ; le diagnostic est remboursé si les fuites identifiées ne dépassent pas son prix.

**Le diagnostic n'est pas déduit d'une installation.** Le déduire reviendrait à dire que la vraie valeur est ailleurs.

### Étape 2 — Le Socle et les cinq systèmes (`SOCLE`, `MODULES`)

Le Socle Siboard est la fondation technique commune, construite et détenue par Siboard. Il ne se vend jamais seul. 2 900 € + 190 €/mois.

| Système | Sous-titre | Prix HT |
|---|---|---|
| L'Accueil | Répondre en une minute, qualifier, poser le rendez-vous | 2 500 € (6 500 € vocal) + 90 €/mois |
| Le Bureau | Les documents traités, classés et tracés sans ressaisie | dès 4 900 € + 90 €/mois |
| Le Fil | Garder le lien jusqu'à la signature | 1 900 € + 90 €/mois (option La Preuve 900 €) |
| Le Retour | Faire revenir les clients qui vous connaissent déjà | 1 900 € analyse / 3 500 € avec campagne |
| Le Point | Vos chiffres chaque matin, là où vous travaillez déjà | 3 500 € (7 500 € commenté) + 90 €/mois |

Logiciel métier sur mesure : à partir de 15 000 €.
Formule complète (socle + trois systèmes en 90 jours) : 11 900 € + 460 €/mois.

**Preuve manquante à combler** : Le Fil et Le Point n'ont pas encore de cas client chiffré (champ `preuve` vide dans `MODULES`). Ne pas inventer de chiffre. Remplir dès qu'un client autorise la citation.

### Les ventures (`ECOSYSTEME`, page `/ventures`)

Trois logiciels métier en production, chacun co-édité avec un professionnel du secteur. Ils ne sont pas décoratifs : ce sont la preuve que Siboard construit du logiciel et non seulement des paramétrages, et l'antichambre commerciale de l'offre logiciel métier.

Le schéma à raconter, toujours le même : on analyse un process chez un client, on le construit en logiciel, puis on le généralise au secteur avec un expert du métier.

| Produit | Domaine | Ce que ça prouve |
|---|---|---|
| AdamBoards | adamboards.fr | Logiciel financier multi-sociétés avec une couche IA encadrée par des règles déterministes |
| TransmiExpert | transmiexpert.fr | Transformer une saisie en document professionnel de 48 pages sans intervention humaine |
| SecureXia | securexia.fr | Modéliser une réglementation et la rendre utilisable sur le terrain |

### Mission Croissance 90J

Inchangée. 1 500 € HT/mois × 3 mois + 80 € HT par RDV qualifié tracé, garantie de 10 RDV ou prolongation sans facturation, exclusivité sectorielle contractualisée.

⚠️ Cette offre n'a pas encore de client signé référençable publiquement. Pas de cas client nommé sur cette page : la preuve est la garantie et l'exclusivité.

---

## Règles globales de développement

1. **Mobile-first, priorité absolue**
   - Concevoir et tester d'abord en 375px avant toute vue desktop
   - CTA : hauteur minimum 48px, pleine largeur sur mobile (`w-full sm:w-auto`)
   - Titre principal : jusqu'à 36px sur mobile, la seule contrainte est l'absence de débordement à 375px (vérifié)
   - Champs de formulaire : **16px minimum**, sinon iOS Safari zoome automatiquement à la mise au point
   - Cartes empilées en une colonne sur mobile, jamais de tableau HTML pour du contenu

2. **Performance**
   - Images en WebP, `width` et `height` obligatoires, `loading="lazy"` hors hero
   - Cibles Core Web Vitals : LCP < 2,5 s, CLS < 0,1
   - Pas de librairie supplémentaire, Tailwind et shadcn/ui suffisent

3. **Accessibilité**
   - Contraste minimum 4,5:1
   - ⚠️ `--accent` (corail) et `--primary` (violet) tombent autour de 3:1 en couleur de texte. Utiliser **`text-accent-strong`** sur fond clair et **`text-primary-on-dark`** sur fond sombre pour tout texte sous 24px. Les fonds gardent `--accent` et `--primary`.
   - Liens secondaires et liens en carte : `min-h-11` pour tenir les 44px tactiles
   - Toute animation doit respecter `prefers-reduced-motion` (hook `useReducedMotion` de framer-motion)
   - `alt` descriptif, `aria-label` sur les boutons icône, focus visible

4. **Typographie et apostrophes**
   - Dans le JSX, préférer `{"texte"}` avec apostrophes typographiques plutôt que `&apos;` dispersés
   - Le contenu long vit dans `constants.ts` et se rend via `{}`

---

## SEO

### Balises par page

| Route | `<title>` | `<h1>` |
|---|---|---|
| `/` | Siboard Consulting — Diagnostic de process et systèmes pour TPE/PME Guadeloupe et IDF | Votre activité mérite un digital qui travaille pour vous. |
| `/etat-des-lieux` | L'État des lieux — diagnostic de process pour TPE et PME \| Siboard | On regarde comment vous travaillez vraiment. |
| `/solutions` | Solutions — le Socle Siboard et les cinq systèmes \| Siboard Consulting | L'état des lieux dit quoi réparer. Voici avec quoi. |
| `/ventures` | Nos plateformes — les logiciels que Siboard édite \| Siboard Consulting | Nous n'installons pas seulement des outils. Nous en éditons. |
| `/mission-90j` | Mission Croissance 90J — 10 RDV B2B garantis — Siboard | Vos premiers clients B2B signés en 90 jours. |
| `/realisations` | Réalisations — Clients Siboard Consulting Guadeloupe et IDF | Nos réalisations |
| `/a-propos` | À propos — Jean-Marc Dolmare, Siboard Consulting Guadeloupe | Siboard Consulting — qui sommes-nous ? |

### Mots-clés prioritaires

**Guadeloupe (971)** : audit digital Guadeloupe, diagnostic process entreprise Guadeloupe, automatisation PME Guadeloupe, agent IA Guadeloupe, agence digitale Guadeloupe, création site web Guadeloupe, logiciel métier sur mesure Guadeloupe

**Secteur public** : diagnostic numérique collectivité, logiciel métier mairie, conformité ERP Guadeloupe

**IDF / national, pour la Mission 90J** : mission commerciale B2B done for you, prospection LinkedIn PME, consultant croissance commerciale TPE

### Fichiers techniques
- `src/app/sitemap.ts` — tenir à jour à chaque nouvelle route
- `public/robots.txt` — ouvert, sauf `/api/`
- `public/llms.txt` — résumé de l'offre pour les moteurs IA, à mettre à jour à chaque changement de prix ou d'offre
- JSON-LD `Organization` dans `src/app/layout.tsx`

---

## Informations légales

- **Société** : Siboard Consulting
- **SIRET** : 89080598900013
- **Adresse** : 73 rue Vatable, 97110 Pointe-à-Pitre, Guadeloupe
- **TVA** : FR79890805989
- **Email** : contact@siboard-consulting.fr
- **Site** : www.siboard-consulting.fr
