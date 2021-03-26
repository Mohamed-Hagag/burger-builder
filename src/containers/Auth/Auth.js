import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import styles from "./Auth.module.css";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import { inputValidation } from "../../utility/utility";
import Login from "./Login/Login";

class Auth extends Component {
  state = {
    controls: {
      userName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        errorMessage: "Please enter a valid Name",
        value: "",
        valid: false,
        validation: { required: true, isName: true },
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-mail",
        },
        errorMessage: "Please enter a valid E-mail",
        value: "",
        valid: false,
        validation: { required: true, isEmail: true },
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        errorMessage: "Please enter a valid Password",
        value: "",
        valid: false,
        validation: { required: true, minLength: 6 },
        touched: false,
      },
      rePassword: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Re-Password",
        },
        errorMessage: "Password doesn't match",
        value: "",
        valid: false,
        validation: { required: true, minLength: 6 },
        touched: false,
      },

      address: {
        elementType: "textarea",
        elementConfig: {
          type: "textarea",
          placeholder: "Your Address",
        },
        errorMessage: "Please enter a valid Address",
        value: "",
        valid: false,
        validation: { required: true, minLength: 6 },
        touched: false,
      },
      mobile: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Mobile",
        },
        errorMessage: "Please enter a valid Mobile",
        value: "",
        valid: false,
        validation: { required: true, isMobile: true },
        touched: false,
      },
    },
    formIsValid: false,
    isSignup: true,
  };
  componentDidUpdate(prevProps, prevState) {
    let formIsValid = true;
    for (let key in this.state.controls) {
      formIsValid = this.state.controls[key].valid && formIsValid;
    }
    if (prevState.formIsValid !== formIsValid) {
      this.setState({ formIsValid: formIsValid });
    }
  }

  inputChangeHandler = (e, id) => {
    const updatedRegisterForm = { ...this.state.controls };
    const updatedFormElement = { ...updatedRegisterForm[id] };
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = inputValidation(
      updatedFormElement.validation,
      updatedFormElement.value
    );
    updatedRegisterForm[id] = updatedFormElement;

    const password = { ...updatedRegisterForm.password };
    const confirmPassword = { ...updatedRegisterForm.rePassword };
    if (confirmPassword.value !== password.value) {
      confirmPassword.valid = false;
    } else {
      confirmPassword.valid = true;
    }
    updatedRegisterForm.rePassword = confirmPassword;

    this.setState({ controls: updatedRegisterForm });
  };
  errorHandler = (id) => {
    const updatedRegisterForm = { ...this.state.controls };
    const updatedFormElement = { ...updatedRegisterForm[id] };
    updatedFormElement.touched = true;
    updatedRegisterForm[id] = updatedFormElement;
    this.setState({ controls: updatedRegisterForm });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const contactData = {
      userName: this.state.controls.userName.value,
      email: this.state.controls.email.value,
      mobile: this.state.controls.mobile.value,
      address: this.state.controls.address.value,
    };
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.props.isSignup,
      contactData
    );
  };

  switchHandler = (e) => {
    this.props.onSwitch();
  };

  render() {
    let registerFormArray = [];
    for (let key in this.state.controls) {
      registerFormArray.push({ id: key, config: this.state.controls[key] });
    }
    let form = (
      <Fragment>
        {registerFormArray.map((el) => {
          return (
            <Input
              invalid={!el.config.valid}
              touched={el.config.touched}
              errorMessage={el.config.errorMessage}
              key={el.id}
              elementtype={el.config.elementType}
              elementConfig={el.config.elementConfig}
              value={el.config.value}
              changed={(e) => this.inputChangeHandler(e, el.id)}
              errorHandler={() => this.errorHandler(el.id)}
            />
          );
        })}
      </Fragment>
    );

    let errorMessage = null;
    if (this.props.error) {
      if (this.props.error.message === "EMAIL_EXISTS") {
        errorMessage = (
          <p style={{ fontWeight: "500", color: "red" }}>
            This Email is already exists
          </p>
        );
      }
      if (this.props.error.message === "INVALID_PASSWORD") {
        errorMessage = (
          <p style={{ fontWeight: "500", color: "red" }}>Wrong Password</p>
        );
      }
    }
    if (this.props.loading && this.props.error == null) {
      form = <Spinner />;
    }
    let authPage = (
      <div className={styles.Auth}>
        <form onSubmit={this.submitHandler}>
          {form}
          {errorMessage}
          <Button disabled={!this.state.formIsValid} btnType="Success">
            SUBMIT
          </Button>
        </form>
        <Button btnType="Success" clicked={this.switchHandler}>
          SWITCH TO {this.props.isSignup ? "SIGNIN" : "SIGNUP"}
        </Button>
      </div>
    );
    if (this.props.isAuth) {
      authPage = <Redirect to="/" />;
      if (this.props.building) {
        authPage = <Redirect to="checkout" />;
      }
    }
    if (!this.props.isSignup) {
      authPage = <Login />;
    }

    return authPage;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    building: state.burgerBuilder.building,
    userOrderId: state.auth.userOrderId,
    isSignup: state.auth.isSignup,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup, contactData) =>
      dispatch(actions.auth(email, password, isSignup, contactData)),
    onSwitch: () => dispatch(actions.authSwitch()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
