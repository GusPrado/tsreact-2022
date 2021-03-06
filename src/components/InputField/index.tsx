import React, { useRef } from 'react';

import './styles.css';

interface InputFieldProps {
  todo: string;
  setTodo: (todo: string) => void;
  handleAdd: (e: React.FormEvent) => void;
}

const Inputfield = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type='input'
        placeholder='Enter your task'
        className='input__box'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='input__submit' type='submit'>
        Go
      </button>
    </form>
  );
};

export default Inputfield;
