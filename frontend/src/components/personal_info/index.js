import React, { Component } from "react";
import Img from "../../images/studypermit.jpg";
import Col from "react-bootstrap/Col";
import { Image, Row } from "react-bootstrap";

function PersonalInfo() {
    return(
<>
<div className="phead">
<h2>Personal Information</h2>
<hr />
</div>
<Col>
<Row>
      <Image src={Img} roundedCircle height='200px' width='200px' />
      <div className="pinfo">
      <h3>User Name</h3>
      <ul>
          <li>User Id: 12345</li>
          <li>Email: abc@gmail.com</li>
          <li>Age: 21</li>
          <li>phone: 647-109-8646</li>
      </ul>

      </div>
      </Row>   
      </Col> 
</>
    );
}

export default PersonalInfo;

