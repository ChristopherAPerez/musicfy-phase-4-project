import React, { useEffect, useState } from "react";
import LoggedIn from "./LoggedIn"
import LoginForm from "../pages/LoginForm"
import SignUpForm from "../pages/SignUpForm"

// import logo from './logo.svg';
import './App.css';

function App() {

  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((user) => setUser(user));
  }, []);

  if (!user) return <LoggedIn />;

  return (
    <div className="App">

      {showLogin ? (
        <div>
          <LoginForm />
          <p>
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
          <p>Login</p>
        </div>
      ) : (
        <div>
          <SignUpForm />
          <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
