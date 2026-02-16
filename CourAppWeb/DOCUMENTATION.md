# Documentation Technique - Projet B3 DW

## Présentation du projet

Projet scolaire réalisé dans le cadre du module **B3 DW - Application web (35h)**.

### Objectifs d'apprentissage

- Approfondir l'environnement Web (HTML, CSS, protocoles HTTP/HTTPS)
- Maîtriser les fondamentaux du modèle MVVM
- Utiliser un framework Front-end moderne (React)
- Développer un site web responsive et sécurisé

## Architecture technique

### Stack

- **Frontend**: React 19.2 + TypeScript 5.9
- **Build Tool**: Vite 7.3
- **Linting**: ESLint
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **State Management**: Context API (panier)
- **API externe**: Fake Store API (produits)
- **Package Manager**: npm
- **Backend prévu**: NestJS + PostgreSQL + JWT

### Outils de développement

- TypeScript pour le typage statique
- ESLint pour la qualité du code
- Vite pour le dev server et le build rapide
- Hot Module Replacement (HMR) pour le développement

## Structure du projet

```
CourAppWeb/
├── .claude/              # Configuration Claude (local, non versionné)
│   ├── CLAUDE.md        # Directives de travail
│   ├── plans/           # Plans d'implémentation (api-nestjs.md)
│   ├── rules/           # Règles métier
│   └── agents/          # Agents personnalisés
│
├── public/              # Assets statiques
├── src/                 # Code source
│   ├── main.tsx        # Point d'entrée
│   ├── index.css       # Imports Tailwind CSS
│   ├── App.tsx         # Routing + Navigation
│   │
│   ├── pages/          # Pages de l'application
│   │   ├── Home.tsx           # Page d'accueil
│   │   ├── FormPage.tsx       # Login/Signup avec validation
│   │   ├── Counter.tsx        # Exemple avec useState
│   │   ├── Products.tsx       # Liste des produits (Fake Store API)
│   │   ├── ProductDetail.tsx  # Page produit individuelle
│   │   └── Cart.tsx           # Panier complet
│   │
│   ├── context/        # Gestion d'état globale
│   │   └── CartContext.tsx    # State du panier (Context API)
│   │
│   ├── components/     # Composants réutilisables
│   │   └── CartDropdown.tsx   # Preview du panier (hover + ajout)
│   │
│   └── assets/         # Assets (images, etc.)
│
├── index.html           # Template HTML
├── package.json         # Dépendances
├── tsconfig.json        # Config TypeScript
├── vite.config.ts       # Config Vite + proxy API
├── eslint.config.js     # Config ESLint
├── tailwind.config.js   # Config Tailwind CSS v4
├── DOCUMENTATION.md     # Ce fichier
└── COURS_REVISION.md    # Guide de révision pour l'examen
```

## Conventions de développement

### TypeScript

- Typage strict activé
- Pas de `any` sauf exception justifiée
- Interfaces pour objets, Types pour unions

### Nommage

- **Composants**: PascalCase (`UserProfile.tsx`)
- **Fonctions/Variables**: camelCase (`getUserData`)
- **Constantes**: UPPER_CASE (`API_URL`)

### Commits

- Messages en français
- Format: `type: description`
- Types: feat, fix, docs, style, refactor, test

## Concepts techniques maîtrisés

### React Hooks
- **useState** : gestion d'état local (compteur, formulaires, UI)
- **useEffect** : effets de bord (fetch API, cleanup)
- **useContext** : consommation du Context API (panier)
- **useParams** : récupération de paramètres d'URL (routing dynamique)

### Context API
- Création d'un contexte avec `createContext`
- Provider pour partager l'état global
- Hook personnalisé `useCart()` pour consommer le contexte
- Gestion d'état complexe (panier avec multiples actions)

### React Router
- Configuration du BrowserRouter
- Routes avec `<Routes>` et `<Route>`
- Navigation avec `<Link>` (pas de rechargement page)
- Paramètres dynamiques dans les routes (`/products/:id`)
- Hook `useParams()` pour accéder aux paramètres

### TypeScript
- Interfaces pour définir les structures de données (`CartItem`, `Product`)
- Typage des props et des états
- Type guards et unions de types
- Typage strict sans `any`
- Omit utility type (`Omit<CartItem, 'quantity'>`)

