# CLAUDE.md — Site Siboard Consulting

## Contexte projet

Site vitrine de **Siboard Consulting**, cabinet d'accompagnement digital fondé par Jean-Marc Dolmare, basé en Guadeloupe, actif en DOM et Île-de-France.

**Objectif du site** : convertir un visiteur TPE/PME en prospect qualifié via deux chemins distincts selon son besoin. Le site ne doit pas expliquer ce qu'est l'IA — il doit convaincre en 30 secondes que Siboard comprend le problème du visiteur et s'engage sur un résultat.

**Principe anti-commodité — à appliquer partout sur le site** :
- Ne jamais nommer les outils (GHL, Voiceflow, Make, Vapi) dans les titres et accrochés — seulement dans les sections techniques ou la page À propos
- Toujours parler résultat avant technologie : "agenda rempli automatiquement" avant "GoHighLevel", "agent qui répond à votre place" avant "chatbot Voiceflow"
- La garantie Mission 90J doit apparaître dès la homepage — c'est le signal anti-commodité le plus fort
- Siboard vend une relation et un résultat, pas une prestation technique

---

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS
- **Composants** : shadcn/ui
- **Déploiement** : Vercel
- **Formulaires** : connectés à GoHighLevel via webhook
- **Langue** : Français
- **TVA** : 8,5% (DOM) — à mentionner si prix affichés

---

## Architecture — 6 pages

```
/ (Homepage)
├── /solutions             → Automatisation + Agents IA (deux briques distinctes)
├── /mission-90j           → Offre Mission Croissance 90J
├── /realisations          → Portfolio clients
├── /a-propos              → Jean-Marc + positionnement
└── /audit-gratuit         → Formulaire CTA principal
```

---

## Identité visuelle

- **Couleurs** : à définir avec Jean-Marc (suggestion : dark navy + accent chaud — éviter le bleu IA générique)
- **Typographie** : moderne, lisible, pas de serif
- **Ton** : direct, concret, sans jargon technique visible
- **Règle** : jamais les noms d'outils en titre — toujours le résultat ("agenda rempli", "clients qui reviennent", "agent qui répond 24h/24")

---

## Page 1 — Homepage `/`

### Objectif
Orienter le visiteur vers le bon chemin (Persona A ou B) en moins de 30 secondes.

### Sections dans l'ordre

**1. Hero**
- Headline : *"Votre activité mérite un digital qui travaille pour vous."*
- Sous-titre : *"Audit, automatisation, missions de croissance. On comprend votre process avant de construire votre solution."*
- CTA A : `"Automatiser mon activité →"` → `/automatisation`
- CTA B : `"Développer mon offre B2B →"` → `/mission-90j`

**2. Preuve sociale rapide (3 chiffres)**
- Odyssée by Béa : Zéro présence digitale → 3ème position Google Maps
- Sacodif : 3ème page Google → 3ème position "expert comptable Créteil"
- DFP France : Site + agenda en ligne opérationnel sous 30 jours

**3. Les deux offres (deux cartes)**
- Carte A — Automatisation + Agents IA : pour les TPE qui perdent des leads ou du temps. CTA → `/solutions`
- Carte B — Mission Croissance 90J : pour les pros avec une offre B2B à activer, done for you. Mention de la garantie visible sur la carte : *"10 RDV garantis ou on continue gratuitement."* CTA → `/mission-90j`

**4. Réalisations en aperçu**
Logos ou noms de 4-5 clients + secteur + résultat en une ligne chacun.

**5. Notre écosystème**

Section sobre, 3 cartes côte à côte. Titre de section : *"Au-delà du consulting — des plateformes que nous avons construites."*

Chaque carte contient : logo ou nom stylisé + domaine en une ligne + lien vers le site externe.

| Produit | Domaine | Lien |
|---|---|---|
| **AdamBoards** | Accompagnement financier mensuel pour dirigeants de TPE/PME — méthode structurée, suivi personnalisé. *Plateforme et application construites par Siboard.* | adamboards.fr |
| **TransmiExpert** | Diagnostic et accompagnement pour céder ou reprendre une entreprise dans les meilleures conditions. *Site web et outil de diagnostic digital construits par Siboard.* | transmiexpert.fr |
| **SecureXia** | Service managé de mise en conformité incendie pour les ERP en Guadeloupe — visite terrain + plateforme de suivi. *Plateforme client et système de documentation construits par Siboard.* | securexia.fr |

Note de développement : les liens s'ouvrent dans un nouvel onglet (`target="_blank"`). Les cartes sont volontairement sobres — pas de descriptions longues, l'objectif est la crédibilité, pas la conversion vers ces produits.

