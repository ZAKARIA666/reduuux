
import { v4 as uuidv4 } from 'uuid';
import { ADD , DELETE } from '../actions/types';
const todo=[
{
  id:uuidv4,
  complete:false,
  title:"task"
}

]
const todoReducer=(state=todo,action)=>{
switch (action.type) {
    case ADD: return [...state,{titele:action.payload, id:uuidv4,complete:false,}]
    case DELETE: return state.filter(el=>el.id!==action.payload)
  default: return state
   
}

}
export default todoReducer