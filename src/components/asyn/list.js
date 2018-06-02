import React from 'react';
export default class List extends React.Component{
    componentWillMount(){
        console.log("woshi",this.props)
        let {posts:{json},model,refresh,get}=this.props;
        
        if(!json && !json[model]){
            get(model);
        }
    }
    render(){
        let {list,refresh,model}=this.props;
        return <ul>
        <span onClick={(model)=>{
            refresh(model)
        }}>刷新</span>
        {list.map((n,i)=>{
            return <li key={i}>{n}</li>
        })}
        </ul>
    }
}