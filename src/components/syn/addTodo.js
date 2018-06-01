import React from 'react';
export default class AddTodo extends React.Component{
    render(){
        let props=this.props;
        //console.log(props)
        return <div>
            <input type='text' onChange={(e)=>{
                this.setState({
                    text:e.target.value
                })
            }} />
            <button onClick={()=>{
                props.addTodo(this.state.text);
            }}>添加</button>
        </div>
    }
}