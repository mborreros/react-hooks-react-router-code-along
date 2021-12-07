import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

const linkStyles = {
  textAlign: "center",
  display: "inline-block",
  width: "55px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Sign Up
      </NavLink>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function Signup() {
  return(
    <div>
      <h1>This is where you sign up...</h1>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
