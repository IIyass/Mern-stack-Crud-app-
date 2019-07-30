import React from 'react';
import ReactDom from 'react-dom';
import { throwStatement } from '@babel/types';
import Axios from 'axios';


class CreateTodo extends React.Component{
    constructor(props){
        super(props);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeprio = this .onChangeprio.bind(this);
    
        this.onSubmit=this.onSubmit.bind(this);

        this.state= {
               
            Firstname:'',
            Lastname:'',
           

        }

     

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
        Axios.post('http://localhost:4000/Profils',Add)
        .then(res => console.log(res.data));

        this.setState({
                Firstname:'',
                Lastname:'',
                
        });
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
        
        
        <button className="ui button" type="submit" onSubmit={this.onSubmit}>Adding profil</button>
      </form>
    );

};
}

export default CreateTodo;
