import {connect} from 'react-redux';

import { ADD,TOGGLE,SHOW,add,toggle,show } from '../../actions/syn';

import Link from './../../components/syn/link';

function stateToProps(state){
    return {
        show:state.showFilter
    }
}
function dispatchToProps(dispatch,props){
    return {
        toFilter:(f)=>{
           // console.log(1212,f)
            dispatch(show(f))
        }
    }
}
const ToFilter=connect(stateToProps,dispatchToProps)(Link);
export default ToFilter;