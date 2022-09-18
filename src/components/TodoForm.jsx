import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState('')

  const handleInput = (event) => setTodoInput(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (todoInput.trim().length === 0) {
      return
    }

    addTodo(todoInput)

    setTodoInput('')
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          onChange={handleInput}
          value={todoInput}
          placeholder="What do you need to do?"
        />
      </form>
    </div>
  )
}

export default TodoForm
