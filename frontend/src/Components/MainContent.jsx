import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountRow from "./AccountRow";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import Mono from "./mono";


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
        <div className="mainbody">
        <main className="mainContent pageColumn">
            <motion.h1 
              className="mainHeader"
              initial={{
                  opacity: 0
              }}
              animate={{
                  opacity: 1
              }}
              transition={{
                  duration: 0.6
              }}
              >
                  Welcome {username}
            </motion.h1>
            <motion.div 
              className="welcomeContent"
              initial={{
                    opacity: 0, 
                    y: 100
                }}
                animate={{
                    opacity: 1, 
                    y: 0
                }}
                transition={{
                    duration: 0.5, 
                    delay: 0.1
                }}
            ></motion.div>
            <h1 className="mainHeader">Welcome {username}</h1>
            <div className="welcomeContent">
                <h3 className="welcomeContent__text">We've done the dirty work for you. Have a look at your recent money moves.</h3>
                <img className="formImg" src={require('../images/moneyhome.png').default} alt="money and coins" />
            </div>
            <section className="accountSection">
                <motion.h2 
                  className="accountsSectionTitle"
                  initial={{
                        opacity: 0, 
                        y: 100
                    }}
                    animate={{
                        opacity: 1, 
                        y: 0
                    }}
                    transition={{
                        duration: 0.5, 
                        delay: 0.3
                    }}
                  >Your Accounts</motion.h2>
                <motion.p 
                  className="seeMoreSection"
                  initial={{
                        opacity: 0, 
                        y: 100
                    }}
                    animate={{
                        opacity: 1, 
                        y: 0
                    }}
                    transition={{
                        duration: 0.5, 
                        delay: 0.5
                    }}
                >see more</motion.p>
                <motion.table 
                  className="accountsTableContainer"
                  initial={{
                        opacity: 0, 
                        y: 100
                    }}
                    animate={{
                        opacity: 1, 
                        y: 0
                    }}
                    transition={{
                        duration: 0.5, 
                        delay: 0.5
                    }}
                  >
                    <tbody>
                        {accounts.map(account => <AccountRow accNumber={account.accountNumber} bankName={account.bank} accBalance={account.balance} key={accounts.indexOf(account)} />)}
                    </tbody>
                </motion.table>
            </section>
            <section className="insightSection">
                <motion.h2 
                  className="insightsSectionTitle"
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
                        delay: 0.7
                    }}
                  >Personal Insight</motion.h2>
                <motion.p 
                  className="seeMoreSection"
                  initial={{
                        opacity: 0, 
                        y: 100
                    }}
                    animate={{
                        opacity: 1, 
                        y: 0
                    }}
                    transition={{
                        duration: 0.5, 
                        delay: 0.9
                    }}
                  
                  ><Link to="/insight">see more</Link></motion.p>
                <motion.div 
                  className="insightsInfoContainer"
                  initial={{
                    opacity: 0, 
                    y: 100
                }}
                animate={{
                    opacity: 1, 
                    y: 0
                }}
                transition={{
                    duration: 0.5, 
                    delay: 1.1
                }}
              >
                    <Mono />
                </table>
            </section>
            <section className="insightSection">
                <h2 className="insightsSectionTitle">Personal Insight</h2>

                <p className="seeMoreSection"><Link to="/insight">see more</Link></p>

                <div className="insightsInfoContainer">

                    <p>During October, your financial activities spike up</p>
                    <p>You spend more on paying debts</p>
                </motion.div>
            </section>
        </main>
        </div>
    );
}
