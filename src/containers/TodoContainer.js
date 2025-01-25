import React from 'react';
import { useSelector } from '../../node_modules/react-redux/dist/react-redux';
import TodoList from '../components/TodoList';

const TodoContainer = () => {
  const { todos } = useSelector((state) => ({ todos: state.todos.todos }));

  return (
    <div className="TodoList">
      <TodoList todos={todos} />
    </div>
  );
};

export default React.memo(TodoContainer);
