import  ReactDOM  from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './route/index';
import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers/syn';
import todoApp1 from './reducers/asyn';
import {applyMiddleware } from 'redux';
 import thunkMiddleware  from 'redux-thunk';
 import {createLogger} from 'redux-logger';
 let loggerMiddleware =createLogger();
let store=createStore(todoApp1,applyMiddleware(
    //loggerMiddleware,
    thunkMiddleware)
);

ReactDOM.render(<Provider store={store}><HashRouter>
     {renderRoutes(routes)}
    </HashRouter></Provider>,document.querySelector('#content'))