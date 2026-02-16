function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-6xl font-bold mb-6 text-slate-900">
        Bienvenue
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl">
        Application web moderne construite avec React, TypeScript et Tailwind CSS
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="/products"
          className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
        >
          Voir les produits
        </a>
        <a
          href="/form"
          className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
        >
          Se connecter
        </a>
      </div>
    </div>
  )
}

export default Home
