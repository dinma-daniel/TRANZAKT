import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

export default function SignUp(props) {
    return (
      <div className="signUpContainer">
        <header className="signUpHeader">Sign up on BRAND</header>
        <p className="signInSection">
          <span>Have an account? </span>
          <Link className="signInBold" to="signin">Sign in</Link>
        </p>
        <form 
          className="signUpForm"
          onSubmit={
            e => e.preventDefault()
          }
          >
          <section className="usersNames">
            <input
              type="text"
              placeholder="First Name"
              className="name formInput"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="name formInput"
            />
          </section>
          <input 
            type="text" 
            placeholder="Email" 
            className="formInput fullSize" 
          />
          <input
            type="password"
            placeholder="Password"
            className="formInput fullSize"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="formInput fullSize"
          />
          <button className="formButton">Enter</button>
        </form>
      </div>
    );
  }
  