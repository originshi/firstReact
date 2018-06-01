import React from 'react';
import Todo from './todo';
export default class TodoList extends React.Component{
    render(){
        let props=this.props;
        return (
            <ul>
                {props.todos.map((n,i)=>{
                    return <Todo {...n} key={n.id} {...props} />
                })}
            </ul>
        );
    }
}