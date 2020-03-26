import React, { Component } from "react";
import { ListGroup, Image, DropdownButton, Dropdown } from "react-bootstrap";
import { InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";
import DetailedUser from "../detaileduser";
import FileNotFound from "../filenotfound";

class AdminLogin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: null,
      category: 'name',
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(id){
       console.log(`${id} clicked`); 
  }

  handleChange(event) {
    this.setState({
      category: event.target.value
    });
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/tasks').then(response => {
      this.setState({ users: response.data });
      console.log(response);
    });
  }


  render() {
    {/*console.log(`Torals data - ${this.state.users}`);*/}
    const items = this.state.users.filter((data) => {
      if (this.state.search === null)
        return data
      else if (data.name.toLowerCase().includes(this.state.search.toLowerCase()) && this.state.category === 'name') {
        return data
      }
      else if (data.email.toLowerCase().includes(this.state.search.toLowerCase()) && this.state.category === 'email') {
        return data
      }
      else if (data.country.toLowerCase().includes(this.state.search.toLowerCase()) && this.state.category === 'country') {
        return data
      }
    }).map((data,i) => {
      return (
        <div class="d-flex justify-content-center mb-3">
          <Image src={data.image} width='100' height='100' />
          {/* TODO put onclick event */}
          <Link
                to={{
                  pathname: `/users/${data.id}` 
                }}
              >              
          <ListGroup variant="flush" key={i}>
            <ListGroup.Item>{data.name}
              <span><br />{data.email}
                <br />{data.country}</span>
            </ListGroup.Item>
          </ListGroup> 
          </Link>
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
          <InputGroup className="mb-3">
            <DropdownButton
              as={InputGroup.Prepend}
              variant="secondary"
              title={this.state.category}
              id="input-group-dropdown-1"
            >
              <Dropdown.Item>
                <ul>
                  <li>
                    <label>
                      <input
                        type="radio"
                        value="name"
                        checked={this.state.category === "name"}
                        onChange={this.handleChange}
                      />
              name
            </label>
                  </li>

                  <li>
                    <label>
                      <input
                        type="radio"
                        value="email"
                        checked={this.state.category === "email"}
                        onChange={this.handleChange}
                      />
              email
            </label>
                  </li>

                  <li>
                    <label>
                      <input
                        type="radio"
                        value="country"
                        checked={this.state.category === "country"}
                        onChange={this.handleChange}
                      />
              country
            </label>
                  </li>
                </ul>

              </Dropdown.Item>
            </DropdownButton>
            <FormControl type="text" placeholder="Search" aria-label="Search" onChange={(e) => this.searchSpace(e)} />
          </InputGroup>
        </div>
        {items}
      </>

    );
  }
}

export default AdminLogin;

