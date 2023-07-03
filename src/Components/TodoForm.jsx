import { useForm } from "../hooks/useForm"

export const TodoForm = () => {

const { valueForm,onResetForm,description,title,onChangeForm  }= useForm({
    description:'',
    title:''
})


  return (
    <form className="form" >
        <label>  Agregar TODO </label>
        <input  onChange={onChangeForm} type="text" placeholder="Aquí el título" name="title" id="title"/>
        <textarea onChange={onChangeForm}  placeholder="Aquí la descripción" className="tarea" name="description" id="description"></textarea>
        <div className="botones">
            <button  className="btn__cancelar" >Cancelar</button>
            <button  className="btn__enviar" >Enviar</button>
        </div>
    </form>

  )
}
