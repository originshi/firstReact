import {connect} from 'react-redux';

import {SELECT_TYPE,REQUEST,REQUEST_SUCCESS,REQUEST_FAIL,REFRESH,selecta,requesta,request_successa,request_faila
    ,refresha,shouldPost,posts} from '../../actions/asyn';
import List from '../../components/asyn/list';
function getItems(state){
    console.log(state)
    switch(state.select){
        case 'frontend':
        return [1,2,3];
        case 'reactjs':
        return [4,5,6];
    }
}
function stateToProps(state){
    return{
        list:getItems(state),
        model:state.select,
        posts:Object.assign({json:''},state.request),       
    }
}
function dispatchToProps(dispatch){
  return{
      get:(text)=>{
          dispatch(shouldPost(text))
      },
      refresh:(text)=>{
          dispatch(posts(text))
      }
  }
}
const Listc=connect(stateToProps,dispatchToProps)(List);
export default Listc;