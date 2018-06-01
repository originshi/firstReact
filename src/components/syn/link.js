import React from 'react';
export default class Link extends React.Component{
    render(){
        let props=this.props;
        
        return <div onClick={()=>{props.toFilter(props.filter)}}>{props.filter}</div>
    }
}