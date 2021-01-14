import React from 'react';
import ReactDOM from 'react-dom';
import './Mysection1.css';
import etudiant from './etudiant.jpg';
import question from './question.PNG';
import fleche from './fleche.png' ;

export default class Mysection1 extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            text:"Consulter les derniers articles",
            article1:"Mon premier article",
            article2:"Mon deuxième article",
            article3:"Mon troisième article",
            article4:"Mon quatrième article"
        }
    }

    render(){

        return(
               <div className = "globaldiv">
                   <div className = "div1">
                       <div className = "div1-1">
                           <img className = "etudiant" src = {question} alt = "etudiant" />
                       </div>
                       <div className = "div1-2">
                           <img className = "etudiant" src = {fleche} alt = "etudiant" />
                       </div>
                       <div className = "div1-3">
                           <img className = "etudiant" src = {etudiant} alt = "etudiant" />
                       </div>
                   </div>
                   <div className = "div2">
                       <p className = "p1">{this.state.text}</p>
                       <a href = "#1" className = "p-article">{this.state.article1}</a>
                       <a href = "#1" className = "p-article">{this.state.article2}</a>
                       <a href = "#1" className = "p-article">{this.state.article3}</a>
                       <a href = "#1" className = "p-article">{this.state.article4}</a>
                   </div>
               </div>
        );
    }
}