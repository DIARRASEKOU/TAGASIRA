import React from 'react';
import ReactDOM from 'react-dom';
import './Myheader.css';




export default class Myheader extends React.Component{

  constructor(props){
    super(props) ;
    this.state = {textslog :"Bienvenue sur TagaSira : La plateforme qui vous aide à tracer votre voie Vous vous posez des question sur votre parcours, votre avenir ? vous etes au bon endroit",};
  }
  textChange = (event) =>{
    this.setState({textslog :"il ya un changement il ya un changement il ya un changement il ya un changement il ya un changement il ya un changement il ya un changement il ya un changement "}
    ) ;
    setTimeout(() => {
      this.setState({textslog :"Bienvenue sur TagaSira : La plateforme qui vous aide à tracer votre voie Vous vous posez des question sur votre parcours, votre avenir ? vous etes au bon endroit"}
    ) ;
    }, 1000/2);
    }

  render(){
    return  <div>
             <div class="navbar">
                <a href="#accueil">Accueil</a>
                <div class="dropdown">
                  <button class="dropbtn">Domaine 
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
                <div class="dropdown">
                  <button class="dropbtn">Article 
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    <a href="#">Link 3</a>
                  </div>
                </div> 
                <a href="#news">Qui sommes nous</a>
                <a href="#news">Mon compte</a>
              </div>
             <div id="msg_bien">
              <p onMouseOver={this.textChange}>{this.state.textslog}</p>
             </div>
            </div> ;
        }
      }