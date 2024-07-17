import React from 'react';

interface Todo {
  favorite: boolean;
  done: boolean;
  text: string;
}

interface TodosType {
  deleteTodo: (index: number) => void;
  favorite: (index: number) => void;
  todos: Todo[];
}

const Todos: React.FC<TodosType> = ({ deleteTodo, favorite, todos }) => {
  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <div className="todo" key={index}>
          <input 
            type="checkbox" 
            checked={todo.favorite} 
            onChange={() => favorite(index)} 
          />
          <span>{todo.text}</span>
          <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;