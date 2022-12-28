import { 
  Button,
  Input,
} from '@vkontakte/vkui';
import React, { useState } from 'react';
import { useTodos } from '../store';

const NewTodo = () => {
  const [text, setText] = useState('');
  const addTodo = useTodos((state) => state.addTodo);
  const handleAddTodo = () => {
    addTodo(text);
  };

  return (
    <>
      <Input
        autoFocus
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
        placeholder="Type here..."
        top="Add new todo"
        type="text"
        value={text || ''}
            />

      <Button onClick={handleAddTodo}>
        Save
      </Button>
    </>
  );
};

export { NewTodo };
