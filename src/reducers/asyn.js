import {SELECT_TYPE,REQUEST,REQUEST_SUCCESS,REQUEST_FAIL,REFRESH,selecta,requesta,request_successa,request_faila
    ,refresha} from '../actions/asyn';
import { combineReducers } from 'redux';
import fetch from 'cross-fetch'

function select(state='frontend',action){
    switch(action.type){
        case SELECT_TYPE:
        return action.model
        break;
        default :
        return state;
        break;
    }
}


function request(state = {isFetch:false,json:''} , action){
    let {model}=action
    switch(action.type){
        case REQUEST:
        return {
            ...state,
            isfetch:true
        }
        case REQUEST_SUCCESS:
        return{
            isfetch:false,
            json:{...(state.json),
                [model]:action.json}
        }
        case REQUEST_FAIL:
        return {
            ...state,
            isfetch:false,
            err:action.err,
        }
        default:
        return state;
        break;
    }
}

const asynReducer=combineReducers({select,request});
export default asynReducer;