import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  InputGroup, Input, InputGroupText,
  InputGroupAddon
} from 'reactstrap';
import "./style.css"

// import API from "../../utils/API";



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
            <CardTitle>{props.title}</CardTitle>
            
          </CardBody>
        </div>
        <div className="flip-card-back">
        <div className="superBack">
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>Created By: {props.name}</CardSubtitle>
            <CardText>Description: {props.description}</CardText>
            <CardText>Level: {props.projectLevel}</CardText>
            <CardText>Project Difficulty: {props.projectDiff}</CardText>
            <CardText className="tags">Tags: {props.tags}</CardText>
            <Button id="likeBtn" onClick={props.handleVote}><i className="fas fa-thumbs-up"></i></Button>
            <CardText id="likeText">Likes: {props.likes}</CardText>
             <InputGroup>
              <Input onChange= {props.handleCommentChange}/>
              <InputGroupAddon addonType="append">
                <InputGroupText onClick = {props.handleCommentSubmit}>Comment</InputGroupText>

                
              </InputGroupAddon>
            </InputGroup>

            <CardText>{props.comment}</CardText>
            </div>
        
        </div>
        </Card>
      </div>
  </div>

);

};

export default Cardfile;