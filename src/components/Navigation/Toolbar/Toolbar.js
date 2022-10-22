import React from "react";
import classes from "./toolbar.module.css";
import NavigationItems from "../Toolbar/NavigationItems/NavigationItem";
import Logo from "../../Logo/Logo";
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
     <DrawerToggle clicked={props.drawerToggleClicked}/>
      <div className={classes.Logo}>
        <Logo />
      </div>
      {/* <div className={classes.searchBox+" DesktopOnly"}>
          <input type="text" placeholder="search..."/>
      </div> */}
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
