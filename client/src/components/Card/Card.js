import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  InputGroup, Input, InputGroupText,
  InputGroupAddon
} from 'reactstrap';
import "./style.css"

const Cardfile = (props) => {
  return (
    
    <div className="flip-card">
      <div className="flip-card-inner">
        <Card>
        <div className="flip-card-front">
        <CardImg className="image" src="https://img.pngio.com/bulb-icon-cartoon-illustration-hand-drawn-animation-transparent-with-regard-to-cartoon-light-bulb-animated-light-bulb-png-1920_1080.png" alt="Card image cap" />
         <CardBody>
             <CardTitle>Project Title</CardTitle>
             <CardSubtitle>Author</CardSubtitle>
             <CardText>Project description.</CardText>
           </CardBody>
        </div>
        <div className="flip-card-back">
             <CardTitle>Project Title</CardTitle>
             <CardSubtitle>Author</CardSubtitle>
             <CardText>Project description.</CardText>
             <InputGroup>
              <Input />
              <InputGroupAddon addonType="append">
                <InputGroupText>Comment</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
             <Button className="btn-success">/\</Button>
             <Button className="btn-danger">\/</Button>
             
        </div>
        
        </Card>
      </div>
    </div>

);
};


export default Cardfile;