import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import CheckoutSummery from "../../components/Order/CheckoutSummery/CheckoutSummery";
import ContactData from "./ContactData/ContactData";
import * as actions from "../../store/actions/index";
class Checkout extends Component {
  componentDidMount() {
    this.props.onFetchContactData(this.props.token, this.props.email);
  }

  checkoutCanceled = () => {
    this.props.history.goBack();
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
    token: state.auth.token,
    userOrderId: state.auth.userOrderId,
    contactData: state.auth.contactData,
    email: state.auth.email,
  };
};
const matDispatchToProps = (dispatch) => {
  return {
    onFetchContactData: (token, email) =>
      dispatch(actions.fetchContactData(token, email)),
  };
};

export default connect(mapStateToProps, matDispatchToProps)(Checkout);
