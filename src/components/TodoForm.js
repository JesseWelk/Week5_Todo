import { useState } from "react";
import { nanoid } from "nanoid";

export default function TodoForm(props) {
  const [title, setTitle] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      title: title,
      done: false,
      id: nanoid()
    };
    props.addTask(newTask);
    setTitle("");
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Add new task..."
            type="text"
            onChange={handleTitleChange}
            value={title}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
