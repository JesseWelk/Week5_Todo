import { useState } from "react";
import Todos from "./Todos";
import TodoForm from "./TodoForm";

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
  }
  function removeTask(chore) {
    const updatedTasks = tasks.filter(function (task) {
      return task.id !== chore.id;
    });
    setTasks(updatedTasks);
  }

  function toggleDone(chore) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === chore.id) {
        task.done = !task.done;

        return task;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Todos
            key={task.id}
            task={task}
            remove={removeTask}
            toggleDone={toggleDone}
          />
        ))}
      </ul>
      <TodoForm addTask={addTask} />
    </div>
  );
}
