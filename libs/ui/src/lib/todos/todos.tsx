import { Todo } from '@jj-org/data';
import styles from './todos.module.css';

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Todo[];
  updateTodoStatus(todo: Todo): void;
  addToDO(): void;
}

export function Todos({ todos = [], updateTodoStatus, addToDO }: TodosProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Todos!</h1>
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
      <button id={'add-todo'} onClick={addToDO}>
        Add Todo
      </button>
    </div>
  );
}

export default Todos;
