import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./style.css"

const Cardfile = (props) => {
  return (
    
    <div className="flip-card">
      <div className="flip-card-inner">
        <Card>
        <div className="flip-card-front">
        <CardImg className="image" src={props.image} alt="Card image cap" />
         <CardBody>
             <CardTitle>{props.name}</CardTitle>
             <CardSubtitle>{props.occupation}</CardSubtitle>
             <CardText>{props.location}</CardText>
           </CardBody>
        </div>
        <div className="flip-card-back">
             <CardTitle>Project Title</CardTitle>
             <CardSubtitle>Author</CardSubtitle>
             <CardText>Project description.</CardText>
             <Button className="btn-success">/\</Button>
             <Button className="btn-danger">\/</Button>
        </div>
        </Card>
      </div>
    </div>

);
};


export default Cardfile;