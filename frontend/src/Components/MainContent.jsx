import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountRow from "./AccountRow";

import { Link } from "react-router-dom";

import Mono from "./mono";
// main

export default function MainContent(props) {
    const [accounts, setAccounts] = useState(
        [])

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`mono/accounts`);
            setAccounts(data.accounts)
        }

        fetchData()
    }, [accounts]); // Or [] if effect doesn't need props or stat


    const loggedInUser = localStorage.getItem("user");
    let name = " "
    if (loggedInUser) {
        let omo = JSON.parse(loggedInUser)
        name = omo.firstName
    }
    const [username, setUsername] = useState(name);

    return (
        <main className="mainContent pageColumn">
            <h1 className="mainHeader">Welcome {username}</h1>
            <div className="welcomeContent">
                <h3 className="welcomeContent__text">We've done the dirty work for you. Have a look at your recent money moves.</h3>
                <img className="formImg" src={require('../images/moneyhome.png').default} alt="money and coins" />
            </div>
            <section className="accountSection">
                <h2 className="accountsSectionTitle">Your Accounts</h2>
                <p className="seeMoreSection">see more</p>
                <table className="accountsTableContainer">
                    <tbody>
                        {accounts.map(account => <AccountRow accNumber={account.accountNumber} bankName={account.bank} accBalance={account.balance} key={accounts.indexOf(account)} />)}
                    </tbody>
                    <Mono />
                </table>
            </section>
            <section className="insightSection">
                <h2 className="insightsSectionTitle">Personal Insight</h2>

                <p className="seeMoreSection"><Link to="/insight">see more</Link></p>

                <p className="seeMoreSection">see more</p>

// main
                <div className="insightsInfoContainer">
                    <p>During October, your financial activities spike up</p>
                    <p>You spend more on paying debts</p>
                </div>
            </section>
        </main>
    );
}
