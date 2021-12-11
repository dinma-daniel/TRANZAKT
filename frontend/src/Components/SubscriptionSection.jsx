import React, { useState } from "react";
import axios from "axios";
export default function SubscriptionSection(props) {
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
            <p className="seeMoreSection">see more</p>
            <div className="subscriptionDetails"></div>

        </section>
    );
}
