import React, { Component } from "react";
import "./Projects.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Jumbotron, Container } from 'reactstrap';
import ReactRotatingText from 'react-rotating-text';
import API from "../../utils/API";
import Menu from "../../components/Menu";


class Projects extends Component{
    state = {
        loggedIn: false,
        user: null,
        loading: true
    }
componentDidMount() {

   

    this.loading();

    API.isLoggedIn().then(user => {
        if (user.data.loggedIn) {
            this.setState({
                loggedIn: true,
                user: user.data.user
            });
        }
    }).catch(err => {
        console.log(err);
    });
};

loading() {
    setTimeout(() => {
        this.setState({
            loading: false
        })
    }, 1000)
};


render() {
    return (

        <>

            {this.state.loggedIn ? (
                <>
                    <Menu />
                    
                    <div className="comingBox col-md-10 float-right bottom-fix">
        <div>
          <Jumbotron fluid> 
            <Container fluid>
              <div className="col-md-7 float-left align-middle jumboText">
                <h1 className="comingSoon">COMING SOON!</h1>
                <h3>FUTURE DEVELOPMENT</h3>
                <h3>
                  <ReactRotatingText className='landingRotating' items={['private messaging', 'administrative log in', 'favorite new ideas', 'form teams with fellow bootcampers', 'general public licensing']} />
                </h3>
              </div>
              <div className="col-md-5 float-left text-center">
                <img alt="I HAVE NO IDEA logo" className="homeLogo img-fluid" src="/assets/images/lbWhite.png" />
              </div>
            </Container>
          </Jumbotron>
        </div>
        <Container fluid className="descWrap">
            <div className="descriptionWrap text-center container-fluid">
            <div className="col-md-2 float-left describeBox">
            <h4> Kristen Christeson</h4>
              <a class="white-text linkedin" href="https://www.linkedin.com/in/kristen-christeson-080927181/"><img class="logo" src="https://img.icons8.com/carbon-copy/2x/linkedin.png" alt = "linkedIn"></img></a>           
              </div>
              <div className="col-md-2 float-left describeBox">
              <h4> Genevieve DePriest</h4>
              <a class="white-text linkedin" href="https://www.linkedin.com/in/s-genevieve-depriest-02309674/"><img class="logo" src="https://img.icons8.com/carbon-copy/2x/linkedin.png" alt = "linkedIn"></img></a>               
              </div>
              <div className="col-md-1 float-left describeBox">

              </div>
              <div className="col-md-2 float-left describeBox">
              <h4> Christelle Mangama</h4>
              <a class="white-text linkedin" href="https://www.linkedin.com/in/mangama-christelle-39068620"><img class="logo" src="https://img.icons8.com/carbon-copy/2x/linkedin.png" alt = "linkedIn"></img></a> 
              </div>
              <div className="col-md-1 float-left describeBox">

              </div>
              <div className="col-md-2 float-left describeBox">
              <h4> Amber Moreyra</h4>
              <a class="white-text linkedin" href="https://www.linkedin.com/in/amber-moreyra-a2082870/"><img class="logo" src="https://img.icons8.com/carbon-copy/2x/linkedin.png" alt = "linkedIn"></img></a>                         
              </div>
              <div className="col-md-2 float-left describeBox">
              <h4> Claudia Pollinger</h4>
              <a class="white-text linkedin" href="https://www.linkedin.com/in/claudia-pollinger-a6958032/"><img class="logo" src="https://img.icons8.com/carbon-copy/2x/linkedin.png" alt = "linkedIn"></img></a>           
                
              </div>

            </div>
          </Container>
          <Container fluid>
          </Container>
      </div>

                </>
            ) : (
              <div className="noUser">
                  {!this.state.loading ? (
                      <>
                          <div className="container text-center">

                              <h1>please log in</h1>
                              <Link className="loginLink" to="/login"><Button className="loginBtn btn-large" color="info" >Login</Button></Link>

                          </div>
                      </>
                  ) : (
                      <img id="loadingIcon" src="./assets/images/lightbulb.gif" alt="loading"/>
                  )}
              </div> 
              
          )}
      </>
  )
}

};

export default Projects;