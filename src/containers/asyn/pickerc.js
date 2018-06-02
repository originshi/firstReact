import {connect} from 'react-redux';
import Picker from './../../components/asyn/picker';
import {SELECT_TYPE,REQUEST,REQUEST_SUCCESS,REQUEST_FAIL,REFRESH,selecta,requesta,request_successa,request_faila
    ,refresha,shouldPost} from '../../actions/asyn';
function stateToProps(state){
    return{
        list:['frontend','reactjs']
    }
}
function dispatchToProps(dispatch){
  return{
      onchange:(text)=>{
          dispatch(selecta(text));
          dispatch(shouldPost(text));
      }
  }
}
const Pickerc=connect(stateToProps,dispatchToProps)(Picker);
export default Pickerc;