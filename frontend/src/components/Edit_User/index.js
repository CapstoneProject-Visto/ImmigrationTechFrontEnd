import React, { Component } from 'react';
import axios from 'axios';
import { Form, Row, Col } from 'react-bootstrap';

class EditUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: []
        }


    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/tasks/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    user: response.data,
                })
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    render() {
        return (
            <div class="col-md-4 offset-md-4">
                <h3>User Details</h3>
                <Form>
                    <Row>
                        <Col>
                            <label>Name: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.user.name}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Email: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.user.email}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Country: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.user.country}
                            />
                        </Col>
                    </Row>
                    <div className="form-group">
                        <input type="submit" value="Apply Changes" className="btn btn-primary" />
                    </div>

                </Form>
            </div>

        )
    }

}

export default EditUser;
