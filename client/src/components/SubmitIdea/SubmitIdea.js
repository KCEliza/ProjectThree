import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Link } from "react-router-dom";
import "./Home.scss";
import { STATUS_CODES } from "http";


class IdeaForm extends Component {
    state = {
        title: "",
        description: "",
        codes: ""

    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };


    handleSubmit = event => {
        event.preventDefault();

    }

    SubmitIdea(props) {
    return (
        <div className="sumbitIdea">
            <Form>
                <FormGroup>
                    <Label for="title">Username</Label>
                    <Input type="text" name="title" id="title" placeholder="title" value={props.title} onChange={props.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Password</Label>
                    <Input type="description" name="description" id="description" placeholder="description" value={props.description} onChange={props.handleInputChange} />
                </FormGroup>
                <Select name="projectLevel">
                    {
                        classCodes.map(level => {
                            `<option value=${level}> ${level} </option>`
                        })
                    }
                </Select>

                <Button id="submitBtn" onClick={props.handleSubmit} block>Submit</Button>
                <p className="submitLink">
                    <Link to="/submit">dont have an account?  Sign up here</Link>
                </p>
            </Form>
        </div>
    );
}




export default IdeaForm;
