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
