import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Todolist from './Todo-list';
import EditTodo from './Todo-Edit';
import CreateTodo from './Todo-Create';
import Deletetodo from './Delete-todo';
import { from } from 'rxjs';


const App = ()=> {

return(
    <Router>
    <div className=" ui container"  style={{marginTop:'20px'}}>
                      
                      
   <div className="ui inverted segment">
  <div className="ui inverted secondary pointing menu">
    <a className="active item" href="/" >
      Home
    </a>
    <a className="item" href="/create">
      CreateList
    </a>
  </div>
</div>

     <Route path ="/" exact component ={Todolist} /> 
    <Route path ="/edit/:id" exact component ={EditTodo} /> 
    <Route path ="/create" exact component ={CreateTodo} /> 
    <Route path ="/delete/:id" exact component ={Deletetodo} /> 
    
    </div>
    
  </Router>
);
};
export default App;