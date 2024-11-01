import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hi, ${username}`);
    setUsername("");
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Welcome home!</h1>
      <br />
      <h2>Log In</h2>
      <input
        type="text"
        placeholder="Enter your username..."
        value={username}
        onChange={handleChange}
        required
      />
      <button>Access your space</button>
    </form>
  );
};
