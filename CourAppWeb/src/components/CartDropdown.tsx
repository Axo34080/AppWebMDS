import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartDropdown() {
  const { cartItems, getCartTotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-lg p-4">
        <p className="text-center text-slate-600 py-4">Votre panier est vide</p>
      </div>
    )
  }

  const displayItems = cartItems.slice(0, 3)
  const hasMore = cartItems.length > 3

  return (
    <div className="absolute right-0 top-full mt-2 w-96 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 border-b border-slate-200">
        <h3 className="font-semibold text-slate-900">
          Panier ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} articles)
        </h3>
      </div>

      <div className="max-h-80 overflow-y-auto">
        {displayItems.map(item => (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            className="flex gap-3 p-4 hover:bg-slate-50 transition-colors border-b border-slate-100"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-contain bg-slate-50 rounded"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-slate-900 line-clamp-2">
                {item.title}
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                {item.quantity} × ${item.price.toFixed(2)}
              </p>
            </div>
            <div className="text-sm font-semibold text-slate-900">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </Link>
        ))}

        {hasMore && (
          <div className="p-3 text-center text-sm text-slate-600 bg-slate-50">
            + {cartItems.length - 3} autres articles
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-200 bg-slate-50">
        <div className="flex justify-between mb-3">
          <span className="font-medium text-slate-900">Total</span>
          <span className="font-bold text-slate-900">${getCartTotal().toFixed(2)}</span>
        </div>
        <Link
          to="/cart"
          className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 rounded-lg transition-colors"
        >
          Voir le panier
        </Link>
      </div>
    </div>
  )
}

export default CartDropdown
