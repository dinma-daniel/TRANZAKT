import {Link} from 'react-router-dom';
import {useState} from 'react';

export default function SignUp(props) {
  const [user, setUser] = useState({
    firstName : '', 
    lastName: '', 
    email: '', 
    password: '', 
    confirmPassword: ''
  })
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
            e => {
              e.preventDefault();
              console.log(user);
            }
          }
          >
          <section className="usersNames">
            <input
              type="text"
              placeholder="First Name"
              className="name formInput"
              value={user.firstName}
              onChange={
                e => {
                  const input = e.currentTarget.value;
                  const {lastName, email, password, confirmPassword} = user;
                  setUser({
                      firstName: input, 
                      lastName, 
                      email, 
                      password, 
                      confirmPassword
                  })
                }
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              className="name formInput"
              value={user.lastName}
              onChange={
                e => {
                  const input = e.currentTarget.value;
                  const {firstName, email, password, confirmPassword} = user;
                  setUser({
                      firstName, 
                      lastName: input, 
                      email, 
                      password, 
                      confirmPassword
                  })
                }
              }
            />
          </section>
          <input 
            type="text" 
            placeholder="Email" 
            className="formInput fullSize" 
            value={user.email}
            onChange={
              e => {
                const input = e.currentTarget.value;
                const {lastName, firstName, password, confirmPassword} = user;
                setUser({
                    firstName, 
                    lastName, 
                    email: input, 
                    password, 
                    confirmPassword
                })
              }
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="formInput fullSize"
            value={user.password}
            onChange={
              e => {
                const input = e.currentTarget.value;
                const {lastName, firstName, email, confirmPassword} = user;
                setUser({
                    firstName, 
                    lastName, 
                    email, 
                    password: input, 
                    confirmPassword
                })
              }
            }
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="formInput fullSize"
            value={user.confirmPassword}
            onChange={
              e => {
                const input = e.currentTarget.value;
                const {lastName, firstName, email, password} = user;
                setUser({
                    firstName, 
                    lastName, 
                    email, 
                    password, 
                    confirmPassword: input
                })
              }
            }
          />
          <button className="formButton">Enter</button>
        </form>
      </div>
    );
  }
  