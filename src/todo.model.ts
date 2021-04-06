export interface Todo {
  id: string;
  text: string | undefined;
}

export interface TodoListProps {
  items: {
    id: string;
    text: string | undefined;
  }[];
  
  onDeleteTodo: (id: string) => void;
}
