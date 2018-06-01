import React  from 'react';

import TodoLists from './../../containers/syn/todolists';
import AddTodoc from './../../containers/syn/addtodo';
import Footer from './footer';
export default class A extends React.Component{
    render(){
        return (<div>
            <AddTodoc></AddTodoc>
            <TodoLists></TodoLists>
            <Footer></Footer>
            </div>);
    }
}