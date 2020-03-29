import React, { Component } from 'react';
import axios from 'axios';
import { Form, Row, Col, Image } from 'react-bootstrap';
import Img from "../../images/profilepicture.jpg";
import AdminHeader from "../adminheader";

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
            <>
                <AdminHeader />
                <div class="mx-auto">
                    <img src={Img} />
                    <h3 className="text-center">{this.state.user.name}</h3>
                    <div class="container">
                    <Form className="user-form">
                        <div >
                            <Row className="form-group row">
                                <label className="col-sm-2">First Name: </label>
                                <input type="text"
                                    required
                                    className="form-control col-sm-10"
                                    value={this.state.user.name}
                                />

                            </Row>
                            <Row className="form-group row">
                                    <label className="col-sm-2">Last Name: </label>
                                    <input type="text"
                                        required
                                        className="form-control col-sm-10"
                                        value={this.state.user.name}
                                    />
                            </Row>
                            <Row className="form-group row">
                               <label className="col-sm-2">Email: </label>
                                <input
                                    type="text"
                                    className="form-control col-sm-10"
                                    value={this.state.user.email}
                                />
                            </Row>

                            <Row className="form-group row">
                                <label className="col-sm-2">Age: </label>
                                <input
                                    type="text"
                                    className="form-control col-sm-10"

                                />
                            </Row>

                            <Row className="form-group row">
                                <label className="col-sm-2">Country: </label>
                                <input
                                    type="text"
                                    className="form-control col-sm-10"
                                    value={this.state.user.country}
                                />
                            </Row>
                        </div>
                        {/* <div className="form-group">
                        <input type="submit" value="Apply Changes" className="btn btn-primary" />
        </div>*/}
                    </Form>
                    </div>
                </div>
            </>
        )
    }

}

export default EditUser;
