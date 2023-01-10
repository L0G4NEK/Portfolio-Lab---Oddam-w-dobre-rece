import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/SignIn">
                <SignIn />
              </Route>
              <Route path="/SignUp">
                <SignUp />
              </Route>
            </Switch>
          </div>
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
