import React, { useState } from "react";
import EditProfile from "./EditProfile"
import EditAvatar from "./EditAvatar"

function Profile({ user, setUser }) {

  const [isEditing, setIsEditing] = useState(false)
  const [isEditingAvatar, setIsEditingAvatar] = useState(false)

  return (
    <>
      {isEditingAvatar ? (<>
        <EditAvatar user={user} setUser={setUser} isEditingAvatar={isEditingAvatar} setIsEditingAvatar={setIsEditingAvatar} />
      </>
      ) : (
        <>
          <img src={user.user_avatar} alt={user.user_avatar} width="200" height="300" />
          <button onClick={() => setIsEditingAvatar(!isEditingAvatar)} >Edit Avatar</button>
        </>
      )}

      {isEditing ? (<>
        <EditProfile user={user} setUser={setUser} isEditing={isEditing} setIsEditing={setIsEditing} />
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