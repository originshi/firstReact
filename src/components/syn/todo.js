import React from 'react';
export default class Todo extends React.Component{
    render(){
        
        let props=this.props;
        //console.log(111111111,props)
        return <li style={{color:props.completed?'black':'red'}} onClick={()=>{props.toggle(props.id)}}>
            {props.text}
        </li>
    }
}