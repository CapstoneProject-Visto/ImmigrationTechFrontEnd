import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PersonalInfo from "../personal_info";

const routes = [
    {
        path:'/',
        exact: true
    },
    {
        path:'/personal_info',
        main: () => <div><PersonalInfo /></div>
    },
    {
        path:'/education',
        main: () => <h2>Education</h2>
    },
    {
        path:'/ielts_score',
        main: () => <h2>IELTS Score</h2>
    },
    {
        path:'/work_experience',
        main: () => <h2>Work Experience</h2>
    },
    {
        path:'/assesment',
        main: () => <h2>Assesment History</h2>
    }
]

class UserProfile extends Component {
  render(){
      return (
          <Router>
              <div style={{display:'flex'}}>
            <div style={{
padding:'10px',
width:'20%',
background:'#f0f0f0'
            }}>
                <ul style={{listStyleType:'none', padding: '10px', marginBottom: '20px',
           fontSize: '22px' }}>
                    <li><Link to='/personal_info'>Personal Information</Link></li>
                    <hr />
                    <li><Link to='/education'>Education</Link></li>
                    <hr />
                    <li><Link to='/ielts_score'>IELTS Score</Link></li>
                    <hr />
                    <li><Link to='/work_experience'>Work Experience</Link></li>
                    <hr />
                    <li><Link to='/assesment'>Assesment History</Link></li>
                </ul>

               
            </div>

            <div style={{flex:1, padding: '10px'}}>
                {routes.map((route) => (
                    <Route key={route.path}
                    path = {route.path}
                    exact = {route.exact}
                    component = {route.main}
                    />
                )
                )}
            </div>
              </div>
          </Router>
      )
  }
}

export default UserProfile;
