import { IoMdRemoveCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import '../css/Todo.css'
import { useState } from "react";

const Todo = ({todo, onDeleteTodo, onUpdateTodo}) => {

  const {id, content} = todo;

  const [editable, setEditable] = useState(false);
  const [editTodo, setEditTodo] = useState(content);
  
  const deleteTodo = () => {
    onDeleteTodo(id)
  }

  const updateTodo = () => {
    const request = {
      id : id,
      content : editTodo
    }
    onUpdateTodo(request);
    setEditable(false);
  }
  
  return (
    <div className="container">
        <div>
            {
              editable ? <input
              style={{width: "380px"}} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='todo-input' type="text" /> : content
            }
        </div>
        <div>
            <IoMdRemoveCircleOutline className="icons" onClick={deleteTodo}/>
            {
              editable ?  <FaCheck className="icons" onClick={updateTodo}/> 
              : <MdEdit className="icons" onClick={() => setEditable(true)} />
            }
            
            

        </div>
    </div>
  )
}

export default Todo