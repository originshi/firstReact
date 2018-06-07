import React from 'react';
export default class Picker extends React.Component{
    render(){
        let {onchange,list}=this.props;
        
        return <select onChange={(e)=>{
            onchange(e.target.value)
        }}>
            {list.map((n,i)=>{
               return  <option key={i}  value={n} >{n}</option>
            })}
        </select>
    }
}