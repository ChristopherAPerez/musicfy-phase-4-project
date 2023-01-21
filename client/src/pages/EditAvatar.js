import React, { useState } from "react";
// import GenreOptions from "./GenreOptions"

function EditProfile({ user, setUser, isEditingAvatar, setIsEditingAvatar }) {


    const [avatar, setAvatar] = useState(user.user_avatar);

    function handleSubmit(e) {

        e.preventDefault();

        fetch('update_profile', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_avatar: avatar
            }),
        })
            .then((r) => r.json())
            .then((update) => {
                setUser(update)
                setIsEditingAvatar(!isEditingAvatar)
            });
    }

    return (
        <>

            <img src={user.user_avatar} alt={user.user_avatar} width="200" height="300" />

            <form onSubmit={handleSubmit}>

                <h3>Upload Avatar:</h3>
                <input
                    type="text"
                    name=""
                    autoComplete="off"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                />

                <input type="submit" value="Save" />
            </form>
        </>
    );
}

export default EditProfile;