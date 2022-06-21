import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing

import PrivateRoute from "./components/routing/PrivateRoute";

// Screens

import RegisterScreen from "./screens/RegisterScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";

//components

import { Navbar } from "./components/Navbar";
import { Backdrop } from "./components/Backdrop";
import { SideDrawer } from "./components/SideDrawer";
import HeroPage from "./components/HeroPage";


//screens
import { HomeScreen } from "./screens/HomeScreen";
import { ProductScreen } from "./screens/ProductScreen";
import { CartScreen } from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />

          <Route
            path="/forgotpassword"
            component={ForgotPasswordScreen}
            exact
          />
          <Route
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
            exact
          />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} exact />
          <Route path="/cart" component={CartScreen} exact />
        </Switch>
       
      </main>
    </Router>
  );
}

export default App;
