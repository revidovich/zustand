import { nanoid } from 'nanoid'; //import { v4 as uuidv4 } from "uuid";
import create from 'zustand';
import { persist, devtools } from 'zustand/middleware'
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
};

interface TodoState {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (todoId: string) => void;
  fetchTodos: () => void;
}

export const useTodos = create<TodoState>(devtools(persist((set, get) => ({
  todos: [
    { id: 1, title: 'fall in love', completed: true },
    { id: 2, title: 'buy an apartments', completed: false },
  ],
  loading: false,
  error: null,
  // addTodo: (title) => set(state => {
  //   const newTodo = { id: nanoid(), title, completed: false }

  //   return { todos: [...state.todos, newTodo] }
  // }),
  // addTodo: (title) => set(state => ({ todos: [...state.todos, { id: nanoid(), title, completed: false }] })),
  addTodo: (title: string) => {
    const newTodo = { id: nanoid(), title, completed: false }

    set({ todos: [...get().todos, newTodo] } as Todo)
  },
  toggleTodo: (todoId) => set({
    todos: get().todos.map(
      todo => todoId === todo.id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  }),
  fetchTodos: async () => {
    set({ loading: true })
    const myRes = [
      {
        "userId": 1,
        "id": 10,
        "title": "get a dog",
        "completed": false
      }
    ];
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'text/plain');
    myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
    const myRequest = new Request(myRes, {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    });

    try {
      const res = myRes // await fetch(myRequest)

      // if (!res.ok) throw new Error('Failed to fetch! Try again.')

      set({ todos: await res.json(), error: null })
    } catch (error) {
      set({ error: error.message })
    } finally {
      set({ loading: false })
    }
  }
}))))

export const useFilter = create(set => ({
  filter: 'all',
  setFilter: (value) => set({ filter: value })
}))
