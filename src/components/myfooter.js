import React from 'react';
import './Myfooter.css';
import facebook from './facebook.png';
import whatsapp from './whatsapp.png' ;
import linkedin from './linkedin.png' ;
import youtube from './youtube.png';
import instagram from './instagram.png';


export default class Myfooter extends React.Component{
    constructor(props){
        super(props) ;

        this.state = {}
    }
    
    render(){

        return(
              <div className = "div-footer">

                  <div className = "div1-footer">
                      <a className ="footer-text"  href = "#">Orientation</a>
                      <a className ="footer-text"  href = "#">Etudes Supérieures</a>
                      <a className ="footer-text"  href = "#">Les metiers qui recrutent</a>
                      <a className ="footer-text"  href = "#">Tracer ma voie</a>
                  </div>
                  <div className = "div2-footer"  href = "#">
                      <a className ="footer-text"  href = "#">Contact</a>
                      <a className ="footer-text"  href = "#">Mon compte</a>
                      <a className ="footer-text"  href = "#">TAGASIRA</a>
                      <a className ="footer-text"  href = "#">Entreprendre</a>
                  </div>
                  <div className = "div3-footer">
                      <a className ="footer-text" href = "#">Les metiers du Numerique</a>
                      <a className ="footer-text" href = "#">Developpement Web</a>
                      <a className ="footer-text" href = "#">Mobile</a>
                      <a className ="footer-text" href = "#">Afrique</a>
                  </div>
                  <div className = "div4-footer">
                      <a className ="footer-text" href = "#"><img src = {instagram} style = {{width:"50px",height:"50px",margin:"10px"}}/></a>
                      <a className ="footer-text" href = "#"><img src = {facebook} style = {{width:"50px",height:"50px",margin:"10px"}}/></a>
                      <a className ="footer-text" href = "#"><img src = {linkedin}  style = {{width:"50px",height:"50px",margin:"10px"}}/></a>
                      <a className ="footer-text" href = "#"><img src = {youtube} style = {{width:"50px",height:"50px",margin:"10px"}}/></a>
                      <a className ="footer-text" href = "#"><img src = {whatsapp} style = {{width:"50px",height:"50px",margin:"10px"}}/></a>
                  </div>

              </div>

        );
    }

    







}
