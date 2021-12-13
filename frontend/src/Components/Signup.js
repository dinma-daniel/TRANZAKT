import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // login the user
  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const user = { email, password, firstName, lastName };
      // send the username and password to the server

      const { data } = await axios.post(`signup`, user);

      window.location.href = "/login"
    }
    catch (e) {
      // this should appear as a dropdown indicating the error 
      console.log(e.response.data.message)
      console.log(alert(e.response.data.message))
      console.log(e)
    }

  };

  return (
    <motion.div 
      className="signUpContainer"
      initial={{
          opacity: 0
      }}
      animate={{
          opacity: 1
      }}
      transition={{
          delay: 0.5, 
          duration: 0.5
      }}
      >
      <header className="signUpHeader">Sign up on tranz<span className="boldLetters">akt</span></header>
      <p className="signInSection">
        <span>Have an account? </span>
        <Link to="/login">
          <span className="signInBold">Sign in</span>
        </Link>
      </p>
      <form onSubmit={handleSubmit} className="signUpForm">
        <section className="usersNames">
          <input
            type="text"
            placeholder="First Name"
            className="name formInput"
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="name formInput"
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
          />
        </section>
        <input type="email" placeholder="Email" className="formInput fullSize"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="formInput fullSize"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        { /*
        commenting this out as it is useless since you guys are not performing validation 
        <input
          type="text"
          placeholder="Confirm Password"
          className="formInput fullSize"
        />
       */}
        <button type="submit" className="formButton">Enter</button>
      </form>
    </motion.div>
  );
}
