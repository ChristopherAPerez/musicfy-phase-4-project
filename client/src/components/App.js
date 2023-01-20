import React, { useEffect, useState } from "react";
import Login from "./Login"

// import logo from './logo.svg';
import './App.css';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((user) => setUser(user));
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <p>I'm in!</p>
    </div>
  );
}

export default App;
