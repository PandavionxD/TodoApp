import { useContext } from "react";
import { TodoContext } from "../UseContext/TodoContext";
import { TodoItem } from "./TodoItem";
import { TodoMsj } from "./TodoMsj";

export const TodoList = () => {
  const { Todos, valueChange, Todos1 } = useContext(TodoContext);

  return (
    <>
      {Todos.length === 0 && <TodoMsj />}

      <div className="card__container">
        {Todos1.map((todo, id) => (
          <TodoItem todo={todo} key={id} />
        ))}
      </div>
    </>
  );
};
