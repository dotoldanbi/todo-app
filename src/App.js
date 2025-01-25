import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoContainer from './containers/TodoContainer';
import { useState, useCallback, useRef } from 'react';
import { faker } from '@faker-js/faker';

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoContainer />
    </TodoTemplate>
  );
}

export default App;
