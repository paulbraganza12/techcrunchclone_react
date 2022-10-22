import React from "react";
import classes from "./pagenotfound.module.css";

const PageNotFound = () => {
  return (
    <div className={classes.PageNotFound}>
      <div className={classes.text}>404: Page not found</div>
    </div>
  );
};

export default PageNotFound;
