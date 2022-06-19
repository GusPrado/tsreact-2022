import React from 'react';
import { Todo } from '../../model';
import TodoItem from '../TodoItem';

import './styles.css';

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className='container'>
      <div className='todos'>
        <span className='todos__heading'>Active Tasks</span>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className='todos completed'>
        <span className='todos__heading'>Completed Tasks</span>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
