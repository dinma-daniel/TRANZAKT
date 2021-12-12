import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from "axios";

const RegistrationBody = () => {
    const [isTrialPayment, setIsTrialPayment] = useState(false);
    const handleRadioButtonChange = (e) => {
        const booleanValue = e.target.value == 'Yes' ? true : false;
        setIsTrialPayment(booleanValue);
    }

    const [accounts, setAccounts] = useState(
        [])

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`mono/accounts`);
            setAccounts(data.accounts)
        }

        fetchData()
    }, [accounts]);
    return (
        <div className="registration">
            <motion.form className="reg__form"
                initial={{
                    opacity: 0,
                    y: 100
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    delay: 0.4
                }}>

                <form className="reg__form">
                    <h2 className="reg__header">Register Subscriptions</h2>

                    <input
                        type="text"
                        placeholder="Subscription/Billing name"
                    />
                    <br />

                    <input
                        className="amount"
                        type="text"
                        placeholder="Amount"
                    />
                    <br />
                    <label className='sart__of__sub'>
                        Start of subscription/billing
                    </label>
                    <input
                        className="start_of_sub"
                        type="date"
                        placeholder="Start of Subscription/Billing"
                    />

                    <br />
                    <select name="account" id="">
                        <option value="account1">Select Account</option>
                        {/* <option value="account1">Account 1</option> */}
                        {accounts.map(account => <option> {account.accountNumber} {account.bank} </option>)}
                    </select>
                    <br />
                    <h3 className="">Is subscription/billing trial payment?</h3>
                    <div className="radios">
                        <div>
                            <input
                                type="radio"
                                value="Yes"
                                id="yes"
                                name="is_trial_payment"
                                onChange={handleRadioButtonChange}
                            />
                            <label for="yes">Yes</label>

                        </div>

                        <div>
                            <input
                                type="radio"
                                value="No"
                                id="no"
                                name="is_trial_payment"
                                onChange={handleRadioButtonChange}
                            />
                            <label for="no">No</label>
                        </div>
                    </div>
                    <br />
                    {isTrialPayment && <>
                        <h3 className="">Would you like to continue at the end of the trial?</h3>
                        <div className="radios">
                            <div className="r">
                                <input
                                    type="radio"
                                    value="Yes"
                                    id="yes"
                                    name="continue_trial"
                                />
                                <label for="yes">Yes</label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    value="No"
                                    id="no"
                                    name="continue_trial"
                                />
                                <label for="no">No</label>
                            </div>
                        </div>
                        <br />
                        <div className="duration">
                            <input
                                className="sub__duration"
                                type="text"
                                placeholder="How long is the trial"
                            />
                            <h3 className="month">Months</h3>
                        </div>
                    </>
                    }
                    <br />
                    <button className="formBtn">Enter</button>
                </form>
            </motion.form>


        </div>
    );
}

export default RegistrationBody;
