import React, {Component} from "react";
import "./Profile.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Menu from "../../components/Menu";
import CardFile from "../../components/Card";
import Filter from "../../components/Filter";
import _ from "lodash";


class Profile extends Component {
    state = { 
        loggedIn: false,
        user: null,
        loading: true,
        ideas: [],
        filters: [],
        displayedIdeas: [],
        likes: 0
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


    
    handleVote = () => {
        let likes = [this.state.likes]
        let likesCount = likes + 1
        
        this.setState({
            likes: likesCount
        })
            console.log("likes: ", this.state.likes)
            console.log("likesCount: ", likesCount)

        // API.vote({
        //     likes: this.state.likes
        // })
      }
      
    handleFilter = (filter) => {
        let filters = [filter]
        this.displayFiltered(filters)
        this.setState ({
            filters
        })
        console.log("filtered ideas 1: ", filters)

    }

    displayFiltered = (array) => {
            let ideas = [...this.state.ideas]

            // let displayedIdeas = ideas.filter(ideas => ideas.projectLevel.includes(filter)) works
            let displayedIdeas = _.filter(ideas, {projectLevel: array[0]});

            this.setState({
                displayedIdeas
            })
    }

    removeFilter = () => {
        this.setState({
            displayedIdeas: this.state.ideas,
            filters: []

        })
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
    // }

        API.retrieveIdeas().then(creates => {

            this.setState({
                ideas: creates.data,
                displayedIdeas: creates.data
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
                        <Menu/>
                        
                        <div className="profileBox col-md-10 float-right">
                            <h1 id="userTitle">Welcome {this.state.user.username}</h1>
                            <Filter 
                            handleFilter = {this.handleFilter}
                            />
                            {this.state.filters.map(filter => (
                                <Button onClick={this.removeFilter}>{filter}<i className="far fa-times-circle"></i></Button>  
                            ))}
                            <h4>All Projects: </h4>
                            {this.state.displayedIdeas.map(idea => (
                                <CardFile
                                        handleCommentChange = {this.handleCommentChange} 
                                        handleCommentSubmit = {this.handleCommentSubmit}
                                        handleVote = {this.handleVote}
                                        name={idea.username}
                                        title={idea.title}
                                        description={idea.description}
                                        projectLevel={idea.projectLevel}
                                        projectDiff={idea.projectDiff}
                                        tags={idea.tags}
                                        likes={idea.likes}
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
};


export default Profile;