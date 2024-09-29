import { useState } from "react";

import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((x) => x.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer totalDone={completedTodos} totalTodos={totalTodos} />
    </div>
  );
};

export default Todo;
