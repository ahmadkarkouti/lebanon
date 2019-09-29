import React from "react";
import firebase from "./components/Firestore";
import User from "./supporting_files/User";
import { Redirect, BrowserRouter, Route } from "react-router-dom";
import Login from "./screens/Login";
import Loading from "./screens/Loading";
import Dashboard from "./screens/Dashboard";

class App extends React.Component {
  state = {
    loading: true,
    toLogin: false,
    toDashboard: false
  };

  componentDidMount() {
    this.checkAuthentication();
  }

  logout = () => {
    firebase.auth().signOut();
  };

  goToLogin = () => {
    this.setState({
      toLogin: true,
      loading: false,
      toDashboard: false
    });
  };

  goToDashboard = () => {
    this.setState({
      loading: false,
      toLogin: false,
      toDashboard: true
    });
  };

  checkAuthentication = () => {
    let db = firebase.firestore();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        db.collection("config")
          .doc("admins")
          .get()
          .then(r => {
            User.getInstance().setUserID(user.uid);
            User.getInstance().setUserEmail(user.email);
            this.goToDashboard();
          })
          .catch(r => {
            alert(r);
          });
      } else {
        this.goToLogin();
      }
    });
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.toLogin) {
      return (
        <BrowserRouter>
          <Redirect to="/login" />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      );
    }
    if (this.state.toDashboard) {
      return (
        <BrowserRouter>
          <Redirect to="/dashboard" />
          <Route
            path="/dashboard"
            component={() => <Dashboard Dashboard={this.goToDashboard} />}
          />
        </BrowserRouter>
      );
    }
  }
}

export default App;
