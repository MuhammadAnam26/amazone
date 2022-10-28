import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route,Routes, } from "react-router-dom";
import Checkout from "./Checkout";
// import Login from "./Login"
function App() {
return (
    <Router>
  <div className="app">
        <Header/>
      {/* <Routes> */}
        {/* <Route path="/Checkout"> */}
        {/* <Route path="/" element={<Checkout />}> */}
       {/* <h1>Login Page</h1> */}
       <Checkout />
        {/* </Route> */}
        {/* <Route path ="/"> */}
          <Header/>
          <Home />
        {/* </Route> */}
      {/* </Routes> */}
  </div>
  </Router> 
);
}
export default App;