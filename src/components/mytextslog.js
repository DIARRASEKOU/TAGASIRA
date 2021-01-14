import React from 'react';
import ReactDOM from 'react-dom';
import './Mytextslog.css';

export default class Mytextslog extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            text:"Quelle etude faire , pour quel metier dans quel secteur après? ça mérite reflexion et quetionnement Que voulez vous etre , comment vous voyez votre parcours détude et pro LES TOUTES LES REPONSES !!!"
            
        }
    }

    render(){
        return(
               <div className = "div">
                   <hr className = "hr" />
                   <div className = "ptexte">
                   <p  className = "ptext">{this.state.text}</p>
                   </div>
                   <hr className ="hr"/>
               </div>
        );
    }
}




   
