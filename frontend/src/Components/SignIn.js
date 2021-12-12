import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async e => {
        try {
            e.preventDefault();
            const user = { email, password };
            // send the username and password to the server

            const { data } = await axios.post(`login`, user);
            localStorage.setItem("user", JSON.stringify({ loggedIn: true, email: data.data.email, firstName: data.data.firstName, lastName: data.data.lastName, id: data.data._id }));
            window.location.href = "/welcome"
        }
        catch (e) {
            // this should appear as a dropdown indicating the error 
            console.log(e.response.data.message)
            console.log(e)
        }

    };

    return (
        <div className="signin__body">
            <motion.div className="lefthand"
            initial={{
                backgroundColor: '#ffffff'
            }}
            animate={{
                backgroundColor: '#f5f8ff'
            }}
            transition={{
                duration: 0.5
            }}
            >
            <motion.img 
              className="formImage" 
              src={require('../images/coins.png').default} 
              alt="money and coins"
              initial={{
                  scale: 0.8, 
                  opacity: 0, 
                  y: 100
              }}
              animate={{
                  scale: 1, 
                  opacity: 1, 
                  y: 0
              }}
              transition={{
                  delay: 0.5
              }}
              /> 
            </motion.div>
            <motion.div 
              className="righthand"
              initial={{
                  backgroundColor: "#ffffff"
              }}
              animate={{
                  backgroundColor: '#fff0f0'
              }}
              transition={{
                  duration: 0.5
              }}
              >
                <motion.div 
                  className='right__container'
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
                    <h1 className='title'>Sign in to BRAND</h1>
                    <h4 className='subtitle'>Dont have an account?  <Link to="/signup"> <b>Sign up</b></Link></h4>

                    <div>
                        <form onSubmit={handleSubmit}>

                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={({ target }) => setEmail(target.value)}
                            />
                            <br />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                            />
                            <br />
                            <button className="formBtn">Enter</button>
                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default SignIn;
