import { useState } from "react";
import AccountRow from "./AccountRow";
export default function MainContent(props){
    const [accounts, setAccounts] = useState([
        ["Ronald Dosunmu", "01234677", "GT Bank"],
        ["Dinma Okonicha", "04424657", "Access Bank"],
        ["Marvellous Ibironke", "06547857", "Sterling Bank"],
    ])
    return (
        <main className="mainContent pageColumn">
            <h1 className="mainHeader">Welcome Name!</h1>
            <div className="welcomeContent"></div>
            <section className="accountSection">
                <h2 className="accountsSectionTitle">Your Accounts</h2>
                <p className="seeMoreSection">see more</p>
                <table className="accountsTableContainer">
                    <tbody>
                    {accounts.map(account => <AccountRow accName={account[0]} accNumber={account[1]} bankName={account[2]} key={accounts.indexOf(account)}/>)}
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