import { useRef } from "react"
import { useStore, actions } from "./store"
function App() {
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state
  const inputRef = useRef()
  return (
    <div>
      <h1>Todo</h1>
      <input
        ref={inputRef}
        value={todoInput}
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
        type="text"
        placeholder="Enter todo"
      />
      <button
        onClick={() => {
          dispatch(actions.addTodo(todoInput))
          dispatch(actions.setTodoInput(""))
          inputRef.current.focus()
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => dispatch(actions.removeTodo(index))}
              style={{ marginLeft: "20px" }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
