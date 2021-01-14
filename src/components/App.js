import React from 'react';
import Myheader from './myheader';
import Mytextslog from './mytextslog';
import Mysection1 from './mysection1';
import Mysection2 from './mysection2';
import Myfooter from './myfooter';


export default class App extends React.Component{
    constructor(props){
        super(props) ;
    }

    render(){
        return(
            <div>
                <Myheader/>
                <Mysection1/>
                <Mysection2/>
                <Myfooter/>






            </div>
        );
    }
}
