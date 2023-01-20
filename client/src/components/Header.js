import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function Header({ user, setUser }) {

  const navigate = useNavigate()

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    navigate("/")
  }

  return (
    <div>
      <h1>♫ MUSICFY ♫</h1>
      {user ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={handleLogoutClick} >Logout</button>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  )
}

export default Header;