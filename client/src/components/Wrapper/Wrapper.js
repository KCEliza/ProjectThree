import React, { Filter} from "react";


function Wrapper(props) {
 return (
<div class="border">
<div class="row">
    <div class="col-md-8 offset-md-3">
        <Filter></Filter>
    </div>
  </div>

<div class="row">
<div class="col-md-8 offset-md-3">Put Cards Here</div>
</div>
</div>
 );
}

export default Wrapper;