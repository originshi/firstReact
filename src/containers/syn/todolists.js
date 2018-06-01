import {connect} from 'react-redux';
import TodoList from './../../components/syn/todolist';
import { ADD,TOGGLE,SHOW,add,toggle,show,COMPLETED,UNCOMPLETED,ALL} from '../../actions/syn';
function filterTodos(state,todos){
   switch(state.showFilter){
    case ALL:
       return todos;
    break;
    case COMPLETED:
    return todos.filter(t=>t.completed)
       break;
       case UNCOMPLETED:
       return todos.filter(t=>!t.completed)
       break;
   }
}
function stateToProps(state){
    return {
        todos:filterTodos(state,state.todos)
    }
}
function dispatchToProps(dispatch){
 return {
     toggle:(id)=>{
         dispatch(toggle(id))
     }
 }
}
const TodoListc=connect(stateToProps,dispatchToProps)(TodoList);
export default TodoListc;