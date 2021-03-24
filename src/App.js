import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./containers/Layout/Layout";
import Logout from "./containers/Auth/Logout/Logout";
import asyncComponent from "./hoc/AsyncComponent/asyncComponent";

class App extends Component {
  render() {
    const AsyncCheckout = asyncComponent(() => {
      return import("./containers/Checkout/Checkout");
    });
    const AsyncAuth = asyncComponent(() => {
      return import("./containers/Auth/Auth");
    });
    const AsyncOrders = asyncComponent(() => {
      return import("./containers/Orders/Orders");
    });
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={AsyncCheckout} />
            {this.props.isAuth ? (
              <Route path="/orders" component={AsyncOrders} />
            ) : null}
            <Route path="/auth" component={AsyncAuth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={BurgerBuilder} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

export default withRouter(connect(mapStateToProps)(App));
