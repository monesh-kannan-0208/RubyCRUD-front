import "./App.css";

import SignUp from "./pages/SignUp/SignUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/LandingPage/Home";
import Profile from "./pages/Profile/Profile";

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Profile" component={Profile} />
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  </div>
);

export default App;