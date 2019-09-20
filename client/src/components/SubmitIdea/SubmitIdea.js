import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import tags from "./tags.json";
import "./style.css";

import axios from 'axios';
// import { STATUS_CODES } from "http";


class SubmitIdea extends Component {
    state = {
        tags,
        title: "",
        description: ""
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleTagChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }



    //Need to incorporate Nodemailer to have an email sent to all memmbers to inform then that a new idea was submitted
    //Submit to add to database

    handleSubmit = event => {
        //Should handle sending email and storing the Idea information in the datatbase

        event.preventDefault();
        const name = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        //Need to work on having the inputs samed in the database      

        //Sending email      
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: {
                name: name,
                email: email,
                messsage: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        });
        // resetForm() {
        //     document.getElementById('sumbitIdea').reset();
        // }
    }

    //To clear the form after submitting an idea


    render() {

        return (
            <Form>
            <FormGroup>
                <Input type="name" name="username" id="username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
                <Input type="text" name="title" id="title" placeholder="Project Title" />
            </FormGroup>
            <FormGroup>
                <Input type="textarea" name="description" id="description" placeholder="Project Description"/>
            </FormGroup>
            <FormGroup>
                <Label for="projectLevel">Select <Link to="#">Project Level</Link></Label>
                <Input type="select" name="projectLevel" id="projectLevel">
                <option>Project 1</option>
                <option>Project 2</option>
                <option>Project 3</option>
                <option>Capstone</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="difficulty">Select Difficulty</Label>
                <Input type="select" name="projectDiff" id="projectDiff">
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
                    <Input type="checkbox" />{' '}
                    {tag.tag}
                    </Label>
                ))}
                
            </FormGroup>         
            <Button id="submitBtn" onClick={this.props.handleSubmit} block>Submit</Button>
            </Form>
        );
    
    }

}
    // {/* Need to make an API ile for the difrent tag */}
    //                 {/* <FormGroup>
    //             <label htmlFor="tag-choice">
    //                 Selected Tag(s):
    //             <input list="tags" id="tag-choice" name="tag-choice" className="form-control" placeholder="Choose tag(s)" />
    //             <datalist id="tags">
    //                 {this.state.tagList.map(tag =>(
    //                     <option value={tag} key={tag} />
    //                 ))}
    //             </datalist>
    //             </label>
    //             {/* <button type="submit" className="btn btn-success btn-block mt-2">Search</button> */}
    //                 {/* </FormGroup> */} 
    //             {/* {
    //                     projectTags.map(TimeRanges => {
    //                         `<option value=${level}> ${level} </option>`
    //                     })
    //                 } */}



export default SubmitIdea;
