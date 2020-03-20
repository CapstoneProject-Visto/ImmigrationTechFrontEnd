import React from "react";

function LeftComponent() {
  return (
    <>
      <div
        style={{
          height: "76vh",
          marginLeft: "15px",
          width: "100%",
          paddingLeft: "40px",
          paddingTop: "10vh",
          color: "white",
          backgroundColor: "darkgrey"
        }}
      >
        <ul
          style={{
            textDecoration: "none",

            listStyle: "none"
          }}
        >
          <li>Home</li>
          <li>Why Canada</li>
          <li>Basics Of Immigration</li>
          <li>Create Your Profile</li>
          <li>Raise Your CRS Score</li>
          <li>Prepare Your Application</li>
          <li>Recent Draws</li>
          <li>Find a Job</li>
          <li>International Students</li>
          <li>Help From Lawyer</li>
          <li>Settlement Services</li>
          <li>FAQ and Glossary</li>
        </ul>
      </div>
    </>
  );
}

export default LeftComponent;
