import React, { Component } from "react";
import "./style.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Menu from "../../components/Menu";
import SubmitIdea from "../../components/SubmitIdea"

class Submit extends Component {
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

        console.log(this.props)
    }

    loading() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    render() {
        return (

            <>

                {this.state.loggedIn ? (
                    <>

                        <Menu />

                        <div className="profileBox col-md-10 mg-l-50 mg-r-50 float-right overflow-auto">
                            <h2 className="text-md-left font-weight-bold">Submit Idea: </h2>
                            <hr></hr>
                            <SubmitIdea />

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
}


export default Submit;