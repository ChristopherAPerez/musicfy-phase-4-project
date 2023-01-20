import React, { useState } from "react";
import GenreOptions from "./GenreOptions"

function EditProfile({ user, isEditing, setIsEditing }) {


    const [name, setName] = useState(user.name);
    const [username, setUsername] = useState(user.username);
    const [genre, setGenre] = useState(user.favorite_genre);
    const [bio, setBio] = useState(user.bio);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(genre)
        setIsEditing(!isEditing)
    }

    return (
        <form onSubmit={handleSubmit}>

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
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Hip-Hop">Hip-Hop</option>
                <option value="Techno">Techno</option>
                <option value="Indie">Indie</option>
                <option value="Folk">Folk</option>
                <option value="Rap">Rap</option>
                <option value="Altenative Rock">Altenative Rock</option>
                <option value="Electro">Electro</option>
                <option value="Other">Other</option>
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