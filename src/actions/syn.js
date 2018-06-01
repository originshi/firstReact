const ADD='add';
const TOGGLE='toggle';
const SHOW='show';
const ALL='all';
const COMPLETED='completed';
const UNCOMPLETED='uncompleted'
let count=0;
function add(text){
  return {
      type:ADD,
      text,
      id:count++,
      completed:false
  }
}
function toggle(id){
    return {
        type:TOGGLE,
        id
    }
}
function show(filter){
    return {
        type:SHOW,
        filter
    }
}
export {ADD,TOGGLE,SHOW,add,toggle,show,COMPLETED,UNCOMPLETED,ALL}