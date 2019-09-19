import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./style.css"

const Cardfile = (props) => {
  return (
    <div>
      <Card className="projectCard">
        <CardImg top src="https://img.pngio.com/bulb-icon-cartoon-illustration-hand-drawn-animation-transparent-with-regard-to-cartoon-light-bulb-animated-light-bulb-png-1920_1080.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Project Title</CardTitle>
          <CardSubtitle>Author</CardSubtitle>
          <CardText>Project description.</CardText>
          <Button className="btn-success">Great Idea!</Button>
          <Button className="btn-danger">Unenthused...</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cardfile;