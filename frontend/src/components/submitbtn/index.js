import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link
      to={{
        // pathname: `/newcomponent`,
        ageProps: {
          data: props.propdata
        }
      }}
    >
      <input
        style={{ marginTop: "3vh" }}
        type="submit"
        name="submit"
        value="SUBMIT"
        onClick={props.apiCall}
      ></input>
    </Link>

    // </form>
  );
}

export default Button;
