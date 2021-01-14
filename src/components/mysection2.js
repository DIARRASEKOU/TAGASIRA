import React from 'react';
import './Mysection2.css';
import mathieunebra from './mathieunebra.jpg' ;
import jeffbezos from './jeffbezos.jpg' ;
import mariancroak from './mariancroak.jpg' ;
import modibodiarra from './modibodiarra.jpg' ;
import mountagakeita from './mountagakeita.jpg' ;


export default class Mysection2 extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            compte:0,
            videolink:"https://www.youtube.com/embed/tgbNymZ7vqY",
            images1:modibodiarra
        }
    }

    carous = ()=>{
        this.state.compte += 1 ;

        if(this.state.compte == 1 ){
            this.setState({images1:mathieunebra});
        }
        else if(this.state.compte == 2 ){
            this.setState({images1:mariancroak});
        }
        else if(this.state.compte == 3 ){
            this.setState({images1:mountagakeita});
        }
        else if(this.state.compte == 4 ){
            this.setState({images1:jeffbezos});
        }
        else {this.state.compte = 0 ;
              this.setState({images1:modibodiarra});
             }
        
    }
    
    render(){

        return(
               <div className = "globaldiv-section2">
                   <div className = "div1-section2">
                       <iframe className = "iframe" src = {this.state.videolink} />
                   </div>
                   <div className = "div2-section2">
                       <a href = "#icone" onClick = {this.carous}>
                       <i className = "	fa fa-angle-left" style = {{fontSize:"60px",fontWeight:"bold",color:"lightgreen",marginLeft:"5px", marginRight:"5px"}}/>
                       </a>
                       <img className = "img-section2" src = {this.state.images1} onMouseOver = {this.imagechange}/>
                       <a href = "#icone" onClick = {this.carous}>
                       <i className ="	fa fa-angle-right" style = {{fontSize:"60px",fontWeight:"bold",color:"lightgreen",marginLeft:"5px",
                       marginRight:"5px"}} />
                       </a>
                   </div>
               </div>
        );
    }

}


