// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.css';

interface Todo {
  title: string;
  status: boolean;
}

const defaultTodo: Todo = {
  title: 'new Todo',
  status: false,
};

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  const updateTodoStatus = (todo: Todo): void => {
    const indexOfTodoToBeUpdated = todos.findIndex((eachTodo) => {
      return eachTodo.title === todo.title;
    });
    const newArray = [...todos];
    newArray[indexOfTodoToBeUpdated].status = !todo.status;
    setTodos(newArray);
  };
  const addToDO = (todo: Todo): void => {
    setTodos((existingToDo) => [...existingToDo, todo]);
  };
  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((t) => (
          <li className={'todo'} key={t.title}>
            <input
              type="checkbox"
              id={t.title}
              checked={t.status}
              onChange={() => updateTodoStatus(t)}
            />
            {t.title}
          </li>
        ))}
      </ul>
      <button
        id={'add-todo'}
        onClick={() => {
          addToDO(defaultTodo);
        }}
      >
        Add Todo
      </button>
    </>
  );
};
export default App;
