import { useState } from "react";
import { TodoContext } from "./TodoContext";

export const ProviderContext = ({ children }) => {
  const Todos_v1 = [
    {
      title: "Recolectar la piedra del alma",
      description: "Piedra ubicada en un lugar lejano en el espacio",
      completed: false,
    },
    {
      title: "Recolectar la piedra del poder",
      description: "Piedra ubicada en un lugar lejano en el espacio",
      completed: true,
    },
    {
      title: "Recolectar la piedra del tiempo",
      description: "Piedra ubicada en un lugar lejano en el espacio",
      completed: true,
    },
    {
      title: "Recolectar la piedra de la mente",
      description: "Piedra ubicada en un lugar lejano en el espacio",
      completed: true,
    },
    {
      title: "Recolectar la piedra del espacio",
      description: "Piedra ubicada en un lugar lejano en el espacio",
      completed: false,
    },
    {
      title: "Recolectar la piedra de la realidad",
      description: "Piedra ubicada en un lugar lejano en el espacio",
      completed: false,
    },
  ];

  const [Todos, setTodos] = useState(Todos_v1);

  return <TodoContext.Provider value={{Todos}}>{children}</TodoContext.Provider>;
};
