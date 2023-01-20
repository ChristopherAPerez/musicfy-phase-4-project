import React, { useState } from "react";
import EditProfile from "./EditProfile"

function Profile({ user }) {

  const [isEditing, setIsEditing] = useState(false)

  return (
    <>

      <img src={user.user_avatar} alt={user.user_avatar} width="200" height="300" />

      {isEditing ? (<>
        <EditProfile user={user} isEditing={isEditing} setIsEditing={setIsEditing}/>
      </>
      ) : (
        <>
          <h3>Name: {user.name}</h3>
          <h3>Username: {user.username}</h3>
          <h3>Go to genre: {user.favorite_genre}</h3>
          <h3>About me: {user.bio}</h3>
          <button onClick={() => setIsEditing(!isEditing)} >Edit Profile</button>
        </>
      )}

    </>
  );
}

export default Profile;