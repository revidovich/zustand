import { Checkbox, Text, } from '@vkontakte/vkui';
import { useFilter, useTodos } from '../store';

const Todo = ({ id, title, completed }) => {
  const toggleTodo = useTodos((state) => state.toggleTodo); // это типа юзСелект

  return (
    <Checkbox defaultChecked={completed} onChange={() => toggleTodo(id)}>
      {title}
    </Checkbox>
  );
};

const TodoList = () => {
  const filter = useFilter((state) => state.filter);
  const todos = useTodos((state) => {
    switch (filter) {
      case 'completed':
        return state.todos.filter((todo) => todo.completed);
      case 'uncompleted':
        return state.todos.filter((todo) => !todo.completed);
      default:
        return state.todos;
    }
  });

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
};

export { TodoList };
