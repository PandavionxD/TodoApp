import { useState } from "react";
import { TodoContext } from "./TodoContext";

export const ProviderContext = ({ children }) => {
  // const Todos_v1 = [
  //   {
  //     title: "Recolectar la piedra del alma",
  //     description: "Piedra ubicada en un lugar lejano en el espacio",
  //     completed: false,
  //   },
  //   {
  //     title: "Recolectar la piedra del poder",
  //     description: "Piedra ubicada en un lugar lejano en el espacio",
  //     completed: false,
  //   },
  //   {
  //     title: "Recolectar la piedra del tiempo",
  //     description: "Piedra ubicada en un lugar lejano en el espacio",
  //     completed: false,
  //   },
  //   {
  //     title: "Recolectar la piedra de la mente",
  //     description: "Piedra ubicada en un lugar lejano en el espacio",
  //     completed: false,
  //   },
  //   {
  //     title: "Recolectar la piedra del espacio",
  //     description: "Piedra ubicada en un lugar lejano en el espacio",
  //     completed: false,
  //   },
  //   {
  //     title: "Recolectar la piedra de la realidad",
  //     description: "Piedra ubicada en un lugar lejano en el espacio",
  //     completed: false,
  //   },
  // ];

  const valueStorage = "TodoApp_v1";
  const Local = localStorage.getItem(valueStorage);
  let localStorageValue;

  const [modal, setmodal] = useState(false);

  if (!Local) {
    localStorage.setItem(valueStorage, JSON.stringify([]));
    localStorageValue = [];
  } else {
    localStorageValue = JSON.parse(Local);
  }
  const [Todos, setTodos] = useState(localStorageValue);
  const [valueChange, setvalueChange] = useState("");

  let Todos1 = [];
  const ValueMin = valueChange.toLowerCase();

  if (!valueChange.length >= 1) {
    Todos1 = Todos;
  } else {
    Todos1 = Todos.filter((todo) => {
      const todoItemValue = todo.title.toLowerCase();
      return todoItemValue.includes(ValueMin);
    });
  }

  const PersitenciaLocalStorage = (newTodo) => {
    const stringyfi = JSON.stringify(newTodo);
    localStorage.setItem(valueStorage, stringyfi);
    setTodos(newTodo);
  };

  const deleteTodo = (id) => {
    const Todos1 = [...Todos];
    const index = Todos1.findIndex((todo) => {
      return todo.title === id;
    });
    Todos1.splice(index, 1);
    return PersitenciaLocalStorage(Todos1);
  };

  const completedTodo = (text) => {
    const Todos1 = [...Todos];
    const index = Todos1.findIndex((todo) => {
      return todo.title === text;
    });
    Todos1[index].completed = !Todos1[index].completed;
    return PersitenciaLocalStorage(Todos1);
  };

  const AddTodo = (title,description)=>{
    const todov1 = {
      title,
      description,
      completed:false,
    }
    console.log([todov1,...Todos])
    return PersitenciaLocalStorage([todov1,...Todos])
  }

  return (
    <TodoContext.Provider
      value={{
        AddTodo,
        Todos,
        setTodos,
        valueChange,
        setvalueChange,
        Todos1,
        completedTodo,
        deleteTodo,
        modal,
        setmodal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
