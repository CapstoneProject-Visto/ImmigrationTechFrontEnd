import React from "react";

function IELTSScore() {
  return (
    <div>
      <p>Is your IELTS Score less than two years old ?</p>
      <select name="IELTSValid">
        <option value="YES">Yes</option>

        <option value="No">No</option>
      </select>
    </div>
  );
}

export default IELTSScore;
