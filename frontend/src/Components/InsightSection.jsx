import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function InsightSection(props) {
    const [accounts, setAccounts] = useState(
        [])

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`mono/accounts`);
            setAccounts(data.accounts)
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

    };
    return (
        <div className="insightColumn pageColumn">
            <header className="insightSectionHeader">
                <h1 >Personal Insight</h1>
                <section className="iconSection">
                    <img className="iconSectionIcon" src={require('../images/Notification.png').default} />
                    <button> <img onClick={handleLogOut} className="iconSectionIcon" src={require('../images/Sign_out_circle_light.png').default} /></button>
                </section>
            </header>
            <section className="mainInsightSection">
                <p>Here are some things we noticed while working with your finance</p>
                <div className="insightCarousel">
                    <h1>
                        {accounts.map(account => <p>For Account: {account.accountNumber}  <br /> Total credit is: {account.credit} <br />Total debit is: {account.debit} <br />Estimated income is: {account.income} </p>
                        )} </h1>
                </div>
            </section >
        </div >
    );
}
