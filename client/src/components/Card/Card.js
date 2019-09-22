import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  InputGroup, Input, InputGroupText,
  InputGroupAddon
} from 'reactstrap';
import "./style.css"
import API from '../../utils/API';

const Cardfile = (props) => {

  return (
    
    <div className="flip-card">
      <div className="flip-card-inner">
        <Card>
        <div className="flip-card-front">
        <CardImg className="image" src="https://img.pngio.com/bulb-icon-cartoon-illustration-hand-drawn-animation-transparent-with-regard-to-cartoon-light-bulb-animated-light-bulb-png-1920_1080.png" alt="Card image cap" />
         <CardBody>
             <CardTitle>{props.username}</CardTitle>
             <CardSubtitle>{props.title}</CardSubtitle>
           </CardBody>
        </div>
        <div className="flip-card-back">
             <CardTitle>{props.title}</CardTitle>
             <CardSubtitle>{props.username}</CardSubtitle>
             <CardText>Description: {props.description}</CardText>
             <CardText>Project Level: {props.projectLevel}</CardText>
             <CardText>Project Difficulty: {props.projectDiff}</CardText>
             <CardText>Tags: {props.tags}</CardText>
             <InputGroup>
              <Input onChange= {props.handleCommentChange}/>
              <InputGroupAddon addonType="append">
                <InputGroupText onClick = {props.handleCommentSubmit}>Comment</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <Button className="btn-success"><i className="fas fa-thumbs-up"></i></Button>
            <Button className="btn-danger"><i className="fas fa-thumbs-down"></i></Button>
        </div>
        
        </Card>
      </div>
    </div>

);
};

export default Cardfile;