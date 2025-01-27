import { createAction } from 'redux-actions';
import { handleActions } from 'redux-actions';
import { faker } from '@faker-js/faker';
import { useDispatch } from '../../node_modules/react-redux/dist/react-redux';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
let id = 1001;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  checked: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// const dispatch = useDispatch();
export const toggleAsync = (id) => (dispatch) => {
  console.log('toggleAsync');
  setTimeout(() => {
    dispatch(toggle(id));
  }, 1000);
};

let testArr = [];
testArr = createBulkTodos();
const initState = {
  input: '',
  todos: testArr,
};
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
    [INSERT]: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload),
    }),
    [TOGGLE]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo,
      ),
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
  },
  initState,
);

export default todos;

function createBulkTodos() {
  const array = [];
  for (let i = 0; i <= 1000; i++) {
    array.push({
      id: i,
      text: faker.lorem.sentence(),
      checked: false,
    });
  }
  return array;
}
