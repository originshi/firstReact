/**
 * Created by 核武器 on 2017/5/3.
 */
import React from 'react';
import { BrowserRouter as Router, Route,BrowserRouter,Link  } from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
class App extends React.Component {
    render() {
        return (
            
            <div>Hello World1!
            <Link to='/pro'>pro</Link> 
            <Link to='/'>about</Link> 
            <Link to='/pro/heheda/111'>mate</Link> 
            {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}
//导出组件
export default App;