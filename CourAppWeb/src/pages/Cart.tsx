import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Panier vide</h1>
        <p className="text-slate-600 mb-8">Votre panier ne contient aucun article</p>
        <Link
          to="/products"
          className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          Continuer mes achats
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-slate-900">Mon Panier</h1>
        <button
          onClick={clearCart}
          className="text-sm text-slate-600 hover:text-red-600 transition-colors"
        >
          Vider le panier
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Liste des articles */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex gap-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain bg-slate-50 rounded-lg"
              />

              <div className="flex-1">
                <Link
                  to={`/products/${item.id}`}
                  className="text-lg font-semibold text-slate-900 hover:text-slate-700 line-clamp-2"
                >
                  {item.title}
                </Link>
                <p className="text-2xl font-bold text-slate-900 mt-2">
                  ${item.price.toFixed(2)}
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center border border-slate-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-slate-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x border-slate-300">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-slate-100 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Supprimer
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-slate-600">Sous-total</p>
                <p className="text-xl font-bold text-slate-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Résumé */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-slate-200 rounded-xl p-6 sticky top-24">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Résumé</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-slate-600">
                <span>Sous-total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Livraison</span>
                <span>Gratuite</span>
              </div>
              <div className="border-t border-slate-200 pt-3 flex justify-between text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg transition-colors mb-3">
              Passer commande
            </button>

            <Link
              to="/products"
              className="block text-center text-sm text-slate-600 hover:text-slate-900"
            >
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
