import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SubscriptionSectionRow from './SubscriptionSectionRow';

export default function SubscriptionSection(props) {
    const [subscriptions, setSubscriptions] = useState([
        ['DSTV', '25th September'],
        ['Spotify', '25th September'],
        ['Netflix', '25th September'],
        ['Figma', '25th September'],
        ['Youtube', '25th September']
    ])
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
            <h2 className="subscriptionsHeader">Subscriptions</h2>
            <Link to="/subscription">
            <p className="seeMoreSection">see more</p>

            <table className="subscriptionDetails">
                <thead>
                    <tr>
                        <th>Subs Made</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {subscriptions.map(subscription => <SubscriptionSectionRow subName={subscription[0]} dueDate={subscription[1]} key={subscriptions.indexOf(subscription)} />)}
                </tbody>
            </table>
            <div className="billing">Keep track of your billing</div>
            <img className="billingImage" src={require('../images/credit-card.png').default} />
        </section>
    );
}
