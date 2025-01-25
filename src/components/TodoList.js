import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { useSelector } from '../../node_modules/react-redux/dist/react-redux';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
