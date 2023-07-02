import { useContext } from "react";
import { TodoContext } from "../UseContext/TodoContext";

export const TodoSearch = () => {

  const {valueChange, setvalueChange} = useContext(TodoContext)

  const ChangeValue = ({target})=>{
    const {value} = target
    setvalueChange(value)
  }


  return (
    <div className="form">
      <input
        value={valueChange}
        type="text"
        name="title"
        id="title"
        placeholder="Busca aquí..."
        onChange={ChangeValue}
      />
    </div>
  );
};
