import { Button } from '@vkontakte/vkui';
import { useFilter } from '../store';

const Filter = () => {
  const { filter, setFilter } = useFilter();

  return (
    <>
      <Button disabled={filter === 'all'} onClick={() => setFilter('all')}>
        All
      </Button>
      <Button
        disabled={filter === 'uncompleted'}
        onClick={() => setFilter('uncompleted')}
      >
        Not completed
      </Button>
      <Button
        disabled={filter === 'completed'}
        onClick={() => setFilter('completed')}
      >
        Completed
      </Button>
    </>
  );
};

export { Filter };
