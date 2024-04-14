import React, { useReducer, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

type Todo = { id: number; text: string };
type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number }
  | { type: "EDIT"; id: number; text: string }
  | { type: "ADD_FROM_LOCAL_STORAGE"; todos: Todo[] }; // Thêm action ADD_FROM_LOCAL_STORAGE vào ActionType

const todoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Math.random(), text: action.text }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case "ADD_FROM_LOCAL_STORAGE": // Xử lý action ADD_FROM_LOCAL_STORAGE
      return action.todos;
    default:
      throw new Error("Loại hành động không hợp lệ");
  }
};

const getTodosFromLocalStorage = (): Todo[] => {
  const todosString = localStorage.getItem("todos");
  return todosString ? JSON.parse(todosString) : [];
};

const LearnUseReducer = () => {
  const [todos, dispatch] = useReducer(
    todoReducer,
    [],
    getTodosFromLocalStorage
  );
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [editText, setEditText] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (editTodo) {
      setEditText(editTodo.text);
    }
  }, [editTodo]);

  const onAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (editText.trim() === "") {
      alert("Vui lòng nhập nhiệm vụ");
    } else {
      if (editTodo) {
        dispatch({ type: "EDIT", id: editTodo.id, text: editText });
        setEditTodo(null);
      } else {
        dispatch({ type: "ADD", text: editText });
      }
      setEditText("");
    }
  };

  const onEditTodo = (todo: Todo) => {
    setEditTodo(todo);
  };

  const onRemoveTodo = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa nhiệm vụ này không?")) {
      dispatch({ type: "REMOVE", id });
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <form onSubmit={onAddTodo} className="space-y-2">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
        >
          Thêm Nhiệm Vụ mới
        </button>
      </form>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between border-b border-gray-300 py-2"
          >
            {todo.text}
            <div>
              <button
                onClick={() => onEditTodo(todo)}
                className="text-blue-500 hover:text-blue-600 mr-2"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                onClick={() => onRemoveTodo(todo.id)}
                className="text-red-500 hover:text-red-600"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearnUseReducer;
