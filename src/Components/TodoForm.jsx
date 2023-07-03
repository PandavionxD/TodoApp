import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { TodoContext } from "../UseContext/TodoContext";


export const TodoForm = () => {
  const {AddTodo,setmodal} = useContext(TodoContext)
  
  const { valueForm, onResetForm, description, title, onChangeForm } = useForm({
    description: "",
    title: "",
  });
  const EnviarData = (event) => {
    AddTodo(title,description)  
    event.preventDefault()
    // onResetForm() 
    setmodal(false)
  };

  const CloseModal = ()=>{
    setmodal(false)
  }

  return (
    <form className="form" onSubmit={EnviarData}>
      <label> Agregar TODO </label>
      <input
        onChange={onChangeForm}
        type="text"
        placeholder="Aquí el título"
        name="title"
        id="title"
      />
      <textarea
        onChange={onChangeForm}
        placeholder="Aquí la descripción"
        className="tarea"
        name="description"
        id="description"
      ></textarea>
      <div className="botones">
        <button type="submit" className="btn__enviar">
          Enviar
        </button>
        <button type="button"  onClick={CloseModal} className="btn__cancelar">
          Cancelar
        </button>
      </div>
    </form>
  );
};
