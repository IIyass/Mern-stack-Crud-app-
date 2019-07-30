import React from 'react';
import ReactDom from 'react-dom';
import Axios from 'axios';
import {Link} from 'react-router-dom';


const Todo = props =>(
    <tr>
        <td> {props.todo.Firstname}</td>
        <td> {props.todo.Lastname}</td>
        <td> <Link to= {"/edit/"+props.todo._id }>Edit</Link> </td>
        <td><Link to= {"/delete/"+props.todo._id }> Delete </Link> </td>
    </tr>
)





class Todolist extends React.Component{

constructor(props){
    super(props);
    
    this.state ={
        List:[] };
}

delete() {
    Axios.get('http://localhost:4000/Profils/'+this.props.match.params.id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
}

















componentDidMount(){

Axios.get("http://localhost:4000/Profils")
.then(Response=>{
    this.setState({List: Response.data});
})
.catch(function(error){
console.log(error);
})
}

Allprofils(){
    return this.state.List.map(function(ourdata,i){
        return <Todo todo={ourdata}  key={i}/>
    })
}




render(){
    return(

        <table class="ui celled table">
        <thead>
          <tr><th>First Name</th>
          <th>Last Name</th>
          <th>Action 1</th>
          <th>Action 2</th>
        </tr></thead>
        <tbody>
          {this.Allprofils()}
        </tbody>
      </table>

    );

};
}

export default Todolist ;