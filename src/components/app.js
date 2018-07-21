import  React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
require('../../css/hh.less');
export default class App extends Component{
    render(){
        
        return (
           <div>
               <Link to="/syn">syn</Link>
               <Link to='/asyn'>asyn</Link>
             
               {renderRoutes(this.props.route.routes)}
           </div>
        );
    }

} 