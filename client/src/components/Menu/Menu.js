import React from 'react';
import { NavItem, NavLink, Nav } from 'reactstrap';
// import classNames from 'classnames';
import {Link} from 'react-router-dom';
import "./style.css";


const Menu = props => (
    <div className="sidebar col-md-2">
      <div className="sidebar-header">
        <h3>I HAVE NO IDEA!</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem>
            <NavLink tag={Link} to={'/profile'}>
                <i className="fas fa-home"></i> HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/profile/submit'}>
                <i className="far fa-lightbulb"></i> SUBMIT IDEA
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/profile/myprojects'}>
                <i className="fas fa-tasks"></i> MY PROJECTS
            </NavLink>
          </NavItem>
        </Nav>        
      </div>
    </div>
  );


  

export default Menu;





// import React, { Component } from "react";
// import { Link } from "react-router-dom";



// export default class Menu extends Component {
//     render() {
//         return (
//             <>
//                 <nav className="wrapper">

                                               
                        
//                     <Link to="/profile" className="row homeLink navLink active"><i className="fas fa-home"></i>HOME</Link>        
                    
                    
//                     <Link to="/profile/submit" className=" submitLink navLink"><i className="far fa-lightbulb"></i>SUBMIT IDEA</Link>
                            
                        
                      
//                 </nav>
//             </>
//         )
//     }
// }