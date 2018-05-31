/**
 * Created by 核武器 on 2017/5/3.
 */
import React from 'react';
import { BrowserRouter as Router, Route,BrowserRouter  } from 'react-router-dom'
import App from "../app/component/app"
import About from "../app/component/about"
import Pro from "../app/component/pro"
import Mateui from "../app/component/mate_ui"
class Routers extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={App}/>

                    <Route path="/about" component={About}/>
                    <Route path="/pro" component={Pro}/>
                    <Route path="/mateui" component={Mateui}/>
                </div>
            </Router>
        )
    }
}
export default Routers;