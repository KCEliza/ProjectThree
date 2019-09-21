import React, {Component} from "react";
import "./Profile.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Menu from "../../components/Menu";
import Cardfile from "../../components/Card/Card";

class Profile extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true,
        ideas: []
    }

    handleCommentChange = (event) => {
        const name = event.target.name;
        const comment = event.target.value;
        console.log(comment, "COMMENT INPUT")
        console.log(name,"NAME")
        this.setState({
            [name]: comment
        });
    }
    handleCommentSubmit = (event) =>{
      event.preventDefault();
      API.submitComment({
        // username: this.state.username,
        comment: this.state.comment
      });
    };

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

        API.retrieveIdeas().then(creates => {
            this.setState({
                ideas: creates
            })
            console.log(this.state)
        })

        console.log(this.props)
    }

    loading() {
        setTimeout(()=> {
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
                        
                        <div className="profileBox col-md-10 float-right">
                            <h1 id="userTitle">Welcome {this.state.user.username}</h1>
                            <h4>All Projects: </h4>
                            <Cardfile handleCommentChange = {this.handleCommentChange} handleCommentSubmit = {this.handleCommentSubmit}/>
                            <Cardfile />
                            <Cardfile />
                            <Cardfile />
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
                            <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
                        )}
                    </div> 
                    
                )}
            </>
        )
    }
}


export default Profile;