import axios from "axios";

const API_BASE_URL = "/web/todo"; // 백엔드 API URL

// 할 일 목록 가져오기
export const fetchTodos = async () => {
  const response = await axios.get(`${API_BASE_URL}/getTodo`);
  return response.data;
};

// 할 일 추가
export const createTodo = async (title) => {
  const response = await axios.post(`${API_BASE_URL}/createTodo`, { title });
  return response.data;
};

// 할 일 수정
export const modifyTodo = async (idx, title, done) => {
  const response = await axios.put(`${API_BASE_URL}/modifyTodo`, {
    done,
    idx,
    title,
  });
  return response.data;
};

// 할 일 삭제
export const removeTodo = async (idx, title) => {
  const response = await axios.delete(`${API_BASE_URL}/removeTodo`, {
    data: { title, idx },
  });
  return response.data;
};
