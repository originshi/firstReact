import React from 'React';
var cs=require('../../../img/cs.jpg');
var cs1=require('../../../img/cs1.jpg');
export default class LazyLoadImg extends React.Component{
    static isBind=false;
    static htmlEl=document.documentElement;
    static htmlHeight=document.documentElement.clientHeight;
    static cs1=cs1;
    static cs=cs;
    static _bind(){
        LazyLoadImg.isBind=true;
        function ccc(){
            var imgEls=document.querySelectorAll('.unLoadImg');
            var scrollTop=LazyLoadImg.htmlEl.scrollTop+LazyLoadImg.htmlHeight;
            //console.log(imgEls);
            if(imgEls.length==0){
                LazyLoadImg.isBind=false;
               document.removeEventListener('scroll',ccc);
            }
            for(let img of imgEls){
                var rect=img.getBoundingClientRect();
                //console.log(rect)
                var toLongLength=scrollTop+500;
                if(rect.top>toLongLength){
                   return false;
                }
                if(rect.top>scrollTop && rect.top<toLongLength){
                   
                   //img.classList.remove('unLoadImg');
                   setTimeout(()=>{
                       img.src=img.toSrc;
                       img.classList.remove('unLoadImg');
                   },5000)
                   
                }
                
            }
       }
        document.addEventListener('scroll',ccc)
     }
     componentDidMount(){
        this.img.toSrc=this.props.toSrc;
     }
    render(){
        if(!LazyLoadImg.isBind){
            
            LazyLoadImg._bind();
        }
        //console.log(this.props.src)
        return <img className='unLoadImg' src={this.props.src} id={this.props.maths} 
            ref={(img)=>{
                this.img=img;
                }}/>
    }
}