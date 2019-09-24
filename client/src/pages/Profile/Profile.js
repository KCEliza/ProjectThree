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
        filteredIdeas: [],
        displayedIdeas: []
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

    handleFilter = (filter) => {
        let filteredIdeas = [...this.state.filteredIdeas, filter]
        this.displayFiltered(filteredIdeas)
        this.setState ({
            filteredIdeas
        })
        console.log("filtered ideas 1: ", filteredIdeas)

    }

    displayFiltered = (array) => {
        //do lodash
            let ideas = [...this.state.ideas]

            // let displayedIdeas = ideas.filter(ideas => ideas.projectLevel.includes(filter)) works
            // let displayedIdeas = _.filter(ideas, something => something.projectLevel === "Project 2") works
            let displayedIdeas = _.filter(ideas, {projectLevel: array[0]});

            this.setState({
                displayedIdeas
            })
            console.log("ideas: ", ideas);
            console.log("displayed ideas: ", displayedIdeas);
            console.log("array: ", array);
        // let displayedIdeas = _.filter(this.state.ideas, ["projectLevel", {filter}])
        // this.handleFilter(displayedIdeas)
        //set state for display ideas
        // this.setState({
        //     displayedIdeas
        // })
    }

   // (remove filter function on the click of this button --> remove lower case curly bracket item from filtered ideas and update displayed ideas)
    removeFilter = () => {
        this.setState({
            displayedIdeas: this.ideas
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
                        <Menu />
                        
                        <div className="profileBox col-md-10 float-right">
                            <h1 id="userTitle">Welcome {this.state.user.username}</h1>
                            <Filter 
                            handleFilter = {this.handleFilter}
                            />
                            {this.state.filteredIdeas.map(filter => (
                                <Button id="filterBtn" onClick={this.removeFilter}>{filter}</Button> //make secondary filter click 
                            ))}
                            <h4>All Projects: </h4>
                            {this.state.displayedIdeas.map(idea => (
                                <CardFile
                                        handleCommentChange = {this.handleCommentChange} 
                                        handleCommentSubmit = {this.handleCommentSubmit}
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