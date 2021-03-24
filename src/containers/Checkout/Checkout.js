import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import CheckoutSummery from "../../components/Order/CheckoutSummery/CheckoutSummery";
import ContactData from "./ContactData/ContactData";
class Checkout extends Component {
  checkoutCanceled = () => {
    this.props.history.goBack();
    // setTimeout(() => {}, 10000);
  };
  checkoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summery = <Redirect to="/" />;
    const purchaseRedirect = this.props.redirect ? <Redirect to="/" /> : null;
    if (this.props.ingredients) {
      summery = (
        <div>
          <CheckoutSummery
            ingredients={this.props.ingredients}
            checkoutCanceled={this.checkoutCanceled}
            checkoutContinued={this.checkoutContinued}
          />
          <Route
            path={`${this.props.match.path}/contact-data`}
            component={ContactData}
          />
        </div>
      );
    }
    return (
      <Fragment>
        {purchaseRedirect}
        {summery}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    redirect: state.order.redirect,
  };
};

export default connect(mapStateToProps)(Checkout);
