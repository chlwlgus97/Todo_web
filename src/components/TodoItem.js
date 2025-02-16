import React, { useState } from "react";

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  const { idx, title, done } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = async () => {
    if (!newTitle.trim()) return alert("내용을 입력하세요.");

    await editTodo(idx, newTitle, done);
    setIsEditing(false);
  };

  const handleToggle = async () => {
    const updatedDone = done === 0 ? 1 : 0; // 0이면 1, 1이면 0으로 변경
    await editTodo(idx, title, updatedDone); // 기존 title 유지하면서 done만 변경
  };

  return (
    <li>
      <input type="checkbox" checked={done === 1} onChange={handleToggle} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleEdit}>저장</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: done === 1 ? "line-through" : "none" }}
          >
            {title}
          </span>
          <button onClick={() => setIsEditing(true)}>수정</button>
        </>
      )}
      <button onClick={() => deleteTodo(idx, title)}>삭제</button>
    </li>
  );
};

export default TodoItem;
