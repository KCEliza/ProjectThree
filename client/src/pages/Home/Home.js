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
              <h1 className="display-3">I Have No Idea </h1>
              <p className="lead">I Have No Idea, your friendly neighborhood idea library. You could be just starting to dig in to your very first boot camp project; everything is new, and confusing and you have no idea what to create. No worries! We've got you covered, sign up with your bootcamp code, and browse our project one ideas for whatever your heart desires. </p>
              <p className = "lead">Time has passed and now here we are; it's project three, you are almost done with this roller coaster of life we call a boot camp! The only question on your mind, 'How am I going to blow everyone's socks off with what I create?' No Problem! Go into project three, filter through our options to find out which project really jives with your vibes.</p>
              <p className = "lead">Maybe you're one of those people who is just an idea person, you have to carry paper around with you constantly to get out all these incredible ideas your brain throws at you. Help your fellow boot campers out, go submit your ideas, give us as much detail as you can, pick your categories and submit your idea. Then watch people vote, and create your incredible ideas!</p>
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Home;