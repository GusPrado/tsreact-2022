import React, { useEffect, useRef, useState } from 'react';
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
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo: Todo) => {
    if (!isEditing && !todo.isDone) {
      setIsEditing(true);
    }
  };

  const handleChange = (value: string) => {
    setEditTodo(value);
  };

  const handleSave = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setIsEditing(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditing]);

  return (
    <form className='todos__item' onSubmit={(e) => handleSave(e, todo.id)}>
      {isEditing ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => handleChange(e.target.value)}
          className='todos__item--text'
        />
      ) : todo.isDone ? (
        <s className='todos__item--text'>{todo.todo}</s>
      ) : (
        <span className='todos__item--text'>{todo.todo}</span>
      )}
      <>
        <span className='todos__item--icon' onClick={() => handleEdit(todo)}>
          <AiFillEdit />
        </span>
        <span
          className='todos__item--icon'
          onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete />
        </span>
        <span className='todos__item--icon' onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </>
    </form>
  );
};

export default TodoItem;
