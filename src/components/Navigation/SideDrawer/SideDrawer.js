import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../Toolbar/NavigationItems/NavigationItem";
import classes from "./sidedrawer.module.css";
import BackDrop from "../../UI/BackDrop/BackDrop";
import Auxilary from "../../../hoc/Auxilary/Auxilary";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer,classes.Close]
  if(props.open){
    attachedClasses=[classes.SideDrawer, classes.Open]
  }
  return (
    <Auxilary>
      <BackDrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        {/* <div className={classes.searchBox}>
          <input type="text" placeholder="search..."/>
      </div> */}
        <nav>
          <NavigationItems clicked={props.closed}/>
        </nav>
      </div>
    </Auxilary>
  );
};

export default SideDrawer;
