import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setValue("");
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onClick={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default App;

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
