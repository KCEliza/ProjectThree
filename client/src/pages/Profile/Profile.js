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
        filteredIdeas: [],
        displayedIdeas: [],
        comment:{},
        comments: []
    }

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


    handleFilter = (filter) => {
        let filteredIdeas = [...this.state.filteredIdeas, filter]
        this.displayFiltered(filteredIdeas)
        this.setState({
            filteredIdeas
        })
        console.log(filteredIdeas)
    }

    displayFiltered = (array) => {
        console.log(array)
        //do lodash
        //set state for display ideas
    }

    removeFilter = (filter) => {
        let filteredIdeas = [...this.state.filteredIdeas]
        //spilce filter out of filteredIdeas array
        if (filteredIdeas.includes(filter)) {
            for (var i = 0; i < filteredIdeas.length; i++) {
                if (filteredIdeas[i] === filter) {
                    filteredIdeas.splice(i, 1);
                    console.log("THIS IS WORKING")
                };
            };
        }
        else {
            filteredIdeas.push(filter);
            console.log("PUSH IS WORKING")
        };
        this.displayFiltered(filteredIdeas)
        this.setState({
            filteredIdeas
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
                            {this.state.filteredIdeas.map(filter => (
                                <button
                                    onChange={this.removeFilter}>{filter}</button> //make secondary filter click (remove filter function on the click of this button --> remove lower case curly bracket item from filtered ideas and update displayed ideas)
                            ))}
                            <h4>All Projects: </h4>

                            {this.state.displayedIdeas.map(idea => (
                                <CardFile
                                    handleCommentChange={this.handleCommentChange}
                                    handleCommentSubmit={this.handleCommentSubmit}
                                    name={idea.username}
                                    title={idea.title}
                                    description={idea.description}
                                    projectLevel={idea.projectLevel}
                                    projectDiff={idea.projectDiff}
                                    tags={idea.tags}
                                    comments={idea.comments}

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