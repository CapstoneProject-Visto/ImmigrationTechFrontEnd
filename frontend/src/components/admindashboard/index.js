import React, { Component }  from "react";
import Information from './info-json';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import Card from "react-bootstrap/Card";

class AdminLogin extends Component {

    constructor(){
      super();
  
      this.state={
        search:null
      };
    }
  
    searchSpace=(event)=>{
      let keyword = event.target.value;
      this.setState({search:keyword})
    }
  
    render(){
      
      const items = Information.filter((data)=>{
        if(this.state.search == null)
            return data
        else if(data.name.toLowerCase().includes(this.state.search.toLowerCase())){
            return data
        }
      }).map(data=>{
        return(  
            <div className="column">       
        <Card>
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Title><a href="/UserInfo">{data.name}</a></Card.Title> 
          </Card.Body>
             </Card>             
             </div>      
        )
      })
  
      return (
          <>
           <div className="text-center">
              <h2>Members</h2>
              <hr />
           </div>
         
         <div className="search">  
         <MDBCol md="12">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={(e)=>this.searchSpace(e)} /> 
        </MDBFormInline>
    </MDBCol>
        </div>
        {items}
        </>
       
      )
    }
  }
export default AdminLogin;

