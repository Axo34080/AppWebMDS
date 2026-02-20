Résumé des implémentations demandées

1. Login + Signup
   Implémentation :

État isSignup (boolean) pour toggle entre modes
Fonction toggleMode() qui bascule et réinitialise le formulaire
Champs conditionnels : username et confirmPassword uniquement si isSignup === true
Titre et bouton dynamiques selon le mode
Bouton de toggle en bas du formulaire 2. Envoi données vers API (handleSubmit, pas useEffect)
Pourquoi handleSubmit et pas useEffect ?

useEffect = effets au montage/changement. handleSubmit = soumission de formulaire.

Implémentation :

const handleSubmit = async (e: React.FormEvent) => {
// 1. Validation

- Email regex
- Password min 6 caractères
- Username min 3 caractères (signup)
- Password === confirmPassword (signup)

// 2. Assainissement

- email.trim().toLowerCase()
- username.trim()

// 3. Envoi API

- fetch() vers endpoint placeholder
- Gestion loading + error
  }
  États :

loading : désactive bouton, affiche "Chargement..."
error : affiche message d'erreur rouge
Try/catch pour gestion erreurs 3. Composants front fonctionnels
Tout fonctionne sans backend :

Endpoints en placeholder (/api/signup, /api/login)
Validation côté client opérationnelle
États UI (loading, error) fonctionnels
Formulaire réactif et accessible 4. Page produit individuelle
Implémentation :

ProductDetail.tsx :

useParams() pour récupérer l'ID depuis URL
useEffect() pour fetch https://fakestoreapi.com/products/${id}
État loading pendant fetch
Affichage détaillé : image, titre, prix, description, catégorie, rating
Bouton retour vers liste
Routing (App.tsx) :

<Route path="/products/:id" element={<ProductDetail />} />
Navigation (Products.tsx) :

Cards wrappées dans <Link to={/products/${product.id}}>
Hover effects pour indiquer cliquabilité

\*\*Evalutation 20/02/2026 1. Props vs State
Les props sont des données passées depuis le parent, elles sont immuables dans le composant qui les reçoit. C'est le state qui est fait pour changer. 2. Changement de vue → changement de données
En React c'est l'inverse : c'est le changement de données (state) qui déclenche un re-render de la vue. 3. Les fragments
<> </> ou <Fragment> servent uniquement à regrouper plusieurs éléments JSX sans ajouter de nœud DOM supplémentaire. 4. Où se trouve le JSX
Le JSX est ce qui est retourné par le composant, donc dans le return. C'est lui qui décrit l'interface à afficher. 5. Tableau de dépendances dans useEffect
React surveille les valeurs dans ce tableau. Si l'une d'elles change entre deux renders, l'effet se redéclenche. C'est donc bien ce qui contrôle quand il s'exécute. 6. Render = actualisation navigateur
Un render React est une mise à jour du DOM virtuel, ciblée et partielle. Un Ctrl+R recharge toute la page, réinitialise le state, refait toutes les requêtes, etc. 7. Hook pour les call API
useEffect permet d'exécuter du code après le render, ce qui est parfait pour les effets de bord comme les appels API. useState stocke les données, mais ne les fetch pas. 8. Transmission des props
React suit un flux de données unidirectionnel (one-way data flow) : les données descendent du parent vers l'enfant, jamais l'inverse directement. 9. && dans le rendu conditionnel
condition && <Composant /> signifie "si la condition est vraie, affiche le composant". Il n'y a pas de branche "sinon", c'est donc un simple if. 10. Balise JSX invalide
En JSX, class est un mot réservé JavaScript, donc React utilise className. Toutes les autres balises sont valides. 11. Opérateur ternaire requis
Dans le return, on écrit du JSX qui est une expression JavaScript. Un if/else classique est une instruction, pas une expression, donc il ne peut pas être utilisé directement. Le ternaire condition ? A : B est lui une expression, d'où son usage obligatoire. 12. [] dans useEffect
Un tableau vide signifie "aucune dépendance à surveiller", donc l'effet ne se déclenche qu'une fois, au montage initial du composant (équivalent d'un componentDidMount). 13. Spread operator
{...obj} crée une copie superficielle d'un objet sans modifier l'original. C'est essentiel en React car le state doit être traité comme immuable. 14. Ajouter "Tom" au state tableau
On ne peut pas muter directement le state avec push. Il faut créer un nouveau tableau avec le spread operator [...state, "Tom"] et le passer à setState, ce qui déclenche un re-render propre.
