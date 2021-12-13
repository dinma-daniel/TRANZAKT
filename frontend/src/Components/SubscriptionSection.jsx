import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SubscriptionSectionRow from './SubscriptionSectionRow';
import { motion } from 'framer-motion';

export default function SubscriptionSection(props) {
    const [subscriptions, setSubscriptions] = useState([
    ])

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`bill`);
            setSubscriptions(result.data.accounts)

        }

        fetchData()
    }, [subscriptions]); // Or [] if effect doesn't need props or stat



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

    };
    return (
        <section className="subscriptionSection pageColumn">
            <section className="iconSection">
                <img className="iconSectionIcon" src={require('../images/Notification.png').default} />
                <button> <img onClick={handleLogOut} className="iconSectionIcon" src={require('../images/Sign_out_circle_light.png').default} /></button>
            </section>
            <motion.h2
                className="subscriptionsHeader"
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.6
                }}
            >Subscriptions</motion.h2>
            <Link to="/subscription">
                <p className="seeMoreSection">see more</p>
            </Link>
            <motion.table
                className="subscriptionDetails"
                initial={{
                    opacity: 0,
                    y: 100
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.6
                }}
            >
                <thead>
                    <tr>
                        <th>Subs Made</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {subscriptions.map(subscription => <SubscriptionSectionRow subName={subscription.Name} dueDate={subscription.NextSubscription} />)}
                </tbody>
            </motion.table>
            <motion.div className="billing"
                initial={{
                    opacity: 0,
                    y: 100
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.8
                }}
            >Keep track of your billing</motion.div>
            <motion.img className="billingImage" src={require('../images/credit-card.png').default}
                initial={{
                    opacity: 0,
                    y: 100
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.6,
                    delay: 1
                }}
            />
        </section>
    );
}
