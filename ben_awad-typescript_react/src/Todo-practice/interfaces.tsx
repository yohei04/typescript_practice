export interface ITodo {
  id: number;
  text: string;
  complete: boolean;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  todos: ITodo[];
  todo: ITodo | null;
}


