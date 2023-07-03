import { useContext } from "react";
import { TodoContext } from "../UseContext/TodoContext";
import { TodoItem } from "./TodoItem";
import { TodoMsj } from "./TodoMsj";
import { Modal } from "../modal/Modal";

export const TodoList = () => {
  const { Todos, Todos1 , modal} = useContext(TodoContext);

  return (
    <>
      {Todos.length === 0 && <TodoMsj />}

      <div className="card__container">
        {Todos1.map((todo, id) => (
          <TodoItem todo={todo} key={id} />
        ))}
      </div>

      {modal && (
        <Modal>
          <div className="modal">
            <div className="form">
              <h1> {Todos[0].title}? </h1>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
