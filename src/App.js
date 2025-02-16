// src/App.js
import React from "react";
import TodoList from "./components/TodoList";
import "./App.css"; // 스타일링을 위한 CSS 파일

const App = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
