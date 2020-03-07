import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link
      to={{
        pathname: `/additionalpoints`,
        ageProps: {
          data: props.propdata
        }
      }}
    >
      <input
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
