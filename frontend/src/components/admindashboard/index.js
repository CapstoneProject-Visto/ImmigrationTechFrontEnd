import React, { Component } from "react";
import axios from "axios";

// BOOTSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// COMPONENTs
// FIXME
// import UserItem from "../../components/UserItem/userItem";
import ContactItem from "../../components/ContactItem/contactItem";
import Search from "../../components/Search/search";

// CSS
import "./index.css";

class Admin extends Component{
  constructor(){
    super();
    this.state={
      users:[
      ],
      searchable:{
        isSearch:false,
        searchBy:null
      },
      filteredArray:null
    }
  }

  handleRadioChange = (e)=>{
    // check whether it's range or else
    if(e.target.value==='x<500'||e.target.value==='x>=500ANDx<800'||e.target.value==='x>=800ANDx<1200'||e.target.value==='x>=1200'){
      // handle logic inside filterRange
      this.filterRange(e.target.value,this.state.users);
    }else{
    // change value of searchable state
    this.setState({
      searchable:{
        isSearch:true,
        searchBy:e.target.value
      }
    });
  }
  }

  filterRange = (range,dummyState)=>{
    console.log(`dummy state - ${dummyState}`);
    let filteredArray
    switch(range){
      case 'x<500':{
        // filter it
        filteredArray=dummyState.filter(u=>u.score!=null&&u.score.crs_score<500);
        break;
      }
      case 'x>=500ANDx<800':{
        // filter it
        filteredArray=dummyState.filter(u=>u.score!=null&&u.score.crs_score>=500&&u.score.crs_score<500);
        break;
      }
      case 'x>=800ANDx<1200':{
        // filter it
        filteredArray=dummyState.filter(u=>u.score!=null&&u.score.crs_score>=800&&u.score.crs_score<1200);
        break;
      }
      case 'x>=1200':{
        // filter it
        filteredArray=dummyState.filter(u=>u.score!=null&&u.score.crs_score>=1200);
        break;
      }
    }

    // set state with filtered array
    this.setState({
      filteredArray:filteredArray
    });
  }

  handleSearchChange = (e)=>{
    if(this.state.searchable.isSearch){
      // set main state into dummy state
      let dummyState = this.state;
      
      // filter it
      let filteredArray = dummyState.users.filter((c)=>{
        if(c[`${this.state.searchable.searchBy}`].includes(e.target.value)){
          return true;
        }else{
          return false;
        }
      });

      // pass the filter array to method
      this.setState({
        filteredArray:filteredArray
      });
      
    }else{
      // TODO hanlde with modal
      alert('please select search by');
    }
  }

  componentDidMount(){
    // get token from storage
    let token = localStorage.getItem('token');

    // if(!token){
    //   // redirect 'em to login
    //   // FIXME use hisory.push
    //   window.location='/login';
    // }

    // set header object
    let config = {
      headers:{
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo5LCJmaXJzdF9uYW1lIjoic2FjaGluIiwiZW1haWwiOiJzYWNoaW5AZ21haWwuY29tIiwiaWF0IjoxNTg1NDY0NzcxfQ.ZmRQSiHaaNuAQkYxlg78GhW75yMrU-__1z4g0QROPqo",
        "Content-Type": "application/json",
      }
    }

    // set axios
    axios.get('http://localhost:5000/api/admin/getAllUsers',config)
    .then((res)=>{
      if(res.data.status===0){
        // set state with all the values
        this.setState({users:res.data.data});
      }else{
        // FIXME modal
      }
    })
    .catch((error)=>{
      // FIXME open modal
      console.log(error);
    })

  }

  renderUserItem = (users)=>{
    // console.log(users);
    return users.map((c) => {
      console.log(c.score);
      return (
        <ContactItem
          key={c.user_id}
          name={c.first_name}
          id={c.user_id}
          email={c.email}
          country={c.country}
          crs_score={c.score?c.score.crs_score:null}
        />
      );
    })
  }

  render(){
    return(
      <Container fluid className="contact-container">
      <Row>
          <Col xs={8} className="search-column">
          <Search onRadioChanged={this.handleRadioChange} onTextChanged = {this.handleSearchChange} />
        </Col>
      </Row>

      <Row>
        {
          (this.state.filteredArray)?this.renderUserItem(this.state.filteredArray):this.renderUserItem(this.state.users)
        }
      </Row>
    </Container>
    );
  }
}

export default Admin;