import { useState } from 'react'

function FormPage() {
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Validation et assainissement des données
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error('Email invalide')
      }

      if (formData.password.length < 6) {
        throw new Error('Le mot de passe doit contenir au moins 6 caractères')
      }

      if (isSignup) {
        if (!formData.username || formData.username.length < 3) {
          throw new Error('Le nom d\'utilisateur doit contenir au moins 3 caractères')
        }
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Les mots de passe ne correspondent pas')
        }
      }

    
      const sanitizedData = {
        email: formData.email.trim().toLowerCase(),
        username: isSignup ? formData.username.trim() : undefined,
        password: formData.password
      }

      
      const endpoint = isSignup ? '/api/signup' : '/api/login'

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sanitizedData)
      })

      if (!response.ok) {
        throw new Error('Erreur lors de la requête')
      }

      const data = await response.json()
      console.log('Réponse API:', data)

      

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue')
      console.error('Erreur:', err)
    } finally {
      setLoading(false)
    }
  }

  const toggleMode = () => {
    setIsSignup(!isSignup)
    setFormData({ email: '', username: '', password: '', confirmPassword: '' })
    setError('')
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8 text-slate-900">
            {isSignup ? 'Inscription' : 'Connexion'}
          </h1>

          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              placeholder="votre@email.com"
              required
            />
          </div>

          {isSignup && (
            <div className="mb-6">
              <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="username">
                Nom d'utilisateur
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                placeholder="Votre nom d'utilisateur"
                required
              />
            </div>
          )}

          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              placeholder="********"
              required
            />
          </div>

          {isSignup && (
            <div className="mb-6">
              <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="confirmPassword">
                Confirmer le mot de passe
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                placeholder="********"
                required
              />
            </div>
          )}

          {!isSignup && (
            <div className="flex items-center justify-between mb-8">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 rounded border-slate-300" />
                <span className="text-sm text-slate-600">Se souvenir de moi</span>
              </label>
              <a href="#" className="text-sm text-slate-700 hover:text-slate-900">
                Mot de passe oublié?
              </a>
            </div>
          )}

          {error && (
            <div className={`bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm ${isSignup ? 'mt-8' : 'mt-6'}`}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors ${isSignup && !error ? 'mt-8' : error ? 'mt-4' : ''}`}
          >
            {loading ? "Chargement..." : (isSignup ? "S'inscrire" : "Se connecter")}
          </button>

          <p className="text-center text-slate-600 text-sm mt-6">
            {isSignup ? "Déjà un compte?" : "Pas encore de compte?"}{' '}
            <button
              type="button"
              onClick={toggleMode}
              className="text-slate-900 hover:underline font-medium"
            >
              {isSignup ? "Se connecter" : "S'inscrire"}
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default FormPage
