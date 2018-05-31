/**
 * Created by 核武器 on 2017/5/3.
 */
import React from 'react';
import {renderRoutes} from 'react-router-config'
class Pro extends React.Component {
    render() {
        return (
            <div>
            我是1234567Pro!
            
            {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}

//导出组件
export default Pro;