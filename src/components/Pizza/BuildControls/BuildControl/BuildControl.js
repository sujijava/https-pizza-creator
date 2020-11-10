import React from "react";


const buildControl = (props) => (

    // div box
    <div>
      
      {/* div box: label */}
      <div>{props.label}</div>
      
      {/* button: plus *props: onclick, disabled */}
      <button
      className="btn btn-danger"
      onClick={props.plus}
      disabled={props.disabled}
      >+</button>

      {/* button: minus *props: onclick, disabled  */}
      <button
      className="btn btn-success"
      onClick={props.minus}
      disabled={props.disabled}
      >-</button>
  
  </div>
);

export default buildControl;
