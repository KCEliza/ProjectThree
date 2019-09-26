import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  InputGroup, Input, InputGroupText,
  InputGroupAddon
} from 'reactstrap';
import "./style.css"

import API from "../../utils/API";
// import API from '../../utils/API';


const Cardfile = (props) => {

  return (
    
    <div className="flip-card">
      <div className="flip-card-inner">
        <Card>
        <div className="flip-card-front">
          <div className="imageWrap">
            <CardImg className="image" src="/assets/images/lbWhite.png" alt="Card image cap" />
          </div>
          <CardBody>
            <CardTitle>{props.username}</CardTitle>
            <CardSubtitle>{props.title}</CardSubtitle>
          </CardBody>
        </div>
        <div className="flip-card-back">
             <CardTitle>{props.title}</CardTitle>
             <CardSubtitle>{props.username}</CardSubtitle>
             <CardText>Description: {props.description}</CardText>
             <CardText>Level: {props.projectLevel}</CardText>
             <CardText>Project Difficulty: {props.projectDiff}</CardText>
             <CardText>Tags: {props.tags}</CardText>

             <Button className="btn-success"><i className="fas fa-thumbs-up"></i></Button>
            <Button className="btn-danger"><i className="fas fa-thumbs-down"></i></Button>
             <InputGroup>
              <Input onChange= {props.handleCommentChange}/>
              <InputGroupAddon addonType="append">
                <InputGroupText onClick = {props.handleCommentSubmit}>Comment</InputGroupText>

                
              </InputGroupAddon>
            </InputGroup>

            <CardText>{props.comment}</CardText>
        
        </div>
        
        </Card>
      </div>
    </div>

);
};

export default Cardfile;