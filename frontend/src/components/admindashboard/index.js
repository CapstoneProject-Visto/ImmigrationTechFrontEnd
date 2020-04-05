import React, { Component } from "react";
import { ListGroup, Image, DropdownButton, Dropdown } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Img from "../../images/profilepicture.jpg";

class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: null,
      category: "name",
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  removeUser(id) {
    axios.delete("http://localhost:5000/api/tasks/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      users: this.state.users.filter(g => g.id !== id)
    });
  }

  handleChange(event) {
    this.setState({
      category: event.target.value
    });
  }

  searchSpace = event => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  componentDidMount() {
    let token = sessionStorage.getItem("token");
    let config = {
      headers: {
        "x-auth-token": token,
        "Content-Type": "application/json"
      }
    };
    axios
      .get("http://localhost:5000/api/admin/getAllUsers", config)
      .then(res => {
        this.setState({
          users: res.data.data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const items = this.state.users
      .filter(data => {
        if (this.state.search === null) return data;
        else if (
          data.name.toLowerCase().includes(this.state.search.toLowerCase()) &&
          this.state.category === "name"
        ) {
          return data;
        } else if (
          data.email.toLowerCase().includes(this.state.search.toLowerCase()) &&
          this.state.category === "email"
        ) {
          return data;
        } else if (
          data.country
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) &&
          this.state.category === "country"
        ) {
          return data;
        }
      })
      .map(data => {
        return (
          <div class="d-flex justify-content-center mb-3">
            <Image src={Img} width="100" height="100" />
            <Link to={"/editUser/" + data.id}>
              <ListGroup variant="flush" key={data.id}>
                <ListGroup.Item>
                  {data.first_name}
                  <span>
                    <br />
                    {data.email}
                    <br />
                    {data.country}
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </Link>
            <a
              href="#"
              class="align-bottom"
              onClick={() => {
                this.removeUser(data.user_id);
              }}
            >
              Delete
            </a>
          </div>
        );
      });

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
            <FormControl
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={e => this.searchSpace(e)}
            />
          </InputGroup>
        </div>
        {items}
      </>
    );
  }
}

export default withRouter(AdminLogin);
