import  ReactDOM  from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './route/index';
import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers/syn';
let store=createStore(todoApp);
ReactDOM.render(<Provider store={store}><HashRouter>
     {renderRoutes (routes)}
    </HashRouter></Provider>,document.querySelector('#content'))