const SELECT_TYPE='select_model',
REQUEST='request',
REQUEST_SUCCESS='request_success',
REQUEST_FAIL='request_fail',
REFRESH='refresh';
function selecta(model){
    return {
        type:SELECT_TYPE,
        model
    }
}
function requesta(model){
    return {
        type:REQUEST,
        model
    }
}
function request_successa(model,json){
    return{
        type:REQUEST_SUCCESS,
        model,
        json
    }
}
function request_faila(model,err){
    return{
        type:REQUEST_FAIL,
        model,
        err
    }
}
function refresha(model){
    return {
        type:REFRESH,
        model
    }
}
function isNeedRefresh(request,model){
    let {isfetch,json}=request;
    if(isfetch){
        return false;
    }else if(json[model]){
        return false;
    }
    return true;
}
function posts(model){
    return (dispatch,getstate)=>{
        let {select}=getstate();
        dispatch(requesta(select));
        return fetch(`https://www.reddit.com/r/${select}.json`)
        .then(res=>res.json())
        .then((data)=>{
            dispatch(request_successa(select,data));
        },(err)=>{
            dispatch(request_faila(select,err));
        })       
    }
}
function shouldPost(model){
    return (dispatch,getstate)=>{
        if(isNeedRefresh(getstate().request,model)){
            dispatch(posts(model))
        }
    }
 
}
export {SELECT_TYPE,REQUEST,REQUEST_SUCCESS,REQUEST_FAIL,REFRESH,selecta,requesta,request_successa,request_faila
    ,refresha,shouldPost,posts}

