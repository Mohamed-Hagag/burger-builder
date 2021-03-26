import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../../axios-orders";
import * as actions from "../../../store/actions/index";
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
        },
        valueType: "Name",
        errorMessage: "Please enter a valid Name",
        value: this.props.contactData.userName,
        valid: true,
        validation: {
          required: true,
          minLength: 3,
          maxLength: 10,
          isName: true,
        },
        touched: false,
      },
      address: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Your Address",
        },
        valueType: "Address",
        errorMessage: "Please enter a valid Address",

        value: this.props.contactData.address,
        valid: true,
        touched: false,
        validation: { required: true, minLength: 6 },
      },
      mobileNumber: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Mobile",
        },
        valueType: "Phone",
        errorMessage: "Please enter a valid Mobile",

        value: this.props.contactData.mobile,
        valid: true,
        touched: false,
        validation: {
          required: true,
          isMobile: true,
        },
      },
    },
    formIsValid: true,
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
      userOrderId: this.props.userOrderId,
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
              customClassName
              errorMessage={el.config.errorMessage}
              invalid={!el.config.valid}
              touched={el.config.touched}
              label={el.config.valueType}
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
    userOrderId: state.auth.userOrderId,
    contactData: state.auth.contactData,
    email: state.auth.email,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData, token) =>
      dispatch(actions.purchaseStart(orderData, token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
