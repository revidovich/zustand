import { Text } from '@vkontakte/vkui';
import { useTodos } from '../store';

const TotalTodos = () => {
  const count = useTodos((state) => state.todos.length);

  return <Text fontWeight="bold">Total: {count}</Text>;
};

export { TotalTodos };
