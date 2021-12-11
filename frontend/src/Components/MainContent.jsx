import React, { useState } from "react";
import axios from "axios";
import AccountRow from "./AccountRow";

export default function MainContent(props) {
    const [accounts, setAccounts] = useState([
        ["Ronald Dosunmu", "01234677", "GT Bank"],
        ["Dinma Okonicha", "04424657", "Access Bank"],
        ["Marvellous Ibironke", "06547857", "Sterling Bank"],
    ])
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
            <div className="welcomeContent"></div>
            <section className="accountSection">
                <h2 className="accountsSectionTitle">Your Accounts</h2>
                <p className="seeMoreSection">see more</p>
                <table className="accountsTableContainer">
                    <tbody>
                        {accounts.map(account => <AccountRow accName={account[0]} accNumber={account[1]} bankName={account[2]} key={accounts.indexOf(account)} />)}
                    </tbody>
                </table>
            </section>
            <section className="insightSection">
                <h2 className="insightsSectionTitle">Personal Insight</h2>
                <p className="seeMoreSection">see more</p>
                <div className="insightsInfoContainer">
                    <p>During October, your financial activities spike up</p>
                    <p>You spend more on paying debts</p>
                </div>
            </section>
        </main>
    );
}
