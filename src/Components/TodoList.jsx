import { useContext } from "react";
import { TodoContext } from "../UseContext/TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { Todos } = useContext(TodoContext);

  return (
    <>
      <div className="card__container">
        {Todos.map((todo, id) => (
          <TodoItem todo={todo} key={id} />
        ))}
      </div>
    </>
  );
};
