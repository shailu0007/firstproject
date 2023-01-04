import React from "react";

function Alert(props) {
  return (
    props.alert &&
    <>
      <div className="container">
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show mt-3`} role="alert">
        <strong>{props.alert.msg}</strong>
      </div>
      </div>
    </>
  );
}

export default Alert;
