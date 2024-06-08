
import '../App.css';

const TodoCreate = () => {
  return (
    <div className='todo-create'>
        <input className='todo-input' type="text" placeholder='Todo giriniz' />
        <button className='todo-create-button'>Todo oluştur</button>
    </div>
  )
}

export default TodoCreate