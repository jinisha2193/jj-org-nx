// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Todo } from '@jj-org/data';
import { Todos } from '@jj-org/ui';
import { useEffect, useState } from 'react';
import styles from './app.module.css';

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
  const addToDO = (): void => {
    setTodos((existingToDo) => [...existingToDo, defaultTodo]);
  };
  return (
    <Todos
      todos={todos}
      updateTodoStatus={updateTodoStatus}
      addToDO={addToDO}
    />
  );
};
export default App;
