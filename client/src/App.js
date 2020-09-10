import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";

if (localStorage.token) setAuthToken(localStorage.token);

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
            </Switch>
            <Switch>
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
