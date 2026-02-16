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
- **Styling**: Tailwind CSS
- **Package Manager**: npm

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
│   ├── plans/           # Plans d'implémentation
│   ├── rules/           # Règles métier
│   └── agents/          # Agents personnalisés
│
├── public/              # Assets statiques
├── src/                 # Code source
│   ├── App.tsx         # Composant racine
│   ├── main.tsx        # Point d'entrée
│   ├── App.css         # Styles globaux
│   └── assets/         # Assets (images, etc.)
│
├── index.html           # Template HTML
├── package.json         # Dépendances
├── tsconfig.json        # Config TypeScript
├── vite.config.ts       # Config Vite
├── eslint.config.js     # Config ESLint
└── DOCUMENTATION.md     # Ce fichier
```

### Structure future (prévue)

```
src/
├── components/     # Composants réutilisables
├── pages/         # Composants de pages
├── hooks/         # Custom hooks
├── utils/         # Fonctions utilitaires
├── types/         # Types TypeScript
├── services/      # API calls
└── styles/        # Styles Tailwind
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

## Prochaines étapes

### Phase 1: Configuration de base

- [x] Initialisation du projet React + TypeScript
- [x] Configuration de la structure .claude/
- [x] Documentation technique
- [ ] Installation et configuration de Tailwind CSS
- [ ] Configuration de React Router

### Phase 2: Développement

- [ ] Création de l'architecture des composants
- [ ] Mise en place du routing
- [ ] Gestion de l'état (Context API)
- [ ] Intégration responsive design

### Phase 3: Features

- [ ] Développement des fonctionnalités métier
- [ ] Intégration API REST
- [ ] Gestion des formulaires
- [ ] Validation des données

### Phase 4: Qualité et déploiement

- [ ] Tests (unitaires, intégration)
- [ ] Optimisation des performances
- [ ] Sécurisation de l'application
- [ ] Déploiement

## Ressources du cours

### Documentation officielle

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vite.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Concepts clés du cours

- Environnement Web (HTML, CSS, HTTP/HTTPS)
- Modèle MVVM
- Frameworks JavaScript modernes
- Site web responsive
- Bonnes pratiques de développement Web
- Cycle de vie d'une requête HTTP

## Notes

Ce projet suit une approche pédagogique avec Claude en mode apprentissage. Les décisions techniques sont documentées et expliquées pour favoriser la compréhension.
