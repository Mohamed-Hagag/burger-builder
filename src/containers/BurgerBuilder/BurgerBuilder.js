import React, { Component, Fragment } from "react";
import axios from "../../axios-orders";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/OrerSummery/OrderSummery";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

export class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    redirect: false,
  };
  componentDidMount() {
    this.props.onInitIngredients();
    this.setState({ redirect: this.props.redirect });
  }

  updatePurchaseState = (ingredients) => {
    const ingredientsSum = Object.values(ingredients).reduce((sum, el) => {
      return sum + el;
    }, 0);
    return ingredientsSum > 0;
  };

  purchasingHandler = () => {
    if (this.props.isAuth) {
      this.setState({ purchasing: true });
    } else {
      this.props.history.push("/auth");
    }
  };

  purchasingCancel = () => {
    this.setState({ purchasing: false, redirect: false });
  };
  purchasingContinue = () => {
    this.props.history.push("/checkout");
    this.props.onFetchContactData(this.props.token, this.props.email);
  };

  render() {
    const disabledInfo = { ...this.props.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let burger = this.props.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );
    let orderSummery = null;
    if (this.props.ingredients) {
      burger = (
        <Fragment>
          {" "}
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            added={this.props.onIngredientAdded}
            removed={this.props.onIngredientRemoved}
            ingredients={this.props.ingredients}
            disabled={disabledInfo}
            price={this.props.totalPrice}
            purchase={this.updatePurchaseState(this.props.ingredients)}
            orderSummery={this.purchasingHandler}
            isAuth={this.props.isAuth}
          />
        </Fragment>
      );
      orderSummery = (
        <OrderSummery
          ingredients={this.props.ingredients}
          purchasingCancel={this.purchasingCancel}
          purchasingContinue={this.purchasingContinue}
          price={this.props.totalPrice}
        />
      );
    }
    let orderPlacedAlert = null;

    if (this.state.redirect) {
      orderPlacedAlert = (
        <Modal
          show={this.state.redirect}
          purchasingCancel={this.purchasingCancel}
        >
          <span>Your order has been placed successfully</span>
        </Modal>
      );
    }
    return (
      <Fragment>
        {orderPlacedAlert}
        <Modal
          show={this.state.purchasing}
          purchasingCancel={this.purchasingCancel}
        >
          {orderSummery}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuth: state.auth.token !== null,
    redirect: state.order.redirect,
    token: state.auth.token,
    email: state.auth.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredients(ingName)),
    onIngredientRemoved: (ingName) =>
      dispatch(actions.removeIngredients(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onFetchContactData: (token, email) =>
      dispatch(actions.fetchContactData(token, email)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
