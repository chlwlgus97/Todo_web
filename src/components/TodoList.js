import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { fetchTodos, createTodo, modifyTodo, removeTodo } from "../api/TodoApi";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  // 할 일 목록 가져오기
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const data = await fetchTodos();
      setTodos(data);
      console.log("🔥 ~ loadTodos ~ data:", data);
    } catch (error) {
      console.error("할 일 목록을 불러오는 중 오류 발생:", error);
    }
  };

  // 새로운 할 일 추가
  const handleAddTodo = async () => {
    if (!newTitle.trim()) return alert("내용을 입력하세요.");
    await createTodo(newTitle);
    setNewTitle("");
    loadTodos();
  };

  // 할 일 수정
  const handleEditTodo = async (idx, title, done) => {
    await modifyTodo(idx, title, done);
    console.log("🔥 ~ handleEditTodo ~ title:", title);
    loadTodos();
  };

  // 할 일 삭제
  const handleDeleteTodo = async (idx, title) => {
    await removeTodo(idx, title);
    loadTodos();
  };

  return (
    <div className="todolist">
      <h1 className="main-title">To-Do List</h1>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAddTodo}>추가</button>
      <ul className="todolist-box">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            editTodo={handleEditTodo}
            deleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
