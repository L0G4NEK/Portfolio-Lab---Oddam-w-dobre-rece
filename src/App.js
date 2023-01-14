import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import HomeHeader from "./components/HomeHeader";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/SignIn">
              <SignIn />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
