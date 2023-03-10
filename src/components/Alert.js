import React from "react";

function Alert(props) {
  return (
    <div style={{height:'70px'}}>
    {props.alert &&
      <div className="container px-1 py-1">
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show mt-3`} role="alert">
        <strong>{props.alert.msg}</strong>
      </div>
      </div>}
      </div>
  );
  
}

export default Alert;
