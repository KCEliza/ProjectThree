import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";


export default class Menu extends Component {
    render() {
        return (
            <>
                <nav className="wrapper">

                                               
                        
                    <Link to="/profile" className="row homeLink navLink active"><i className="fas fa-home"></i>HOME</Link>        
                    
                    
                    <Link to="/profile/submit" className=" submitLink navLink"><i className="far fa-lightbulb"></i>SUBMIT IDEA</Link>
                            
                        
                      
                </nav>
            </>
        )
    }
}