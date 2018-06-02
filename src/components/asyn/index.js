import  React  from 'react'
import Pickerc from './../../containers/asyn/pickerc';
import Listc from './../../containers/asyn/listc';
console.log(222);
export default class Asyn extends React.Component{
    render(){
        console.log('???')
        return (<div>
        111
        <Pickerc></Pickerc>
        <Listc></Listc>
        </div>);
    }
}
