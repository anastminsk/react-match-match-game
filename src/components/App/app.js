import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Description from '../Description';
import Registration from '../Registration';
import Game from '../Game';
import Score from '../Score';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Description} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/game" component={Game} />
        <Route exact path='/score' component={Score} />
      </Switch>
    );
  }
}

export default App;