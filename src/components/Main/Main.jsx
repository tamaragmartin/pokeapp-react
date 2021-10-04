import React, { Component } from "react";

import {Route, Switch} from 'react-router-dom';

import Home from "../Home";
import Error from "../Error/Error";


class Main extends Component {
  render() {
    return ( 
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route component={Error} />
      </Switch>
    </main>
    );
  }
}

export default Main;
