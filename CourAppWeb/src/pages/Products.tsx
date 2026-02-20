import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

// Structure d'un produit retourné par l'API (version simplifiée pour la liste)
interface Product {
    id: number
    title: string
    price: number
    image: string
}

// Page Produits : récupère la liste depuis l'API au montage et l'affiche en grille
function Products() {
    // Liste des produits chargés depuis l'API
    const [products, setProducts] = useState<Product[]>([])
    const { addToCart } = useCart()

    // Appel API au montage du composant (tableau vide = une seule fois)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Erreur API:', err))
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8 text-slate-900">Nos Produits</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all"
                    >
                        <Link to={`/products/${product.id}`}>
                            <div className="aspect-square bg-slate-50 flex items-center justify-center p-8">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </Link>
                        <div className="p-6">
                            <Link to={`/products/${product.id}`}>
                                <h3 className="text-base font-semibold text-slate-900 hover:text-slate-700 mb-3 line-clamp-2 h-12">
                                    {product.title}
                                </h3>
                            </Link>
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-bold text-slate-900">
                                    ${product.price}
                                </p>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        addToCart({
                                            id: product.id,
                                            title: product.title,
                                            price: product.price,
                                            image: product.image
                                        })
                                    }}
                                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    + Panier
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
