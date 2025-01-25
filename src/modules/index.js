import { combineReducers } from '../../node_modules/redux/dist/redux';
import todos from './todos';
const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
