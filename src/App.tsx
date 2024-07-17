import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import Forms from './components/Forms/Forms';
import Todos from './components/Todos/todos'; // Приведите путь к файлу Todos в соответствие с файловой системой

interface stateTypes {
  favorite: boolean;
  done: boolean;
  text: string;
}

export const App: React.FC = () => {
  const [todos, setTodos] = useState<stateTypes[]>([
    { favorite: false, text: 'Купить продукты', done: false },
    { favorite: false, text: 'Купить игры', done: false },
    { favorite: false, text: 'Купить детали', done: false },
    { favorite: false, text: 'Купить подписку', done: false },
  ]);
  const [text, setText] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);

  const deleteTodo = (indexOfDelete: number): void => {
    const removeTodo = todos.filter((_, index) => index !== indexOfDelete);
    setTodos(removeTodo);
  };

  const favorite = (indexOfFavorite: number): void => {
    const fav = todos.map((item, index) => {
      if (index === indexOfFavorite) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    setTodos(fav);
  };

  const createTodo = () => {
    setTodos([
      {
        text: text,
        favorite: false,
        done: check,
      },
      ...todos,
    ]);

    setText('');
    setCheck(false);
  };

  const checking = () => {
    setCheck(!check);
  };

  return (
    <div className="App">
      <Header />
      <Forms createTodo={createTodo} setText={setText} text={text} />
      <Todos deleteTodo={deleteTodo} favorite={favorite} todos={todos} />
    </div>
  );
};