export default function Todos(props) {
  const task = props.task;

  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    props.toggleDone(task);
  }

  return (
    <li className="task">
      <div className="task-details">
        <div></div>
        <p>
          <span>
            <input
              type="checkbox"
              onChange={handleStatusChange}
              value={task.done}
            />
            {task.done === true ? <del>{task.title}</del> : task.title}
          </span>
        </p>
      </div>
      <div onClick={handleDelete}>
        <button className="remove"> remove </button>
      </div>
    </li>
  );
}
