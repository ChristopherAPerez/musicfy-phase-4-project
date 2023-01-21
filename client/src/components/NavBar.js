import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    const linkStyle = {
        padding: "30px",
    };

    return (
        <>
            <br></br>
            <nav>
                <NavLink className="link" to="/discover" style={linkStyle}>Discover</NavLink>
                <NavLink className="link" to="/my_music" style={linkStyle}>My Music</NavLink>
                <NavLink className="link" to="/" style={linkStyle}>Upload</NavLink>
            </nav>
        </>

    );
}

export default NavBar;