import React from "react";

function Profile({ user }) {

  return (
    <>
        <img src={user.user_avatar} alt={user.user_avatar}/>
        <h3>Name: {user.name}</h3>
        <h3>Username: {user.username}</h3>
        <h3>Go to genre: {user.favorite_genre}</h3>
        <h3>About me: {user.bio}</h3>

    </>
  );
}

export default Profile;