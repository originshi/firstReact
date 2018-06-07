import React from 'react';
export default class List extends React.Component{
    componentWillMount(){
        
        let {posts:{json},model,refresh,get}=this.props;
        
        if(!json && !json[model]){
            get(model);
        }
    }

    componentDidMount(){
        this.reSpan.setAttribute('ctx',this);
        this.reSpan.ctx=this;
    }

    render(){
        let {list,refresh,model}=this.props;
        return <ul>
        <span onClick={()=>{
            
            refresh(model)
        }}
        ref={(span) => { this.reSpan = span }} >刷新</span>
        {list.map((n,i)=>{
            return <li key={i} onClick={(e)=>{
                console.log(arguments)    
                console.log(e[0].nativeEvent);
            }}>{n}</li>
        })}
        </ul>
    }
}