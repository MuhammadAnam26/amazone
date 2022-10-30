import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

import {useStateValue} from "./StateProvider";
import { useEffect } from 'react'
import { FBAuth } from "./firebase"

function App() {
  const [dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    FBAuth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);
 

  return (
    <Router>
        <Header />
      <Login />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;