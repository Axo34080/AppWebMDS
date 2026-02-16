import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import FormPage from './pages/FormPage'
import Counter from './pages/Counter'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
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
              </div>
            </div>
          </div>
        </nav>

        {/* Pages */}
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
