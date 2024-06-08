import { IoMdRemoveCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import '../css/Todo.css'

const Todo = () => {
  return (
    <div className="container">
        <div>
            Ben ilk todoyum
        </div>
        <div>
            <IoMdRemoveCircleOutline className="icons"/>
            <MdEdit className="icons" />
        </div>
    </div>
  )
}

export default Todo