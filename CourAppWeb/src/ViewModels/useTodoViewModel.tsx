import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

// Modèle : structure d'une tâche
export interface TodoItem {
  id: string
  text: string
  done: boolean
}

// ViewModel : contient tout l'état et la logique métier du Todo
export function useTodoViewModel() {
  // Contenu de l'input contrôlé par React
  const [input, setInput] = useState("")
  // Liste des tâches typée avec l'interface TodoItem
  const [todos, setTodos] = useState<TodoItem[]>([])

  // Ajoute une nouvelle tâche si l'input n'est pas vide, puis le réinitialise
  function handleAdd() {
    const trimmed = input.trim()
    if (!trimmed) return
    setTodos([...todos, { id: uuidv4(), text: trimmed, done: false }])
    setInput("")
  }

  // Inverse l'état "done" de la tâche correspondant à l'id reçu
  function handleToggle(id: string) {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo))
  }

  // Supprime la tâche correspondant à l'id reçu de la liste
  function handleDelete(id: string) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return { input, setInput, todos, handleAdd, handleToggle, handleDelete }
}
