import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface Product {
    id: number
    title: string
    price: number
    image: string
}

function Products() {
    const [products, setProducts] = useState<Product[]>([])

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
                    <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all block"
                    >
                        <div className="aspect-square bg-slate-50 flex items-center justify-center p-8">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-base font-semibold text-slate-900 mb-3 line-clamp-2 h-12">
                                {product.title}
                            </h3>
                            <p className="text-2xl font-bold text-slate-900">
                                ${product.price}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Products
