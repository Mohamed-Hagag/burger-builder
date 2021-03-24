import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import styles from "./Auth.module.css";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import { inputValidation } from "../../utility/utility";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-mail",
          valuetype: "Mail",
        },
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
          valuetype: "Password",
        },
        value: "",
        valid: false,
        validation: { required: true, minLength: 6 },
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
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignup
    );
  };

  switchHandler = () => {
    this.setState((prevState) => {
      return { isSignup: !prevState.isSignup };
    });
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
          SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}
        </Button>
      </div>
    );
    if (this.props.isAuth) {
      authPage = <Redirect to="/" />;
      if (this.props.building) {
        authPage = <Redirect to="checkout" />;
      }
    }

    return <Fragment> {authPage}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    building: state.burgerBuilder.building,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
