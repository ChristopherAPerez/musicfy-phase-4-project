import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header"
import NavBar from "./NavBar"

import LoggedIn from "./LoggedIn"
import Profile from "../pages/Profile"
// import MyMusic from "../pages/MyMusic"
import Discover from "../pages/Discover"
import Upload from "../pages/Upload"

import LoggedOut from "./LoggedOut"
import LoginForm from "../pages/LoginForm"
import SignUpForm from "../pages/SignUpForm";



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

      {user ? (
        <>
          <Header user={user} setUser={setUser} />
          <NavBar />
        </>
      ) : (
        <Header />
      )}

      <br></br>
      <br></br>

      <main>
        {user ? (

          <Routes>
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />}>
            </Route>
            <Route path="/discover" element={<Discover user={user} setUser={setUser} />}>
            </Route>
            {/* <Route path="/my_music" element={<MyMusic user={user} setUser={setUser} />}>
            </Route> */}
            <Route path="/upload" element={<Upload user={user} setUser={setUser} />}>
            </Route>
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
