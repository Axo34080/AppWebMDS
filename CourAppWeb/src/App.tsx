import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartProvider, useCart } from './context/CartContext'
import { useState } from 'react'
import Home from './pages/Home'
import FormPage from './pages/FormPage'
import Counter from './pages/Counter'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Todo from './Views/Todo'
import CartDropdown from './components/CartDropdown'

function Navigation() {
  const { getCartCount, justAdded } = useCart()
  const cartCount = getCartCount()
  const [showDropdown, setShowDropdown] = useState(false)

  // Auto-show dropdown when item is added
  const shouldShowDropdown = showDropdown || justAdded

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
            >
              Accueil
            </Link>
            <Link
              to="/form"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
            >
              Connexion
            </Link>
            <Link
              to="/counter"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
            >
              Compteur
            </Link>
            <Link
              to="/products"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
            >
              Produits
            </Link>
            <Link
              to="/todo"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
            >
              Todo
            </Link>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/cart"
              className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all block"
            >
              🛒 Panier
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-slate-900 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {shouldShowDropdown && <CartDropdown />}
          </div>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Navigation />

          {/* Pages */}
          <div className="pt-16">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </div>
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
