import { useContext, useEffect, useState } from "react";
import AddButton from "../components/shared/AddButton";
import DeleteIcon from "../components/shared/DeleteIcon";
import EditIcon from "../components/shared/EditIcon";
import { GlobalStore } from "../stores/MainStore";
import { useNavigate } from "react-router";

export default function Home() {
  // Hooks
  const { token, userData } = useContext(GlobalStore);
  const navigate = useNavigate();

  // States
  const [todos, setTodos] = useState([
    {
      name: "eat",
    },
    {
      name: "play",
    },
    {
      name: "study",
    },
  ]);

  // Protected Route
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <div className="h-full py-5 flex flex-col gap-5">
      <h1 className="my-5 text-4xl font-bold text-center">
        Welcome {userData?.username}
      </h1>
      <form className="flex gap-4">
        <input
          className="grow bg-white outline-0 border border-gray-300 rounded-lg px-4"
          type="text"
          placeholder="Write your task.."
        />
        <AddButton>Create</AddButton>
      </form>

      <div className="tasks flex flex-col gap-4">
        {todos.map((todo) => (
          <div
            key={todo.name}
            className="task group/parent bg-white shadow-lg flex items-center justify-between rounded-lg py-2 px-4"
          >
            <h2 className="text-lg font-bold tracking-wide capitalize flex flex-col gap-0.5 overflow-hidden">
              {todo.name}
              <span className="block -translate-x-full group-hover/parent:translate-x-0 duration-300 h-0.5 w-full bg-indigo-500"></span>
            </h2>
            <div className="icons flex items-center gap-2">
              <EditIcon />
              <DeleteIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
