import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Select } from 'reactstrap';
// import "./Home.scss";
import axios from 'axios';
// import { STATUS_CODES } from "http";


class SubmitIdea extends Component {
    state = {
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
        const name = document.getElementById('name').value;
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

            < >
                <Form className="sumbitIdea">
                    
                    <FormGroup>
                        <Label for="title">Topic:  </Label>
                    <Input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="title"
                                value={this.state.title}
                                onChange={this.state.handleInputChange} />  
                    </FormGroup>
                    
                    <FormGroup>   
                    <Label for="description">Description: </Label>
                    <Input
                                type="description"
                                name="description"
                                id="description"
                                placeholder="description"
                                value={this.state.description}
                                onChange={this.state.handleInputChange} />
                        
                    </FormGroup>

                    <FormGroup> 
                    <label>
                        Project Level:</label>
                    <Select name="projectLevel" placeholder="Default" className="projectLevel" value={this.state.value} onChange={this.handleInputChange}>
                        <option value="default" placeholder="Default"></option>
                        <option value="project1">Project One</option>
                        <option value="project2">Project Two</option>
                        <option value="project3">Project Threet</option>
                        <option value="capstone">Capstone</option>

                    </Select>
                    </FormGroup> 

                    <FormGroup> 
                    <label>
                        Difficulty Level: </label>
                    <Select
                        name="difficultyLevel"
                        className="difficultyLevel"
                        value={this.state.value}
                        onChange={this.handleInputChange} >
                        <option value="default" placeholder="Default"></option>
                        <option value="easy" style={{ backgroundColor: "green" }}>Easy</option>
                        <option value="intermediate" style={{ backgroundColor: "orange" }}>Intermediate</option>
                        <option value="advanced" style={{ backgroundColor: "red" }}>Advanced</option> 
                        </Select>

                    </FormGroup>   
                    
                                      
                    {/* Need to make an API ile for the difrent tag */}
                    {/* <FormGroup>
                <label htmlFor="tag-choice">
                    Selected Tag(s):
                <input list="tags" id="tag-choice" name="tag-choice" className="form-control" placeholder="Choose tag(s)" />
                <datalist id="tags">
                    {this.state.tagList.map(tag =>(
                        <option value={tag} key={tag} />
                    ))}
                </datalist>
                </label>
                {/* <button type="submit" className="btn btn-success btn-block mt-2">Search</button> */}
                    {/* </FormGroup> */} 
                {/* {
                        projectTags.map(TimeRanges => {
                            `<option value=${level}> ${level} </option>`
                        })
                    } */}

                    <Button id="submitBtn" onClick={this.props.handleSubmit} block>Submit</Button>

                </Form>
            </>
        );
    }
}



export default SubmitIdea;
