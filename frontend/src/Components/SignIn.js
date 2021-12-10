import { Link } from "react-router-dom";

const SignIn = () => {
    return (  
        <div className="signin__body">
            <div className="lefthand"></div>
            <div className="righthand">
                <div className='right__container'>
                <h1 className='title'>Sign in to BRAND</h1>
                <h4 className='subtitle'>Dont have an account?  <Link to="/signup"> <b>Sign up</b></Link></h4>

                <div>
                    <form>
                    <input
                    type="text"
                    placeholder="First Name"
                    />
                    <br/>
                    <input
                    type="text"
                    placeholder="Last Name"
                    />
                    <br/>
                    <input
                    type="text"
                    placeholder="Email"
                    />
                    <br/>
                    <input
                    type="text"
                    placeholder="Password"
                    />
                    <br/>
                    <button className="formBtn">Enter</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
}
 
export default SignIn;