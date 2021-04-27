import React, { Fragment } from "react";

import "./styles.css";
import ReactImage from "./react.png";
import LOGO from "./bottle_longneck.svg";
import ClickCounter from "./ClickCounter";

const App = () => {
  return (
    <Fragment>
      <h1>
        Vue Typescript Webpack Learning Template - {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={ReactImage} alt="React Logo" width="300" height="200" />
      <img src={LOGO} alt="React Logo" width="300" height="200" />
      <ClickCounter />
    </Fragment>
  );
};

export default App;
