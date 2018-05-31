/**
 * Created by 核武器 on 2017/5/3.
 */
import React,{Component} from 'react';
import { BrowserRouter as Router, Route,HashRouter,Link  } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
//import {Router,Route,hashHistory } from 'react-router';
import App from "../app/component/app"
//import About from "../app/component/about"
//import Pro from "../app/component/pro"
//import Mateui from "../app/component/mate_ui"

import LoadAble from 'react-loadable';
class MyLoadingComponent extends Component {
    render(){
        return (<div>Loading...</div>);
    }
    
  }
 
  let Pro=LoadAble({loader:()=> import('../app/component/pro'),loading:MyLoadingComponent});
  let Mateui=LoadAble({loader:()=> import('../app/component/mate_ui'),loading:MyLoadingComponent});
  let About=LoadAble({loader:()=> import('../app/component/about'),loading:MyLoadingComponent});
const routeConfig = [
    {  
      component: App,
      indexRoute: { component: About },
      routes:[{
          
        path: '/',
        exact: true,
        component: About
      },{
        path: '/pro',
        
        component: Pro,
        routes:[{
            path:"/pro/heheda/:id",
            component:Mateui
        }]
        }
      
       
      ]
    }
  ]
class Routers extends React.Component {
    render() {
        return (
            <HashRouter >
            
            {renderRoutes(routeConfig)}
                
            </HashRouter>
        )
    }
    // <Route exact path="/" component={App}/>
    // <Route path="/about" component={About}/>
    // <Route path="/pro" component={Pro}/>
    // <Route path="/mateui" component={Mateui}/>
}
export default Routers;