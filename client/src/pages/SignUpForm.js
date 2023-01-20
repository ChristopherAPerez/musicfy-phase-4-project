import React, { useState } from "react";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        bio: "",
        favorite_genre: "",
        user_avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-0mkKKgu3s1V6HfJC5lI8ajzieHjqpwddhPfdXSNfw&s"
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>

      <header htmlFor="username">Username</header>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />


      <header htmlFor="password">Password</header>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />

      <header htmlFor="password">Password Confirmation</header>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        autoComplete="current-password"
      />

      <div>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </div>

      <div>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </div>

    </form>
  );
}

export default SignUpForm;