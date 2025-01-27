import React, { useCallback } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.css';
import { toggle, remove } from '../modules/todos';
import { toggleAsync } from '../modules/todos';

import { useDispatch } from '../../node_modules/react-redux/dist/react-redux';

const TodoListItem = ({ todo }) => {
  const { id, text, checked } = todo;

  const dispatch = useDispatch();

  // 액션 크리에이터 직접 디스패치
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  // redux-thunk를 사용한 비동기 액션크리에이터 디스패치
  // thunk를 사용하더라도 디스패치를 해야 thunk에서 디스패치를 인자로 전달하므로
  // useDispatch는 항상 사용된다
  const onToggleAsync = useCallback(
    (id) => dispatch(toggleAsync(id)),
    [dispatch],
  );

  return (
    <div className="TodoListItem">
      <div className="checkbox" onClick={() => onToggleAsync(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
