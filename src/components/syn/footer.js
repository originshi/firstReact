import React from 'react';
import ToFilter from './../../containers/syn/tofilter';

export default class Footer extends React.Component{
    render(){
        return <div>
        <ToFilter filter='all'></ToFilter>
        <ToFilter filter='completed'></ToFilter>
        <ToFilter filter='uncompleted'></ToFilter>
        </div>
    }
}