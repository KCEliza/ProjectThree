import React, {Component} from "react";
import "./Profile.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Menu from "../../components/Menu";
import CardFile from "../../components/Card/Card";


class Profile extends Component {
    state = { 
        loggedIn: false,
        user: null,
        loading: true,
        ideas: []
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

        API.retrieveIdeas().then(creates => {

            this.setState({
                ideas: creates.data
            })
            console.log(creates)
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
                            {this.state.ideas.map(idea => (
                                <CardFile
                                          
                                        name={idea.username}
                                        title={idea.title}
                                        description={idea.description}
                                        projectLevel={idea.projectLevel}
                                        projectDiff={idea.projectDiff}
                                        tags={idea.tags}
                                    
                                    >
                                </CardFile>
                            ))                            }
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