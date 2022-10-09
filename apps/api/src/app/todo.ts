import { Express } from 'express';

interface Todo {
  title: string;
  status: boolean;
}

const todos: Todo[] = [
  { title: 'Todo 1', status: false },
  { title: 'Todo 2', status: false },
];

export function addTodoRoutes(app: Express) {
  app.get('/api/todos', (req, resp) => resp.send(todos));
  app.post('/api/addTodo', (req, resp) => {
    const newTodo: Todo = {
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
      status: false,
    };
    todos.push(newTodo);
    resp.send(newTodo);
  });
}
