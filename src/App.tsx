import React, { Fragment } from "react";

import "./styles.css";
import ReactImage from "./react.png";
import LOGO from "./bottle_longneck.svg";

const App = () => {
  return (
    <Fragment>
      <h1>React Typescript Webpack Learning Template</h1>
      <img src={ReactImage} alt="React Logo" width="300" height="200" />
      <img src={LOGO} alt="React Logo" width="300" height="200" />
    </Fragment>
  );
};

export default App;
