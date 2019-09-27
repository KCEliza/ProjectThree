import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import tags from "./tags.json";
import "./style.css";
import API from "../../utils/API"
// import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:regular,bold,italic&subset=latin,latin-ext');
// import axios from 'axios';
// import { STATUS_CODES } from "http";


class SubmitIdea extends Component {
    state = {
        tags,
        title: "",
        description: "",
        projectLevel: "Project 1",
        projectDiff: "Beginner",
        selectedTags: []

    }

    redirect = () => this.props.history.push("/profile");

    handleInputChange = event => {
        console.log("props in handleInputChange", this.props)
        const value = event.target.value;
        const name = event.target.name;
        console.log(value, "VALUE")
        console.log(name, "NAME")
        this.setState({
            [name]: value
        });
    }

    handleTagChange = event => {
        // alert("tag change")

        const value = event.target.value;
        // const name = event.target.name;
        const selectedTags = [...this.state.selected]
        if (selectedTags.includes(value)) {
            for (var i = 0; i < selectedTags.length; i++) {
                if (selectedTags[i] === value) {
                    selectedTags.splice(i, 1);
                };
            };
        }
        else {
            selectedTags.push(value);
        };
        this.setState({
            selectedTags

        })
        console.log(selectedTags);
    }

    //Need to incorporate Nodemailer to have an email sent to all memmbers to inform then that a new idea was submitted
    //Submit to add to database

    handleSubmit = event => {
        //Should handle sending email and storing the Idea information in the datatbase

        event.preventDefault();
        // console.log("props in handleSubmit", this.props)

        API.submitIdea({
            title: this.state.title,
            description: this.state.description,
            projectLevel: this.state.projectLevel,
            projectDiff: this.state.projectDiff,
            tags: this.state.selectedTags,

        })
            .then(res => this.redirect())
            .catch(err => console.log(err));
        // this.props.history.push("/profile")
        // .then.handleSubmit();

    }

    render() {

        return (

            <Form id="submitIdea" class="m-x-50 m-t-100 align-middle">

                    <FormGroup className="formGroup hidden">
                        <Label for="title">Title</Label>
                        <Input value={this.state.title} onChange={this.handleInputChange} type="text" name="title" id="title" placeholder="Project Title" />
                    </FormGroup>
    
                <FormGroup className="formGroup">
                    <Label for="description">Description</Label>
                    <Input value={this.state.description} onChange={this.handleInputChange} type="textarea" name="description" id="description" placeholder="Project Description" />
                </FormGroup>

                <FormGroup className="formGroup">
                    <Label for="projectLevel">Select Project Level <Link to="#"><i>Level</i></Link></Label>
                    <Input value={this.state.projectLevel} onChange={this.handleInputChange} type="select" name="projectLevel" id="projectLevel">
                        <option>Project 1</option>
                        <option>Project 2</option>
                        <option>Project 3</option>
                        <option>Capstone</option>
                    </Input>
                </FormGroup>

                <FormGroup className="formGroup">

                    <Label for="projectDiff">Select Difficulty<Link to="#"><i>Difficulty</i></Link></Label>
                    <Input value={this.state.projectDiff} onChange={this.handleInputChange} type="select" name="projectDiff" id="projectDiff">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Challenge</option>
                    </Input>

                </FormGroup>

                <FormGroup check>
                    <div for="tags" clasName="tagsLabel">Please check all that apply: </div>
                    <br></br>
                    <div>
                        {this.state.tags.map(tag => (
                            <Label check className="checkboxLabel">
                                <Input value={tag.tag} onChange={this.handleTagChange} type="checkbox" />{' '}
                                {tag.tag}
                            </Label>
                        ))}
                    </div>
                </FormGroup>
                <br></br>
                <br></br>
                <Button id="submitBtn" onClick={this.handleSubmit} block className="btn btn-outline-secondary btn-lg btn-block">Submit</Button>
            </Form>

        );

    }

}
export default withRouter(SubmitIdea);