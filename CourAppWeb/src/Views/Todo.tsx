import { useTodoViewModel } from "../ViewModels/useTodoViewModel"

// View : uniquement le JSX, aucune logique — tout vient du ViewModel
function Todo() {
  const { input, setInput, todos, handleAdd, handleToggle, handleDelete } = useTodoViewModel()

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-slate-900">Todo</h1>

      {/* Formulaire d'ajout */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Nouvelle tâche..."
          className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
        >
          Ajouter
        </button>
      </div>

      {/* Liste des todos */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-lg shadow-sm"
          >
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggle(todo.id)}
              className="w-4 h-4 accent-slate-900 cursor-pointer"
            />
            <span className={`flex-1 text-sm ${todo.done ? "line-through text-slate-400" : "text-slate-700"}`}>
              {todo.text}
            </span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-slate-400 hover:text-red-500 transition-colors text-sm"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-slate-400 text-sm mt-8">Aucune tâche pour le moment.</p>
      )}
    </div>
  )
}

export default Todo
