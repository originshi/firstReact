import React from 'react';
import LazyLoadImg from './../common/lazyLoadImg';
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
        
        var imgEls=document.querySelectorAll('.unLoadImg');
        var htmlHeight=LazyLoadImg.htmlHeight;
        console.log(LazyLoadImg.htmlEl.scrollTop)
       console.log(imgEls)
        for(let img of imgEls){
            var rect=img.getBoundingClientRect();
           
            if(rect.top>htmlHeight+LazyLoadImg.htmlEl.scrollTop){
                console.log(img,rect.top,htmlHeight+LazyLoadImg.htmlEl.scrollTop)
               return;
            }
           
               
               //img.classList.remove('unLoadImg');
               setTimeout(()=>{
                   img.src=img.toSrc;
                   img.classList.remove('unLoadImg');
               },5000)
               
            
            
        }


        document.body.addEventListener('click',()=>{
            alert(1)
        })
    }

    render(){
        let {list,refresh,model}=this.props;
        
        return <ul>
        <span onClick={(e)=>{
            console.log(e,'刷新')
            e.preventDefault();
            refresh(model)
        }}
        ref={(span) => { this.reSpan = span }} >刷新</span>
        {list.map((n,i)=>{
            return <li key={i} onClick={(e)=>{
                console.log(arguments)    
                //console.log(e[0].nativeEvent);
            }}>{n}
            {// <div>
            // <LazyLoadImg src={LazyLoadImg.cs+"?t="+Math.random()} toSrc={LazyLoadImg.cs1}/>
            // </div>
            // <div>
            // <LazyLoadImg src={LazyLoadImg.cs+"?t="+Math.random()} toSrc={LazyLoadImg.cs1}/>
            // </div>
            // <div>
            // <LazyLoadImg src={LazyLoadImg.cs+"?t="+Math.random()} toSrc={LazyLoadImg.cs1}/>
            // </div>
            // <div>
            // <LazyLoadImg src={LazyLoadImg.cs+"?t="+Math.random()} toSrc={LazyLoadImg.cs1}/>
            // </div>
            // <div>
            // <LazyLoadImg src={LazyLoadImg.cs+"?t="+Math.random()} toSrc={LazyLoadImg.cs1}/>
            // </div>
            }
            </li>
        })}
       
        </ul>
    }
}