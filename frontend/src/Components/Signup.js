export default function SignUp(props) {
    return (
      <div className="signUpContainer">
        <header className="signUpHeader">Sign up on BRAND</header>
        <p className="signInSection">
          <span>Have an account? </span>
          <span className="signInBold">Sign in</span>
        </p>
        <form className="signUpForm">
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
          <input type="text" placeholder="Email" className="formInput fullSize" />
          <input
            type="text"
            placeholder="Password"
            className="formInput fullSize"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="formInput fullSize"
          />
          <button className="formButton">Enter</button>
        </form>
      </div>
    );
  }
  