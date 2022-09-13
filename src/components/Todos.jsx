import React from 'react'

function Todos({ todosFiltered, filter, completeTodo, markAsEditing, CancleEdit, updateTodo, deleteTodo }) {
    // const lists = todosFiltered(filter).sort((a, b) =>{
    //     const aId = a.id
    //     const bId = b.id
    //     return aId > bId ? -1 :1
    // })
    // console.log(lists)
    return (
        <>

            <ul className="todo-list">

                {todosFiltered(filter).map(todo => (

                    <li key={todo.id} className="todo-item-container">
                        <div className="todo-item">
                            <input type="checkbox"
                                checked={todo.isComplete ? true : false}
                                onChange={() => completeTodo(todo.id)}
                            />
                            {!todo.isEditing ?
                                (<span className={`todo-item-label ${todo.isComplete ? 'line-through' : ''}`}
                                    onDoubleClick={() => markAsEditing(todo.id)}>{todo.title}</span>)
                                : (<input type="text" defaultValue={todo.title} className="todo-item-input" onKeyDown={event => { if (event.key === 'Escape') { CancleEdit(todo.id) } else if (event.key === 'Enter') { updateTodo(event, todo.id) } }} onBlur={event => updateTodo(event, todo.id)} autoFocus />)}
                        </div>
                        <button onClick={() => deleteTodo(todo.id)} className="x-button">
                            <svg
                                className="x-button-icon"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </li>
                )).reverse()}

            </ul>
        </>
    )
}

export default Todos