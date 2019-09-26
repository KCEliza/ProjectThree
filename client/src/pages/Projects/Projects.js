import React, { Component } from "react";
import "./Projects.css";
import Menu from "../../components/Menu";

class Projects extends Component{

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

                    <div className="comingSoon">
                
                    Coming Soon
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