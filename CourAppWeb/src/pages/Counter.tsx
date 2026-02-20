import { useEffect, useState } from "react"

// Page Compteur : affiche un nombre et permet de l'incrémenter manuellement ou automatiquement
function Counter() {
  // Valeur actuelle du compteur
  const [count, setCount] = useState(0)

  // Déclenche l'auto-incrément à chaque changement de count
  useEffect(() => {
   incrementCounter()
  }, [count]);
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-slate-900">Compteur</h1>
      <div className="bg-white border border-slate-200 rounded-xl p-12 shadow-sm">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-7xl font-bold text-slate-900">
            {count}
          </div>
          <button
            onClick={() => setCount(count + 1)}
            className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            Incrémenter
          </button>
        </div>
      </div>
    </div>
  )

  // Incrémente automatiquement le compteur de 1 après 1 seconde
  function incrementCounter() {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000)
}
}
export default Counter
