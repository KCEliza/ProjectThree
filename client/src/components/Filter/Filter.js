import React from "react";

function Filter(props) {
    return (
<div>
<div class="dropdown">
    <button class="btn btn-default dropdown-toggle" type="button" id="filter" data-toggle="dropdown">Filter by
    <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="filter">
      {/* <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
      <li role="presentation" class="divider"></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">About Us</a></li> */}
    </ul>
  </div>

  <div class="dropdown">
    <button class="btn btn-default dropdown-toggle" type="button" id="sort" data-toggle="dropdown">Tutorials
    <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="sort">
      {/* <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
      <li role="presentation" class="divider"></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">About Us</a></li> */}
    </ul>
  </div>

</div>

    );
   }
   

export default Filter;