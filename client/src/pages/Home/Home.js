import React, { Component } from "react";
import API from "../../utils/API";
import "./Home.scss";
import { Jumbotron, Container } from 'reactstrap';

class Home extends Component {

  state = {
    loggedIn: false,
  };

  componentDidMount() {
    this.loggedIn();
  }


  loggedIn = () => {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="homeBox">
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Need an idea ? </h1>
              <p className="lead">IHaveNoIdea gives you the power and inspiration to find ideas for school projects or future capstones. </p>
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Home;