### Fetch API et async/await
- Requêtes GET vers Fake Store API
- Gestion des réponses JSON
- Try/catch pour les erreurs
- Loading states et error handling
- Préparation pour POST/PUT/DELETE avec JWT

### Validation et sécurité
- Regex pour validation email
- Vérification de longueur de champs
- Comparaison de mots de passe
- Sanitization (trim, toLowerCase)
- Préparation pour hash bcrypt côté backend

### Tailwind CSS v4
- Syntaxe `@import "tailwindcss"` (pas @tailwind directives)
- Classes utilitaires (flex, grid, spacing, colors)
- Responsive design (mobile-first)
- Transitions et animations
- Backdrop blur et transparence

## Guide de démarrage

### Prérequis

- Node.js (v18+)
- npm

### Installation

```bash
cd CourAppWeb
npm install
```

### Développement

```bash
npm run dev
# Ouvre http://localhost:5173
```

### Build de production

```bash
npm run build
# Génère le dossier dist/
```

### Preview du build

```bash
npm run preview
# Teste le build en local
```

### Linting

```bash
npm run lint
# Vérifie la qualité du code
```

## Scripts disponibles

| Script            | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Lance le serveur de développement |
| `npm run build`   | Compile pour la production        |
| `npm run preview` | Preview du build de production    |
| `npm run lint`    | Analyse du code avec ESLint       |

## Fonctionnalités implémentées

### Routing et Navigation

- **React Router** configuré avec 6 routes :
  - `/` - Page d'accueil
  - `/form` - Formulaire login/signup
  - `/counter` - Page de démonstration useState
  - `/products` - Liste des produits
  - `/products/:id` - Détail d'un produit
  - `/cart` - Panier complet

- **Navigation** : barre de navigation fixe avec design moderne (transparent, backdrop blur)
- **Badge panier** : affiche le nombre d'articles en temps réel

### Système de panier (E-commerce)

#### CartContext (Context API)
- **State global** pour gérer le panier dans toute l'application
- **Interface CartItem** : `id`, `title`, `price`, `image`, `quantity`
- **Actions disponibles** :
  - `addToCart()` : ajoute ou incrémente la quantité
  - `removeFromCart()` : supprime un article
  - `updateQuantity()` : modifie la quantité
  - `clearCart()` : vide le panier
  - `getCartTotal()` : calcule le total
  - `getCartCount()` : compte le nombre d'articles

#### CartDropdown
- S'affiche automatiquement pendant 3s quand un article est ajouté
- Apparaît aussi au survol du bouton panier
- Montre les 3 derniers articles ajoutés
- Affiche le total et un lien "Voir le panier"

