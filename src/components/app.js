import  React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default class App extends Component{
    render(){
        return (
           <div>
               <Link to="/">syn</Link>
               <Link to='/'>asyn</Link>
               {renderRoutes(this.props.route.routes)}
           </div>
        );
    }

} 