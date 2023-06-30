import { TodoButton, TodoList, TodoTitle, TodoSearch } from "./Components";
import "./TodoEstilos.scss";
import { ProviderContext } from "./UseContext/ProviderContext";

export const TodoApp = () => {
  return (
    <>
      <ProviderContext>
        <div className="container">
          <h1> 🫠🫠 TodoApp 🫠🫠 </h1>
          <hr />
          <TodoTitle />
          <TodoSearch />
          <TodoList />
          <TodoButton />
        </div>
      </ProviderContext>
    </>
  );
};
