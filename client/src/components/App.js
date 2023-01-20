import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header"
import LoginForm from "../pages/LoginForm"
import SignUpForm from "../pages/SignUpForm";
import LoggedIn from "./LoggedIn"
import LoggedOut from "./LoggedOut"
import NavBar from "./NavBar"

// import logo from './logo.svg';
import './App.css';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">

      {/* <NavBar/> */}


      {user ? (
        <>
          <Header user={user} setUser={setUser} />
          <NavBar />
        </>
      ) : (
        <Header />
      )}

      <br></br>
      <main>
        {user ? (

          <Routes>
            <Route path="/" element={<LoggedIn user={user} />}>
            </Route>
          </Routes>

        ) : (

          <Routes>
            <Route path="/signup" element={<SignUpForm setUser={setUser} />}>
            </Route>
            <Route path="/login" element={<LoginForm setUser={setUser} />}>
            </Route>
            <Route path="/" element={<LoggedOut user={user} />}>
            </Route>
          </Routes>

        )}
      </main>

    </div>
  );
}

export default App;
