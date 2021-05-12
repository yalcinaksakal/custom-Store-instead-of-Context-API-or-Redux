import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";
import CounterPage from "./containers/Counter";
const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/favorites" component={FavoritesPage} />
          <Route path="/counter" component={CounterPage} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
