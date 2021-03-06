import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import ListUser from "./Components/ListUsers/ListUser";
import User from "./Components/User/User";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Admin from "./Components/Admin/Admin";
import Error from "./Assets/Error.jpg";

function App() {
  const [isAuth, setisAuth] = useState(false);
  const login = () => setisAuth(true);
  const logout = () => setisAuth(false);
  return (
    <div className="App">
      <NavBar isAuth={isAuth} login={login} logout={logout} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={ListUser} />
        <Route path="/users/user/:id" component={User} />
        <PrivateRoute
          path="/admin"
          component={Admin}
          isAuth={isAuth}
          message="hello test props"
        />
        <Route
          path="/*"
          component={() => (
            <img src={Error} alt="error" style={{ width: "40%" }} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
