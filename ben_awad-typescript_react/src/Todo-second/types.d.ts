type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (value: string) => void;
