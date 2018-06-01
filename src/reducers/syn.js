import {ADD,TOGGLE,SHOW,add,toggle,show,COMPLETED,UNCOMPLETED,ALL} from '../actions/syn';
import {combineReducers} from 'redux';
function todos(state=[],action){
    switch(action.type){
        case ADD:
        return [
            ...state,
            action
        ]
        break;
        case TOGGLE:
        return state.map((n)=>{
            console.log(n,action)
            if(n.id==action.id){
                console.log({
                    ...n,
                    completed:!n.completed
                })
                return {
                    ...n,
                    completed:!n.completed
                }
            }
            return n;
        })
        break;
        default:
        return state;
        break;
    }
}
function showFilter(state='all',action){
    
     switch(action.filter){
        case ALL:
        return action.filter;
        break;
        case COMPLETED:
        return action.filter;
        break;
        case UNCOMPLETED:
        return action.filter
        break;
        default:
        return 'all';
        break;

     }
}
const todoApp=combineReducers({todos,showFilter});
export default todoApp;