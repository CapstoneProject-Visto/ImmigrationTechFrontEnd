import React, { Component } from "react";
import Information from './info-json';
import { ListGroup, Image, DropdownButton, Dropdown } from "react-bootstrap";
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AdminLogin extends Component {

  constructor() {
    super();

    this.state = {
      search: null,
      category: 'name'
    };
    this.handleChange = this.handleChange.bind(this);
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

  handleListClick =()=>{
    console.log("Hi Toral!");
    // make an API Call using ID (which u will get from token)

    // get data 

    // pass via props tosome component
  }

  render() {

    const items = Information.filter((data) => {
      if (this.state.search == null)
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
    }).map(data => {
      return (
        <div class="d-flex justify-content-center mb-3">
          <Image src={data.image} width='100' height='100' />
          {/* TODO put onclick event */}
          <ListGroup variant="flush" onClick={this.handleListClick}>
            <ListGroup.Item><a href="/UserInfo">{data.name}</a>
              <span><br /><a href="/UserInfo">{data.email}</a>
                <br /><a href="/UserInfo">{data.country}</a></span>
            </ListGroup.Item>
          </ListGroup>
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

    )
  }
}
export default AdminLogin;

