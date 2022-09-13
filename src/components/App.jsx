import logo from '../logo.svg';
import '../App.css';
import { useRef} from 'react';
import TodoList from './TodoList';
import Notodo from './NoTodo';
import TodoForm from './TodoForm';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: 'Finish React Series',
  //     isComplete: false,
  //     isEditing: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'Go Grocery',
  //     isComplete: true,
  //     isEditing: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'Take over world',
  //     isComplete: false,
  //     isEditing: false,
  //   },
  // ]);

  const [todos, setTodos] = useLocalStorage('todos',[]);

  // const [idForTodo, setIdForTodo] = useState(4);
  const idForTodo = useRef(1);
  // const [name, setName] = useState('');
  const [name, setName] = useLocalStorage('name','');

  function addTodo(todo) {
    setTodos([...todos, {
      id: idForTodo.current,
      title: todo,
      isComplete: false,
      isEditing: false,
    },]);

    idForTodo.current++;
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function completeTodo(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function markAsEditing(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function updateTodo(event, id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }
        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function CancleEdit(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function remaining() {
    return todos.filter(todo => !todo.isComplete).length;
  }

  function clearCompleted() {
    setTodos(todos.filter(todo => !todo.isComplete));
  }

  function checkAll() {
    const updatedTodos = todos.map(todo => {
      todo.isComplete = true;
      return todo;
    });

    setTodos(updatedTodos);
  }

  function todosFiltered(filter) {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'active') {
      return todos.filter(todo => !todo.isComplete);
    }
    else if (filter === 'complete') {
      return todos.filter(todo => todo.isComplete);
    }
  }

  function unCheckAll() {
    const updatedTodos = todos.map(todo => {
      todo.isComplete = false;
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <div className="name-container">
          <h2>Enter Your Name</h2>
          <form action="#">
            <input type="text"
              className="todo-input"
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder='Enter your name' />
          </form>
          {name && <p className="name-label">
            Hello, {name}
          </p>}
        </div>
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />

        {todos.length > 0 ? 
        (<TodoList
          todos={todos}
          completeTodo={completeTodo}
          markAsEditing={markAsEditing}
          CancleEdit={CancleEdit}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          remaining={remaining}
          clearCompleted={clearCompleted}
          checkAll={checkAll}
          todosFiltered={todosFiltered}
          unCheckAll={unCheckAll}
          test='ggg'
          a='gg'
        />) : <Notodo />
        }
      </div>
    </div>

  );
}

export default App;
