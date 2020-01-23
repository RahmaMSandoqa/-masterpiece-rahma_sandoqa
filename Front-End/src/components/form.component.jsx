import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <div className="container">
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-warning">Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
