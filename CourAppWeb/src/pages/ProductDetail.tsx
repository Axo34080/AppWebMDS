import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

// Structure complète d'un produit (avec description, catégorie et note)
interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

// Page de détail d'un produit : récupère le produit par son id depuis l'URL,
// affiche ses informations complètes et permet de l'ajouter au panier
function ProductDetail() {
  // Récupère le paramètre :id depuis l'URL (ex: /products/3)
  const { id } = useParams()
  const { addToCart } = useCart()
  // Produit chargé depuis l'API, null si pas encore reçu
  const [product, setProduct] = useState<Product | null>(null)
  // true pendant le chargement pour afficher un indicateur
  const [loading, setLoading] = useState(true)
  // Bascule à true 2 secondes après un ajout au panier pour feedback visuel
  const [added, setAdded] = useState(false)

  // Charge le produit correspondant à l'id dès que celui-ci change
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Erreur API:', err)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-xl text-slate-600">Chargement...</div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Produit introuvable</h1>
        <Link to="/products" className="text-slate-700 hover:underline">
          Retour aux produits
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/products" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6">
        ← Retour aux produits
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white border border-slate-200 rounded-xl p-8 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 object-contain"
          />
        </div>

        <div className="flex flex-col">
          <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">
            {product.category}
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl font-bold text-slate-900">
              ${product.price}
            </div>
            <div className="flex items-center gap-1 text-sm text-slate-600">
              <span>⭐ {product.rating.rate}</span>
              <span>({product.rating.count} avis)</span>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            {product.description}
          </p>

          <button
            onClick={() => {
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image
              })
              setAdded(true)
              setTimeout(() => setAdded(false), 2000)
            }}
            className="w-full md:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors"
          >
            {added ? "✓ Ajouté au panier" : "Ajouter au panier"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
