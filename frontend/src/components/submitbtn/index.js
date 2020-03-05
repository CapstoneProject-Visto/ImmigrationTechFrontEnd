import React from "react";

function Button(props) {
  return (
    <input
      type="submit"
      name="submit"
      value="SUBMIT"
      onClick={props.apiCall}
    ></input>
  );
}

export default Button;
