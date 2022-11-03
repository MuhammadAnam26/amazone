import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import { useEffect } from 'react'
import { auth } from "./firebase"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe("pk_test_51LzOeeIXVxSYRSKMTgehzyeXbuVa2DdkvKPVejZVxDRXkEo22E3Lk54fddNnBSnr6TCDuZUgatO60pRXIEYucpOs00pXVbnQy4");

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, [dispatch]);


  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route
            path="/payment"
            element={(
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            )}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;





