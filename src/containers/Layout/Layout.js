import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import styles from "./Layout.module.css";

class Layout extends Component {
  state = { showSideDrawer: false };

  showSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  drawerToggleHandler = () => {
    this.setState({ showSideDrawer: true });
  };
  render() {
    return (
      <Fragment>
        <Toolbar
          clicked={this.drawerToggleHandler}
          isAuth={this.props.isAuth}
        />
        <SideDrawer
          show={this.state.showSideDrawer}
          openSideDrawer={this.showSideDrawerHandler}
          isAuth={this.props.isAuth}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
