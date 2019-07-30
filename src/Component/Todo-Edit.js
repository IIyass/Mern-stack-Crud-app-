import React from 'react';
import ReactDom from 'react-dom';
import Axios from 'axios';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class EditTodo extends React.Component{
    constructor(props){
        super(props);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeprio = this .onChangeprio.bind(this);
    
        this.onSubmit=this.onSubmit.bind(this);

        this.state= {
               
            Firstname:'',
            Lastname:''
           
        }
   }
   componentDidMount(){

        Axios.get("http://localhost:4000/Profils/"+this.props.match.params.id)
        .then(Response=>{
            this.setState({
                Firstname:Response.data.Firstname,
                Lastname:Response.data.Lastname
            })
            })
            .catch(function(error){
                console.log(error);
            })
        
    }

onChangeDesc(e){

    this.setState({
        Firstname: e.target.value

});

}

onChangeprio(e){

    this.setState({
        Lastname:e.target.value
});
}

onSubmit(e){
    e.preventDefault();

    const Add = {
        Firstname:this.state.Firstname,
        Lastname:this.state.Lastname

    }
    Axios.patch("http://localhost:4000/Profils/"+this.props.match.params.id,Add)
    .then(Response => console.log(Response.data))

    this.props.history.push('/');

}

render(){
    return(
        <form className="ui form"  onSubmit={this.onSubmit}>
        <div className="field">
          <label>Fisrt name</label>
          <input type="text" name="first-name" placeholder="First Name" value={this.state.Firstname} onChange={this.onChangeDesc}/>
        </div>
        <div className="field">
          <label>Last name</label>
          <input type="text" name="last-name" placeholder="Last Name" value={this.state.Lastname} onChange={this.onChangeprio}/>
        </div>
        
        
        <button className="ui button" type="submit" onSubmit={this.onSubmit}>Editing Profil</button>
      </form>

    );

};
}

export default EditTodo ;