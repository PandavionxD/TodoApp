import { useContext } from "react"
import { TodoContext } from "../UseContext/TodoContext"

export const TodoButton = () => {

  const {modal,setmodal} = useContext(TodoContext)

  const OpenModal =()=>{
    setmodal(!modal)
  }

  return (
    <button className="btn"  onClick={OpenModal}  > + </button>
    )
}
