// import React from "react";
// import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// function Filter(props) {
//     return (
// <div>
// <div className="dropdown">
//     <button className="btn btn-default dropdown-toggle" type="button" id="filter" data-toggle="dropdown">Filter by
//     <span className="caret"></span></button>
//     <ul className="dropdown-menu" role="menu" aria-labelledby="filter">
//       <li >Project 1</li>
//       <li >Project 2</li>
//       <li >Project 3</li>
//       <li >Capstone</li>
//     </ul>
//   </div>

//   {/* <div class="dropdown">
//     <button class="btn btn-default dropdown-toggle" type="button" id="sort" data-toggle="dropdown">Tutorials
//     <span class="caret"></span></button>
//     <ul class="dropdown-menu" role="menu" aria-labelledby="sort">
//       {/* <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
//       <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
//       <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
//       <li role="presentation" class="divider"></li>
//       <li role="presentation"><a role="menuitem" tabindex="-1" href="#">About Us</a></li> */}
//     {/* </ul>
//   </div> */} 

// </div>

//     );
//    }
   

// export default Filter;

import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./style.css"

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown className="dropDown" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Filter Options
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick = {() => this.props.handleFilter("Project 1")}>Project 1</DropdownItem>
          <DropdownItem onClick = {() => this.props.handleFilter("Project 2")}>Project 2 </DropdownItem>
          <DropdownItem onClick = {() => this.props.handleFilter("Project 3")}>Project 3 </DropdownItem>
          <DropdownItem onClick = {() => this.props.handleFilter("Capstone")}>Capstone </DropdownItem>

        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default Filter;