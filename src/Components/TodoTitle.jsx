import { useContext } from "react";
import { TodoContext } from "../UseContext/TodoContext";

export const TodoTitle = () => {
  const { Todos } = useContext(TodoContext);

  const TodosCompleted = Todos.filter((todo) => todo.completed === true).length;

  const TodosTotal = Todos.length

  return <h3>Hay {TodosTotal} TODOS en total, y {TodosCompleted} TODOS completados 😅😅😅</h3>;
};
