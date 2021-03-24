import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../../axios-orders";
import * as orderActions from "../../../store/actions/index";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import styles from "./ContactData.module.css";
import withErrorHandler from "../../../hoc/WithErrorHandler/WithErrorHandler";
import { inputValidation } from "../../../utility/utility";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
          valuetype: "Name",
        },
        value: "",
        valid: false,
        validation: { required: true, minLength: 3, maxLength: 10 },
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-mail",
          valuetype: "E-mail",
        },
        value: "",
        valid: false,
        touched: false,
        validation: { required: true, minLength: 3, isEmail: true },
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Street",
          valuetype: "Street",
        },
        value: "",
        valid: false,
        touched: false,
        validation: { required: true, minLength: 3, maxLength: 10 },
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP code",
          valuetype: "Code",
        },
        value: "",
        valid: false,
        touched: false,
        validation: { required: true, minLength: 3, maxLength: 10 },
      },
    },
    formIsValid: false,
  };
  componentDidUpdate(prevProps, prevState) {
    let formIsValid = true;
    for (let key in this.state.orderForm) {
      formIsValid = this.state.orderForm[key].valid && formIsValid;
    }
    if (prevState.formIsValid !== formIsValid) {
      this.setState({ formIsValid: formIsValid });
    }
  }

  orderHandler = (e) => {
    e.preventDefault();
    const formData = {};
    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      customer: formData,
      userId: this.props.userId,
    };
    this.props.onOrderBurger(order, this.props.token);
  };

  inputChangeHandler = (e, id) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[id] };
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = inputValidation(
      updatedFormElement.validation,
      updatedFormElement.value
    );

    updatedOrderForm[id] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };
  errorHandler = (id) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[id] };
    updatedFormElement.touched = true;
    updatedOrderForm[id] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    let orderFormArray = [];
    for (let key in this.state.orderForm) {
      orderFormArray.push({ id: key, config: this.state.orderForm[key] });
    }
    let form = (
      <form>
        {orderFormArray.map((el) => {
          return (
            <Input
              invalid={!el.config.valid}
              touched={el.config.touched}
              key={el.id}
              elementtype={el.config.elementType}
              elementConfig={el.config.elementConfig}
              value={el.config.value}
              changed={(e) => this.inputChangeHandler(e, el.id)}
              errorHandler={() => this.errorHandler(el.id)}
            />
          );
        })}
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h1>Enter your Contact Data</h1>
        {form}
        <Button
          disabled={!this.state.formIsValid}
          btnType="Success"
          clicked={this.orderHandler}
        >
          ORDER
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData, token) =>
      dispatch(orderActions.purchaseStart(orderData, token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
