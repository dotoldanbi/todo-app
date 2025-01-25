import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';
import { insert } from '../modules/todos';
import { useDispatch } from '../../node_modules/react-redux/dist/react-redux';
const TodoInsert = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  });

  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (e) => {
      dispatch(insert(value));
      setValue('');
      e.preventDefault();
    },
    [insert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        onChange={onChange}
        value={value}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
