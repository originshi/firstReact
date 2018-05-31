//main.js
// import React from 'react';
// import ReactDom from 'react-dom';
// import Component1 from './component/hello.js';
//
// ReactDom.render(
//     <Component1 />,
//     document.getElementById('content')
// );
import React from 'react'
import ReactDom from 'react-dom';


import Routers from "../route/main"


import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDom.render(<Routers/>,
    document.getElementById('content')
);

