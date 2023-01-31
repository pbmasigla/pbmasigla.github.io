import React from "react";
import { Main } from "components/main";
import { Route, Router } from "react-router";
import { Secret } from "components/secret";
import { useHistory } from "react-router";

const App = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Route component={Main} path="/" exact />
      <Route exact path="/secret" component={Secret} />
    </Router>
  );
};

export default App;
