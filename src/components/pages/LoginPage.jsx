import { useState } from "react";

export const LoginPage = () => {
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
    <div>
      <h1>Welcome home!</h1>
      <br />
      <h2>Log In</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username..."
          value={username}
          onChange={handleChange}
          required
        />
        <button>Access your space</button>
      </form>
    </div>
  );
};
