
import React from 'react'

const App = () => {
  return (
    <div>
      <h1>test</h1>
    </div>
  )
}

export default App







// Udemy Todo

// import React, { useState } from "react";
// import "./App.css";

// type FormElem = React.MouseEvent<HTMLFormElement, MouseEvent>;

// interface ITodo {
//   text: string;
//   complete: boolean;
// }

// const App: React.FC = () => {
//   const [value, setValue] = useState<string>("");
//   const [todos, setTodos] = useState<ITodo[]>([]);

//   const handleSubmit = (e: FormElem): void => {
//     e.preventDefault();
//     addTodo(value);
//     setValue("");
//   };

//   const addTodo = (text: string): void => {
//     const newTodos: ITodo[] = [...todos, { text, complete: false }];
//     setTodos(newTodos);
//   };

//   const completeTodo = (index: number): void => {
//     const newTodos: ITodo[] = [...todos];
//     newTodos[index].complete = !newTodos[index].complete;
//     setTodos(newTodos);
//   };

//   const deleteTodo = (index: number): void => {
//     const newTodos: ITodo[] = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <>
//       <h1>Todo List</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//       <section>
//         {todos.map((todo: ITodo, index: number) => (
//           <div key={index}>
//             <p style={{ textDecoration: todo.complete ? "line-through" : "" }}>
//               {todo.text}
//             </p>
//             <button type="button" onClick={() => completeTodo(index)}>
//               {todo.complete ? "Incomplete" : "complete"}
//             </button>
//             <button type="button" onClick={() => deleteTodo(index)}>
//               delete
//             </button>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// };

// export default App;




// WEBOTV

// import TaskList from "./WEBOTV/components/TaskList";
// import { Task } from "./Types";
// import TaskInput from "./WEBOTV/components/TaskInput";

// const initialState: Task[] = [
//   {
//     id: 2,
//     title: '次のTodo',
//     done: false,
//   },
//   {
//     id: 1,
//     title: '最初のTodo',
//     done: true,
//   },
// ]

// const App: React.FC = () => {
//   const [tasks, setTasks] = useState(initialState)

//   return (
//     <div>
//       <TaskInput tasks={tasks} setTasks={setTasks} />
//       <TaskList tasks={tasks} setTasks={setTasks} />
//     </div>
//   );
// };

// export default App;
