import styles from "../css/TodoItem.module.css";
const TodoItem = ({ todo, todos, setTodos }) => {
  function handleDelete(item) {
    setTodos(todos.filter((x) => x !== item));
  }
  function handleClick(name) {
    setTodos(todos.map((x) => (x.name === name ? { ...x, done: !x.done } : x)));
  }
  const className = todo.done ? styles.completed : styles.new;
  return (
    <div className={styles.item}>
      {" "}
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(todo.name)}>
          {todo.name}
        </span>
        <span>
          {" "}
          <button
            onClick={() => handleDelete(todo)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>{" "}
      </div>{" "}
      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
