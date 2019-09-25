import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button} from 'reactstrap';
import tags from "./tags.json";
import "./style.css";
import API from "../../utils/API"
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
        const selectedTags = [...this.state.selectedTags]
        if (selectedTags.includes(value)) {
            for (var i = 0; i < selectedTags.length; i++) {
                if (selectedTags[i] === value) {
                    selectedTags.splice(i, 1);
                    console.log("THIS IS WORKING")
                };
            };
        }
        else {
            selectedTags.push(value);
            console.log("PUSH IS WORKING")
        };
        this.setState({
            selectedTags

        })
        console.log(selectedTags);
    };



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

<Form id="submitIdea">
            <FormGroup>
            <Label for="title">Title</Label>
                <Input value={this.state.title} onChange={this.handleInputChange} type="text" name="title" id="title" placeholder="Project Title" />
            </FormGroup>
            <FormGroup>
            <Label for="description">Description</Label>
                <Input value={this.state.description} onChange={this.handleInputChange} type="textarea" name="description" id="description" placeholder="Project Description"/>
            </FormGroup>
            <FormGroup>
                <Label for="projectLevel">Select <Link to="#">Project Level</Link></Label>
                <Input value={this.state.projectLevel} onChange={this.handleInputChange} type="select" name="projectLevel" id="projectLevel">
                <option>Project 1</option>
                <option>Project 2</option>
                <option>Project 3</option>
                <option>Capstone</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="projectDiff">Select Difficulty<Link to="#">Project Difficulty</Link></Label>
                <Input value={this.state.projectDiff} onChange={this.handleInputChange} type="select" name="projectDiff" id="projectDiff">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Challenge</option>
                </Input>
            </FormGroup>
            <FormGroup check>
                <Label for="tags">Please check all that apply: </Label>
                <br></br>
                {this.state.tags.map(tag => (
                    <Label check>
                    <Input value={tag.tag} onChange={this.handleTagChange} type="checkbox" />{' '}
                    {tag.tag}
                    </Label>
                ))}
                
            </FormGroup>         
            <Button id="submitBtn" onClick={this.handleSubmit} block>Submit</Button>
            </Form>

            // <Form controlId="submitIdea">
            //     <Form.Group>
            //         <Form.Label> for="title">Title </Form.Label>
            //         <Form.Control value={this.state.title} onChange={this.handleInputChange} type="text" name="title" id="title" placeholder="Project Title" />
            //     </Form.Group>
            //     <Form.Group>
            //         <Form.Label for="description">Description</Form.Label>
            //         <Form.Control value={this.state.description} onChange={this.handleInputChange} type="textarea" name="description" id="description" placeholder="Project Description" />
            //     </Form.Group>
            //     <Form.Group>
            //         <Form.Label for="projectLevel">Select <Link to="#">Project Level</Link></Form.Label>
            //         <Form.Control as="select" value={this.state.projectLevel} onChange={this.handleInputChange} name="projectLevel" id="projectLevel" multiple>
            //             <option>Project 1</option>
            //             <option>Project 2</option>
            //             <option>Project 3</option>
            //             <option>Capstone</option>
            //         </Form.Control>
            //     </Form.Group>
            //     <Form.Group>
            //     <Form.Label for="projectDiff">Select Difficulty<Link to="#">Project Difficulty</Link></Form.Label>
            //         <Form.Control as="select" value={this.state.projectDiff} onChange={this.handleInputChange} name="projectDiff" id="projectDiff" multiple>
            //             <option>Beginner</option>
            //             <option>Intermediate</option>
            //             <option>Challenge</option>
            //         </Form.Control>
            //     </Form.Group>
            //     <Form.Group check>
            //         <Form.Label for="tags">Please check all that apply: </Form.Label>
            //         <br></br>
            //         {this.state.tags.map(tag => (
            //             <Form.Label check>
            //                 <Form.Control value={tag.tag} onChange={this.handleTagChange} type="checkbox" />{' '}
            //                 {tag.tag}
            //             </Form.Label>
            //         ))}
            //     </Form.Group>
            //     <Button id="submitBtn" onClick={this.handleSubmit} block>Submit</Button>
            // </Form>
        );

    }

}
export default withRouter(SubmitIdea);