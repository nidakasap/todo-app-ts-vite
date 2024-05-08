
interface ITodoType {
    isDone: boolean;
    id: string | number;
    task?: string; 
  }

type AddFn = (text: string) => Promise<void>;
type ToggleFn = (todo: ITodoType) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;


interface ITodoListFn {
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}