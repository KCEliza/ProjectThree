import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import SubmitIdea from "./components/SubmitIdea";
// import { Container } from 'reactstrap';

function App() {
  return (
    <SubmitIdea />
      // <Router>
      //   <>
      //     <TopNav />
      //     {/* <Container> */}
      //       <Switch>
      //         <Route exact path="/" component={Home} />
      //         <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
      //         <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
            
      //         <Route exact path="/profile" component={Profile} />
      //         <Route component={NoMatch} />t
      //       </Switch>
      //     {/* </Container> */}
      //     <Footer />
      //   </>
      // </Router>
  )
}

export default App;
