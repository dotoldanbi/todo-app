import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useCallback, useRef } from 'react';
import { faker } from '@faker-js/faker';

function createBulkTodos() {
  const array = [];
  for (let i = 0; i <= 2500; i++) {
    array.push({
      id: i,
      text: faker.lorem.sentence(),
      checked: false,
    });
  }
  return array;
}

function App() {
  // [
  //   {
  //     id: 1,
  //     text: 'todo1',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: 'todo2',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: 'todo3',
  //     checked: false,
  //   },
  // ];
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // setTodos(todos.concat(todo));
    setTodos([...todos, todo]);
    nextId.current += 1;
  });

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
