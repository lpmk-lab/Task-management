import React from "react";
import Todo from "./components/Todo";
import InlineCom from "./components/CssExample/InlineCom";
import OutLineCom from "./components/CssExample/OutLineCom";
import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <Header />

      <Todo />
    </div>
  );
};

export default App;