#### Page Cart
- Liste tous les articles avec images et détails
- Contrôles de quantité (+ / -)
- Bouton "Retirer" pour chaque article
- Total du panier calculé dynamiquement
- Bouton "Vider le panier"
- Bouton "Passer commande" (prêt pour l'intégration backend)

### Formulaire Login/Signup

- **Toggle** entre mode connexion et inscription
- **Validation des données** :
  - Email : regex pour format valide
  - Mot de passe : minimum 6 caractères
  - Username : minimum 3 caractères (signup uniquement)
  - Confirmation mot de passe (signup uniquement)
- **Sanitization** :
  - `trim()` sur tous les champs
  - `toLowerCase()` sur l'email
- **États** : loading, erreurs affichées
- **API-ready** : prêt à envoyer vers `/api/login` et `/api/signup`

### Intégration API Produits

- **Fake Store API** intégrée (`https://fakestoreapi.com/products`)
- **Page Products** : grille responsive de tous les produits
- **Page ProductDetail** : affichage détaillé d'un produit (routing dynamique)
- **Bouton "Ajouter au panier"** sur les deux pages avec feedback visuel

### Design moderne

- **Tailwind CSS v4** avec syntaxe `@import "tailwindcss"`
- **Palette** : fond blanc, couleurs slate, pas de gradients
- **Transparence** : navigation avec backdrop blur
- **Inspiration** : Headless UI (design épuré et professionnel)
- **Responsive** : grilles adaptatives, layout mobile-first

## Backend prévu (NestJS)

Un plan complet se trouve dans [.claude/plans/api-nestjs.md](.claude/plans/api-nestjs.md)

### Architecture

```
api/
├── src/
│   ├── auth/        # JWT, login, signup
│   ├── users/       # Entité User + service
│   ├── products/    # CRUD produits (remplace Fake Store API)
│   ├── orders/      # Sauvegarde des commandes
│   └── seed/        # Données initiales
```

### Modules prévus

#### Auth (JWT)
- `POST /api/signup` : création compte (email, username, password hashé bcrypt)
- `POST /api/login` : authentification (email + password → JWT token)
- Réponse : `{ access_token, user: { id, email, username } }`

#### Products
- `GET /api/products` : liste des produits (public)
- `GET /api/products/:id` : détail produit (public)
- `POST /api/products` : créer produit (JWT requis)
- `PUT /api/products/:id` : modifier produit (JWT requis)
- `DELETE /api/products/:id` : supprimer produit (JWT requis)

#### Orders
- `POST /api/orders` : créer commande depuis panier (JWT requis)
- `GET /api/orders` : historique commandes utilisateur (JWT requis)
- `GET /api/orders/:id` : détail commande avec items (JWT requis)

**Note** : Le panier reste côté client (React state), seules les commandes finalisées sont sauvegardées en base.

### Base de données (PostgreSQL)

- **User** : id, email (unique), username, password (hash)
- **Product** : id, title, price, description, category, image, ratingRate, ratingCount
- **Order** : id, userId, total, status, createdAt, updatedAt
- **OrderItem** : id, orderId, productId, quantity, price (snapshot)

### Intégration Frontend

Modifications prévues :
- **vite.config.ts** : proxy `/api` → `http://localhost:3000`
- **Products.tsx** : changer URL vers `/api/products`
- **ProductDetail.tsx** : changer URL vers `/api/products/:id`
- **FormPage.tsx** : stocker le token JWT dans localStorage
- **Cart.tsx** : `handleCheckout()` envoie `POST /api/orders` avec le token Bearer

## Prochaines étapes

### Phase 1: Configuration de base ✅

- [x] Initialisation du projet React + TypeScript
- [x] Configuration de la structure .claude/
- [x] Documentation technique
- [x] Installation et configuration de Tailwind CSS v4
- [x] Configuration de React Router

### Phase 2: Développement ✅

- [x] Création de l'architecture des composants
- [x] Mise en place du routing (6 routes)
- [x] Gestion de l'état (Context API pour le panier)
- [x] Intégration responsive design

### Phase 3: Features ✅

- [x] Développement du système de panier e-commerce
- [x] Intégration Fake Store API
- [x] Gestion des formulaires (login/signup)
- [x] Validation et sanitization des données

### Phase 4: Backend NestJS (à venir)

- [ ] Créer projet NestJS avec PostgreSQL
- [ ] Implémenter module Auth (JWT, bcrypt)
- [ ] Implémenter module Products (CRUD)
- [ ] Implémenter module Orders
- [ ] Créer seed de données initiales
- [ ] Modifier frontend pour utiliser l'API locale

### Phase 5: Qualité et déploiement (à venir)

- [ ] Tests (unitaires, intégration)
- [ ] Optimisation des performances
- [ ] Sécurisation de l'application
- [ ] Déploiement

## Ressources du cours

### Documentation du projet

- **COURS_REVISION.md** : guide de révision complet pour l'examen
- **.claude/plans/api-nestjs.md** : plan d'implémentation du backend

### Documentation officielle

- [React Docs](https://react.dev) - Documentation React (hooks, composants)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Guide TypeScript
- [Vite Guide](https://vite.dev/guide/) - Build tool et dev server
- [Tailwind CSS](https://tailwindcss.com/docs) - Framework CSS utilitaire
- [React Router](https://reactrouter.com/en/main) - Routing pour React
- [Fake Store API](https://fakestoreapi.com/) - API de test pour e-commerce

### Concepts clés du cours

- Environnement Web (HTML, CSS, HTTP/HTTPS)
- Modèle MVVM (Model-View-ViewModel)
- Frameworks JavaScript modernes (React)
- Site web responsive (mobile-first, Tailwind)
- Bonnes pratiques de développement Web
- Cycle de vie d'une requête HTTP
- Hooks React (useState, useEffect, useContext)
- Context API pour state management
- Routing client-side avec React Router
- Validation et sanitization de formulaires
- Intégration API REST
- TypeScript pour la sécurité du typage

## Notes

Ce projet suit une approche pédagogique avec Claude en mode apprentissage. Les décisions techniques sont documentées et expliquées pour favoriser la compréhension.
