import {connect} from 'react-redux';

import { ADD,TOGGLE,SHOW,add,toggle,show } from '../../actions/syn';
import AddTodo from './../../components/syn/addTodo';

function stateToProps(state){
    return {
        todos:state.todos
    }
}
function dispatchToProps(dispatch,props){
    return {
        addTodo:(text)=>{
            dispatch(add(text))
        }
    }
}
const AddTodoc=connect(stateToProps,dispatchToProps)(AddTodo);
export default AddTodoc;