import { useState } from "react";
import styles from "../css/Form.module.css";
const Form = ({ todos, setTodos }) => {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          {" "}
          <input
            className={styles.mordernInput}
            type="text"
            value={todo.name}
            placeholder="Enter Todo item"
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
          />
          <button className={styles.mordernButton} type="submit">
            {" "}
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
