import React, { useState } from "react";
import GenreOptions from "./GenreOptions"

function EditProfile({ user, isEditing, setIsEditing }) {


    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [genre, setGenre] = useState("");
    const [bio, setBio] = useState("");

    const genres = ["Pop", "Rock", "Hip-Hop", "Techno", "Indie", "Folk", "Rap", "Altenative Rock", "Electro", "Other"]

    return (
        <form>

            <h3>Name:</h3>
            <input
                type="text"
                name=""
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h3>Username: </h3>
            <input
                type="text"
                name=""
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <h3>Go to genre: </h3>
            <select name="" onChange={(e) => setGenre(e.target.value)}>
                {genres.maps((genre) => {
                    return <GenreOptions key={genre} genre={genre}/>
                })}
            </select>

            <h3>About me: </h3>
            <input
                type="textarea"
                name=""
                autoComplete="off"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
            />

            <input type="submit" value="Save" />
        </form>
    );
}

export default EditProfile;