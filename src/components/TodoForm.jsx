import { useState } from 'react'

function TodoForm({addTodo}) {
    const [todoInput, setTodoInput] = useState('');
    
    function handleInput(event)
    {
      setTodoInput(event.target.value);
    }

    function handleSubmit(event)
    {
        event.preventDefault();

        if (todoInput.trim().length === 0) {
          return;
        }

        addTodo(todoInput);
        
        setTodoInput('');
    }

  return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-input"
            onChange={handleInput}
            value = {todoInput}
            placeholder="What do you need to do?"
          />
        </form>
    </div>
  )
}

export default TodoForm