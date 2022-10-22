import React, { Component } from "react";
import classes from "./layout.module.css";

import Auxilary from "../Auxilary/Auxilary";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

  state = {
    showSideDrawer: false,
  };

  SideDrawerCloseHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };


  render() {
    return (
      <Auxilary>
       <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerCloseHandler}
        />
        <main className={classes.content}>{this.props.children}</main>
      </Auxilary>
    );
  }
}

export default Layout;
