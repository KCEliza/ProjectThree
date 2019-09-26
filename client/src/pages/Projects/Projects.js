import React, { Component } from "react";
import "./Projects.css";
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
                    <div className="homeBox col-md-10 float-right">
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <div className="col-md-7 float-left align-middle jumboText">
                <h1 className="comingSoon">COMING SOON</h1>
                <h3>YOUR PROJECT PAGE</h3>
                <h3>
                  <ReactRotatingText className='landingRotating' items={['favorite new ideas', 'collaborate', 'see your ideas']} />
                </h3>
              </div>
              <div className="col-md-5 float-left text-center">
                <img alt="I HAVE NO IDEA logo" className="homeLogo img-fluid" src="/assets/images/lbWhite.png" />
              </div>
            </Container>
          </Jumbotron>
        </div>
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
};

}

export default Projects;