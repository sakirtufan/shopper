import React, { useState } from "react";
import { Link } from "react-router-dom";

const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // signin action
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Anmelden</h1>
        </div>
        <div>
          <label htmlFor="email">E-Mail-Addresse</label>
          <input
            type="email"
            id="email"
            placeholder="Email eingeben"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Passwort</label>
          <input
            type="password"
            id="password"
            placeholder="Passwort eingeben"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit" onClick={submitHandler}>
            Anmelden
          </button>
        </div>
        <div>
          <label />
          <div>
            Neukunde? <Link to="/register">Erstelle deinen Account</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninScreen;
