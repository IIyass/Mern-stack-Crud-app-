import React from 'react';
import ReactDom from 'react-dom';
import { throwStatement } from '@babel/types';
import Axios from 'axios';


class Deletetodo extends React.Component{


    constructor(props){
        super(props);
        this.delete=this.delete.bind(this);
       

        }
    

    delete() {
        Axios.delete('http://localhost:4000/Profils/'+this.props.match.params.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    

    render(){
        return(
          <div>
             <h1 style={{textAlign:'center'}}> Are you sure you Wanna Delete this Profil  </h1>
             <button className="fluid ui button" type="submit" onClick={this.delete}>Confirm deleting</button>
             
          </div>
           
        );
    
    }


 }


    
   
export default Deletetodo ;