import React, { Component } from "react";
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
        comment:{},
        comments: []
    }

    // handleCardClick = (id) => {
    //     console.log(id)
    // }

    handleCommentChange = (event) => {

        // const name = event.target.name;
        const comment = event.target.value;
        console.log(comment, "COMMENT INPUT")
        // console.log(name,"NAME")
        this.setState({
            comment
        });
    }

    handleCommentSubmit = (event) => {
        event.preventDefault();
        console.log("did it work")
        API.submitComment({
            _id: this.state.id,
            comment: this.state.comment
        }).then(res => {
            this.setState({ comment: res.data.comment , comments:res.data.comment});
            
            console.log(res.data.comment);
        })
    };


    
    handleVote = (id, likes) => {
          API.vote(id, likes + 1) 
        .then(res => {
            API.retrieveIdeas().then(creates => {
                console.log("updated ideas", creates.data);

                this.setState({
                    ideas: creates.data,
                    displayedIdeas: creates.data
                }, () => {
                    if (this.state.filters.length) {
                        this.displayFiltered(this.state.filters);    
                    }
                })
            })
        })
        .catch(err => console.log(err))
    };      
      
      
    handleFilter = (filter) => {
        let filters = [filter]
        this.displayFiltered(filters)
        this.setState ({
            filters
        })

    }

    displayFiltered = (array) => {
            let ideas = [...this.state.ideas]

            // let displayedIdeas = ideas.filter(ideas => ideas.projectLevel.includes(filter)) works
            console.log("filter to be applied: " + array[0]);
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
                ideas: creates.data,
                displayedIdeas: creates.data
            })
            console.log(creates)
        })

        console.log(this.props)
    }

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
                        <div className="profileBox col-md-10 float-right">
                            <h4 id="userTitle">Welcome {this.state.user.username}</h4>
                            <Filter
                                handleFilter={this.handleFilter}
                            />
                            {this.state.filters.map(filter => (
                                <Button onClick={this.removeFilter}>{filter}<i className="far fa-times-circle"></i></Button>  
                            ))}
                            <h4>All Projects: </h4>

                            {this.state.displayedIdeas.map(idea => (
                                <CardFile
                                    handleCommentChange={this.handleCommentChange}
                                    handleCommentSubmit={this.handleCommentSubmit}
                                    handleVote = {() => this.handleVote(idea._id, idea.likes)}
                                    name={idea.username}
                                    title={idea.title}
                                    description={idea.description}
                                    projectLevel={idea.projectLevel}
                                    projectDiff={idea.projectDiff}
                                    tags={idea.tags}
                                    comments={idea.comments}
                                    id={idea._id}
                                    likes={idea.likes}
                                >
                                </CardFile>
                            
                            ))}
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


export default Profile;