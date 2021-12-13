import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from "axios";

const RegistrationBody = () => {
    const [Trial, setIsTrialPayment] = useState(false);
    const [Name, setSubName] = useState(" ");
    const [Amount, setSubAmt] = useState(" ");
    let [AccountNumber, setAccNum] = useState(" ");
    const [StartDate, setStateDate] = useState(" ");
    const [TrialContinue, setTryContinue] = useState(false);
    const [TrialLength, setTryLength] = useState("0");
    const handleRadioButtonChange = (e) => {
        const booleanValue = e.target.value == 'Yes' ? true : false;
        setIsTrialPayment(booleanValue);
    }

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            AccountNumber = AccountNumber.split(" ")[0]
            console.log(StartDate)
            const bill = { Name, Amount, StartDate, Trial, AccountNumber, TrialContinue, TrialLength };
            // send the username and password to the server

            const { data } = await axios.post(`bill`, bill);
            console.log(data, "dd")

        }
        catch (e) {
            // this should appear as a dropdown indicating the error 
            console.log(alert(e.response.data.message))
            console.log(e)
        }

    };


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
            <h2 className="reg__header">Register Subscriptions</h2>
            <form onSubmit={handleSubmit} className="reg__form">
                <input
                    type="text"
                    placeholder="Subscription/Billing name"
                    onChange={({ target }) => setSubName(target.value)}
                />
                <br />

                <input
                    className="amount"
                    type="number"
                    placeholder="Amount"
                    onChange={({ target }) => setSubAmt(target.value)}
                />
                <br />
                <label className='sart__of__sub'>
                    Start of subscription/billing
                </label>
                <input
                    className="start_of_sub"
                    type="date"
                    placeholder="Start of Subscription/Billing"
                    onChange={({ target }) => setStateDate(target.value)}
                />

                <br />
                <select name="account" id="" onChange={({ target }) => setAccNum(target.value)}>
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
                {Trial && <>
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
                                onChange={({ target }) => setTryContinue(target.value)}
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
                            onChange={({ target }) => setTryLength(target.value)}
                        />
                        <h3 className="month">Months</h3>
                    </div>
                </>
                }
                <br />
                <button className="formBtn">Enter</button>
            </form>



        </div>
    );
}

export default RegistrationBody;