**6. CTA final**
> *"Audit digital offert — on analyse votre situation et on vous dit exactement quoi prioriser. Sans engagement."*
Bouton → `/audit-gratuit`

---

## Page 2 — Solutions `/solutions`

### Objectif
Présenter les deux niveaux de service de Siboard — Automatisation et Agents IA — comme des briques complémentaires, pas des synonymes.

### Personas cibles
- Dirigeant TPE/commerce/service, 1–15 salariés
- Guadeloupe prioritaire, IDF secondaire
- Budget : 500–3 000€

### Sections

**1. Le problème**
> *"Chaque jour, des prospects vous contactent... et n'obtiennent pas de réponse. Des clients partent sans laisser d'avis. Vos RDV ont des no-shows. Votre temps part dans des tâches qui pourraient tourner seules."*

**2. La méthode en 3 étapes**
- Audit (on identifie les fuites et les priorités)
- Déploiement (on construit les briques manquantes)
- Autonomie (vous pilotez, on reste disponibles)

**3. Deux niveaux de solution — présentés en deux blocs visuels distincts**

**Bloc A — Automatisation**
Structurer les process répétitifs pour ne plus perdre de leads ni de temps.
- Agenda rempli automatiquement (confirmations, rappels, anti no-show)
- Collecte d'avis Google après chaque prestation
- Réactivation clients inactifs par WhatsApp/SMS
- Synchronisation des données entre vos outils

**Bloc B — Agents IA**
Aller plus loin : des agents qui comprennent, décident et agissent à votre place.
- Agent conversationnel qui qualifie vos leads 24h/24 et répond à leur place
- Agent vocal qui décroche, filtre et prend des RDV sans intervention humaine
- Assistant métier sur mesure (rédaction, analyse, process internes)
- Intégrations avancées sur mesure (API, bases de données, outils métier)

Note éditoriale : ne pas nommer les outils dans ces descriptions — parler uniquement du bénéfice client.

**4. Cas clients**
- Odyssée by Béa — boutique mode Guadeloupe — zéro présence → 3ème Google Maps + site + RDV + paiement
- DFP France — films vitrages IDF — site + agenda en ligne
- Fast Computer Company — magasin informatique Guadeloupe

**5. CTA**
> *"Audit digital offert pour toute entreprise en Guadeloupe et en Île-de-France."*
Bouton → `/audit-gratuit`

---

## Page 3 — Mission Croissance 90J `/mission-90j`

### Objectif
Convaincre le Persona B (professionnel IDF avec offre B2B) que le risque est zéro et le résultat garanti.

### Personas cibles
- Prestataire services, événementiel, B2B
- IDF prioritaire
- Budget : 1 500€/mois × 3 mois minimum

### Sections

**1. La promesse**
> *"Vos premiers clients B2B signés en 90 jours. Sans prospecter vous-même. Sans gérer les outils. Done for you."*

**2. Pourquoi commencer par votre produit le plus fort**
On identifie le produit ou service avec le différenciateur le plus puissant. On construit toute la mécanique commerciale autour. On l'exécute.

**3. Ce qu'on fait pour vous (5 blocs)**
- Brief web + pilotage de votre prestataire (page dédiée au produit)
- LinkedIn management : optimisation + 1 post/semaine rédigé et validé
- Prospection LinkedIn active : 40 messages/semaine ciblés (DRH, RSE, Achats...)
- Tableau de bord commercial partagé en temps réel
- Campagne de réactivation de votre base clients existante

**4. La garantie**
> *"10 RDV qualifiés en 90 jours ou on continue sans vous facturer."*
+ Exclusivité sectorielle contractualisée : un seul opérateur du même secteur accompagné à la fois.

**5. Pricing transparent — bloc visuel dédié**

Afficher le prix et la garantie dans le même bloc visuel. Ne jamais séparer les deux.

```
1 500 € HT / mois × 3 mois
+ 80 € HT par RDV qualifié tracé

10 RDV qualifiés en 90 jours
ou on continue sans vous facturer.
```

Note de développement : ce bloc doit être visuellement accentué (bordure or ou fond légèrement distinct). Le prix seul fait peur — la garantie dans le même bloc le rend irréfutable. Afficher aussi : "Exclusivité sectorielle — un seul concurrent accompagné à la fois."

**6. Cas client**
Bateau Alizé / Mission Mistinguett — cabaret flottant Paris 12e — activation de l'offre Green Séminaire B2B sur 90 jours.

**7. CTA**
> *"Réserver un appel de 30 min — on analyse votre offre et on vous dit si la Mission 90J est adaptée."*
Bouton → `/audit-gratuit` (ou calendrier Calendly/GHL direct)

---

