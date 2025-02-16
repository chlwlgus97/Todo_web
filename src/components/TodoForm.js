// src/components/TodoForm.js
import React, { useRef } from "react";

const TodoForm = ({ addTodo }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputRef.current.value.trim();
    if (title) {
      addTodo(title);
      inputRef.current.value = "";
    } else {
      alert("내용을 입력하세요.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todolist-form">
      <span className="inp-box">
        <input type="text" ref={inputRef} />
        <button type="submit" className="btn add-btn">
          추가
        </button>
      </span>
    </form>
  );
};

export default TodoForm;
