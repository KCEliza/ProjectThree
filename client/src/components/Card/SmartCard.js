import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, 
    InputGroup, Input, InputGroupText,
    InputGroupAddon
  } from 'reactstrap';
  

const Cardfile = props =>  {


  
    return (
      <div>
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
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
            <div className="flip-card-back description">
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.name}</CardSubtitle>
                <CardText >Description: {props.description}</CardText>
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
            
            
            <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
            </div>
        </Modal>
                </Card>
            </div>
        </div>
      </div>
    );
}


export default Cardfile;