## Page 4 — Réalisations `/realisations`

### Objectif
Prouver la diversité sectorielle et l'impact mesurable. Chaque cas = secteur + mission + résultat chiffré ou qualifié.

### Cas clients

| Client | Secteur | Localisation | Mission | Résultat |
|---|---|---|---|---|
| Odyssée by Béa | Boutique mode, showroom privé | Guadeloupe | Création digitale complète | Zéro présence → 3ème Google Maps + site + RDV + paiement |
| Sacodif | Expert-comptable | Créteil, IDF | Repositionnement SEO | 3ème page → 3ème position "expert comptable Créteil" |
| DFP France | Films techniques vitrages | Île-de-France | Site + prise de RDV | Agenda en ligne, délais remplis automatiquement |
| Bateau Alizé | Événementiel fluvial | Paris 12e | Audit stratégique + Mission 90J | Offre Green Séminaire B2B activée |
| Axecime | Courtage financier | Guadeloupe | SEO + Google Business Profile | Visibilité locale renforcée |
| Fast Computer Company | Magasin informatique | Baie-Mahault, GP | Accompagnement digital | Présence digitale structurée |

### Format d'affichage recommandé
Grille de cartes, une par client. Chaque carte : logo ou initiales + secteur + localisation + résultat en headline + 1 ligne de détail.

---

## Page 5 — À propos `/a-propos`

### Sections

**1. Jean-Marc Dolmare**
Ingénieur EPITA, background télécoms et paiements mobiles. Fondateur de Siboard Consulting depuis 2020. 5 ans de terrain en Guadeloupe et Île-de-France. Construit des solutions sur mesure — jamais de package générique imposé.

**2. Le modèle Siboard**
On part du process du client, pas de l'outil. On diagnostique avant de prescrire. On reste disponibles après le déploiement.

