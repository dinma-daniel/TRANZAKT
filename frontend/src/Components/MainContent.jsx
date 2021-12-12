import React, { useState } from "react";
import axios from "axios";
import AccountRow from "./AccountRow";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

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
                        {accounts.map(account => <AccountRow accName={account[0]} accNumber={account[1]} bankName={account[2]} key={accounts.indexOf(account)} />)}
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
                    <p>During October, your financial activities spike up</p>
                    <p>You spend more on paying debts</p>
                </motion.div>
            </section>
        </main>
    );
}
