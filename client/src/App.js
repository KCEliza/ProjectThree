import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Submit from "./pages/Submit"
import NoMatch from "./pages/NoMatch";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
// import { Container } from 'reactstrap';


function App() {
  return (
   
      <Router>
        <>
          <TopNav />
          {/* <Container> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
              <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/profile/submit" render={(props) => <Submit {...props} action="submit" />} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path = "/profile/myprojects" component = {Projects} />
              <Route component={NoMatch} />
            </Switch>

          {/* </Container> */}
          <Footer />
        </>
      </Router>
  )
}

export default App;
