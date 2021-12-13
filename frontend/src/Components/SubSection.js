import { motion } from 'framer-motion';
import React, { useState, useEffect } from "react";
import axios from "axios";
const SubSection = (props) => {
    const [accounts, setAccounts] = useState(
        [])
    const [subs, setSubs] = useState(
        [])


    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`mono/accounts`);

            if (data.length === 0) {
                alert("please link your account before you can add subscription");
                window.location.href = "/welcome"
            }

            const result = await axios.get(`bill`);
            setSubs(result.data.accounts)

        }

        fetchData()
    }, [accounts, subs]); // Or [] if effect doesn't need props or stat



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
                    <table>
                        <th>Sub-Name </th>
                        <th>Amount </th>
                        <th>Start-Date </th>
                        <th>Next-Reminder </th>

                        {subs.map(sub => <h1> {sub.Name} : {sub.Amount} : {sub.StartDate} : {sub.NextReminder} </h1>
                        )}
                    </table>
                </motion.div>
            </div>
        </div>
    );
}

export default SubSection;

