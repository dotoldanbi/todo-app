import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const onPageChange = (page) => {};

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
