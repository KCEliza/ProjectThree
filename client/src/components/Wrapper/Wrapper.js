import React, { Filter} from "react";


function Wrapper(props) {
 return (
<div className="border">
<div className="row">
    <div className="col-md-8 offset-md-3">
        <Filter></Filter>
    </div>
  </div>

<div className="row">
<div className="col-md-8 offset-md-3">Put Cards Here</div>
</div>
</div>
 );
}

export default Wrapper;
