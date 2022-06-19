import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Todo } from '../../model';

import './styles.css';

type TodoItemProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem = ({ todo, todos, setTodos }: TodoItemProps) => {
  return (
    <form className='todos__item'>
      <span className='todos__item--text'>
        {todo.todo}
        <div>
          <span className='todos__item--icon'>
            <AiFillEdit />
          </span>
          <span className='todos__item--icon'>
            <AiFillDelete />
          </span>
          <span className='todos__item--icon'>
            <MdDone />
          </span>
        </div>
      </span>
    </form>
  );
};

export default TodoItem;
