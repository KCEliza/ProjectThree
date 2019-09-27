import React, { Component } from "react";
import API from "../../utils/API";
import ReactRotatingText from 'react-rotating-text';

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
              <div className="col-md-7 float-left align-middle jumboText">
                <h1 className="display-3">I HAVE NO IDEA</h1>
                <h3>BOOTCAMP PROJECT INCUBATOR</h3>
                <h3>
                  <ReactRotatingText className='landingRotating' items={['find ideas', 'generate ideas', 'collaborate']} />
                </h3>
              </div>
              <div className="col-md-5 float-left text-center">
                <img alt="I HAVE NO IDEA logo" className="homeLogo img-fluid" src="/assets/images/lbWhite.png" />
              </div>
            </Container>
          </Jumbotron>

          <Container fluid className="descWrap">
            <div className="descriptionWrap text-center container-fluid">
              <div className="col-md-4 float-left describeBox">
                <i className="fas fa-search"></i>
                <h4> FIND IDEAS</h4>
                <h5 className="describing">
                  Can't think of a project idea?  Filter through our options to find out which project really jives with your vibes!  
                </h5>
              </div>
              <div className="col-md-4 float-left describeBox">
                <i className="fas fa-bolt"></i>              
                <h4> GENERATE IDEAS</h4>
                <h5 className="describing">
                  Have a coding project burning in the back of your mind?  Submit an idea to further collaborate!
                </h5>
              </div>
              <div className="col-md-4 float-left describeBox">
                <i class="fas fa-comments"></i>              
                <h4> COLLABORATE</h4>
                <h5 className="describing">
                  Connect with others enrolled in Trilogy webdev bootcamps by leaving suggestions and ideas in the comments box!   
                </h5>
              </div>

            </div>
          </Container>
          <Container fluid>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;

