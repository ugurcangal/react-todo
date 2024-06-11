import Todo from "./Todo";


const TodoList = ( {todos, onDeleteTodo, onUpdateTodo} ) => {
  return (
    <div style={{width:'100%', marginTop:'50px'}}>
        {
          todos && todos.map((todo) => (
            <Todo key={todo.id} todo = {todo} onDeleteTodo = {onDeleteTodo} onUpdateTodo= {onUpdateTodo}/>
          ))
        }
    </div>
  )
}

export default TodoList