**3. Les produits maison (preuves d'exécution)**
- RDVFlow — automatisation de la prise de RDV
- AvisFlow — collecte d'avis Google automatique
- ClientBack — réactivation de clients inactifs
- SIA — assistante IA conversationnelle

**4. Les ventures partenaires**
- AdamBoards — accompagnement financier TPE/PME
- SecureXia — conformité incendie ERP Guadeloupe
- TransmiExpert — transmission d'entreprise

**5. Stack maîtrisé**
GoHighLevel · Voiceflow · Make/n8n · Supabase · Stripe · Next.js · Vercel

---

## Page 6 — Audit gratuit `/audit-gratuit`

### Objectif
Point d'entrée principal. Formulaire simple, confirmation rapide.

### Champs du formulaire
- Prénom + Nom
- Société
- Secteur d'activité (liste courte : Commerce/Retail / Services / Restauration / Artisanat / Événementiel / Autre)
- Localisation (Guadeloupe / Île-de-France / Autre DOM / Autre)
- Problème principal (cases à cocher) :
  - Je perds des prospects / leads
  - Mes RDV ont trop de no-shows
  - Mes clients ne laissent pas d'avis
  - Je veux automatiser des tâches répétitives
  - J'ai un produit B2B à développer
  - Autre
- Email
- Téléphone / WhatsApp

### Confirmation
Message de confirmation à l'écran + webhook GHL pour déclencher un message WhatsApp automatique dans les 24h.

### Promesse affichée
> *"On vous répond sous 24h. Pas une offre commerciale — un diagnostic honnête de votre situation."*

---

## Règles globales de développement

1. **Mobile-first — PRIORITÉ ABSOLUE**
   - Breakpoints Tailwind : `sm` (640px), `md` (768px), `lg` (1024px)
   - Concevoir et tester d'abord en 375px (iPhone SE) avant toute vue desktop
   - Navigation mobile : menu hamburger avec drawer latéral ou menu déroulant
   - CTAs : hauteur minimum 48px, largeur full sur mobile (`w-full sm:w-auto`)
   - Typographie : headline 28px max sur mobile (pas de débordement)
   - Cards des deux offres : empilées verticalement sur mobile, côte à côte sur desktop (`grid-cols-1 md:grid-cols-2`)
   - Section Écosystème : 1 colonne sur mobile, 3 colonnes sur desktop
   - Formulaire `/audit-gratuit` : 100% largeur sur mobile, labels au-dessus des champs
   - Pas de tableau HTML — utiliser des cartes empilées pour les réalisations sur mobile
   - Tester avec Chrome DevTools en mode responsive avant chaque livraison de page

2. **Performance**
   - Images : format WebP uniquement, attribut `width` et `height` obligatoires (évite CLS)
   - Lazy loading sur toutes les images hors hero (`loading="lazy"`)
   - Fonts Google : `display=swap` + préconnexion `<link rel="preconnect">`
   - Core Web Vitals cibles : LCP < 2.5s, CLS < 0.1, FID < 100ms
   - Pas de librairies inutiles — Tailwind + shadcn/ui suffisent pour la V1

3. **SEO — voir section dédiée ci-dessous**

4. **Accessibilité**
   - Contraste minimum 4.5:1 texte/fond (critique pour l'accent or #D4A853 sur fond clair)
   - Attribut `alt` descriptif sur toutes les images
   - Balises `aria-label` sur les boutons icône
   - Focus visible sur tous les éléments interactifs

5. **Pas de dépendance CMS** en V1 — contenu en dur dans les composants
6. **Formulaire `/audit-gratuit`** connecté à GHL via webhook POST

---

## SEO — Stratégie et mots-clés cibles

### Pourquoi Next.js résout le problème SEO actuel
Le site actuel (Bolt/React SPA) retourne un `<div id="root">` vide à Google — seule la homepage est indexée. Next.js App Router génère du HTML côté serveur : toutes les pages sont indexables dès le lancement.

### Balises à générer par page

| Page | `<title>` | `<meta description>` | `<h1>` |
|---|---|---|---|
| `/` | Siboard Consulting — Automatisation & IA pour TPE/PME Guadeloupe et IDF | Audit digital, automatisation sur mesure et agents IA pour les TPE/PME en Guadeloupe et Île-de-France. On comprend votre process avant de construire votre solution. | Votre activité mérite un digital qui travaille pour vous. |
| `/solutions` | Automatisation & Agents IA pour entreprises — Siboard Consulting | Prise de RDV automatisée, collecte d'avis, réactivation clients, chatbot IA et agents vocaux pour TPE/PME en Guadeloupe et en France. | Automatisation et Agents IA sur mesure |
| `/mission-90j` | Mission Croissance 90J — 10 RDV B2B garantis — Siboard | Mission commerciale done for you : LinkedIn, prospection, page web, tableau de bord. 10 RDV qualifiés en 90 jours ou prolongation gratuite. | Vos premiers clients B2B signés en 90 jours. |
| `/realisations` | Réalisations — Clients Siboard Consulting Guadeloupe et IDF | Découvrez les projets réalisés par Siboard : création de site, SEO, automatisation et agents IA pour des entreprises en Guadeloupe et en Île-de-France. | Nos réalisations |
| `/a-propos` | À propos — Jean-Marc Dolmare, Siboard Consulting Guadeloupe | Fondateur de Siboard Consulting, Jean-Marc Dolmare accompagne les TPE/PME en Guadeloupe et en IDF depuis 2020 : automatisation, IA et transformation digitale. | Siboard Consulting — qui sommes-nous ? |
| `/audit-gratuit` | Audit Digital Gratuit — Siboard Consulting Guadeloupe | Demandez votre audit digital gratuit. On analyse votre situation et vous dit exactement quoi prioriser. Réponse sous 24h, sans engagement. | Audit digital gratuit |

### Mots-clés prioritaires par zone

**Guadeloupe (971) — requêtes à cibler en priorité**
- "consultant IA Guadeloupe"
- "automatisation PME Guadeloupe"
- "agent IA Guadeloupe"
- "agence digitale Guadeloupe"
- "création site web Guadeloupe"
- "audit digital Guadeloupe"

**IDF / national — pour la Mission 90J**
- "mission commerciale B2B done for you"
- "prospection LinkedIn PME"
- "développer offre B2B prestataire de services"
- "consultant croissance commerciale TPE"

### Fichiers techniques à générer
- `sitemap.xml` — généré automatiquement via `next-sitemap`
- `robots.txt` — autoriser tout sauf `/api/`
- `app/layout.tsx` — inclure données structurées JSON-LD type `Organization` :
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Siboard Consulting",
  "url": "https://www.siboard-consulting.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "73 rue Vatable",
    "addressLocality": "Pointe-à-Pitre",
    "postalCode": "97110",
    "addressCountry": "FR"
  },
  "areaServed": ["Guadeloupe", "Île-de-France", "Martinique", "Guyane"]
}
```
- Google Search Console : soumettre le sitemap après déploiement Vercel

---

## Informations légales à intégrer

- **Société** : Siboard Consulting
- **SIRET** : 89080598900013
- **Adresse** : 73 rue Vatable, 97110 Pointe-à-Pitre, Guadeloupe
- **TVA** : FR79890805989
- **Email** : contact@siboard-consulting.fr
- **Site actuel** : www.siboard-consulting.fr (à remplacer)

Pages légales à créer : Mentions légales · Politique de confidentialité · CGV (optionnel V1)
