
import './App.css';
import React,{ useState } from 'react'
import { useSelector,useDispatch } from "react-redux"
import { addTodo,deleteTodo} from './actions/todoAction';
function App() { 
  const [task, setTask ] =useState("")
  const todos=useSelector(state=>state.todoReducer)
  const dispatch=useDispatch()
  return (
    <div className="App">
      
      <input type="text" placeholder="add task..." onChange={(e)=>setTask(e.target.value)} />
      <button onClick={()=>dispatch(addTodo(task))}>add task</button>
        {todos.map(el=><div>
          <h2>{el.title}</h2>
          <button onClick={()=>dispatch(deleteTodo(el.id))}>delete</button>
          </div>)}
    
    </div>
  );
}

export default App;
