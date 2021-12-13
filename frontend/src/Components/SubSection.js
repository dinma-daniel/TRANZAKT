import { motion } from 'framer-motion';
import React, { useState, useEffect } from "react";
import axios from "axios";
const SubSection = (props) => {
    const [accounts, setAccounts] = useState(
        [])

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`mono/accounts`);

            if (data.length === 0) {
                alert("please link your account before you can add subscription");
                window.location.href = "/welcome"
            }
        }

        fetchData()
    }, [accounts]); // Or [] if effect doesn't need props or stat



    const handleLogOut = async e => {
        try {
            e.preventDefault();
            // send the username and password to the server
            const { data } = await axios.post(`logout`);
            localStorage.clear()
            window.location.href = "/login"
        }
        catch (e) {
            // this should appear as a dropdown indicating the error 
            console.log(e.response.data.message)
            console.log(e)
        }

    }
    return (

        <div className="sub__section">
            <div className="sub__section__body">
                <div className="iconbody">
                    <div className="left">


                    </div>
                    <div className="iconSec__right">
                        <img className="iconSectionIcon" src={require('../images/Notification.png').default} />
                        <button> <img onClick={handleLogOut} className="iconSectionIcon" src={require('../images/Sign_out_circle_light.png').default} /></button>
                    </div>

                </div>
                <h3>Subscriptions</h3>

                <motion.div className="sub__container"
                    initial={{
                        opacity: 0,
                        y: 100
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 0.6
                    }}
                >
                    <h4>Sub Name</h4>
                    <h4>Amount</h4>
                    <h4>Start Date</h4>
                    <h4>Next Reminder</h4>
                </motion.div>
            </div>
        </div>
    );
}

export default SubSection;

