import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link
      to={
        {
          // pathname: `/cadedu`
        }
      }
    >
      <input
        type="submit"
        name="submit"
        value="SUBMIT"
        onClick={props.submitDataBtn}
      ></input>
    </Link>
  );
}

export default Button;
