import { useContext } from "react";
import { TodoContext } from "../UseContext/TodoContext";

export const TodoItem = ({ todo }) => {
  const { title, description, completed } = todo;

  const { completedTodo, deleteTodo } = useContext(TodoContext);

  return (
    <>
      <div className="card">
        <h3  className={`${completed ? 'tachado' : ""}`} >
          {" "}
          <span  >
            {" "}
            <i
              onClick={() => completedTodo(title)}
              className={`check fa-regular fa-circle-check  ${
                completed ? "completed" : ""
              } `}
            ></i>{" "}
          </span>{" "}
          {title}{" "}
        </h3>
        <p  className={`${completed ? 'tachado' : ""}`}  > {description}   </p>
        <span onClick={() => deleteTodo(title)}>
          <i className="close fa-regular fa-circle-xmark"></i>
        </span>
      </div>


    </>
  );
};
