const RegistrationBody = () => {
    return ( 
        <div className="registration">
            <form className="reg__form">
            <h2 className="reg__header">Register Subscriptions</h2>
            <input
                    type="email"
                    placeholder="Subscription/Billing name"
                    />
                    <br/>
                    <div className="split__input">
                    <input
                    className="amount"
                    type="text"
                    placeholder="Amount"
                    />
                    <br/>
                   
                    <input
                    className="start_of_sub"
                    type="date"
                    placeholder="Start of Subscription/Billing"
                    />
                    </div>
                    
                    <br/>
                    <select name="account" id="">
                    <option value="account1">Select Account</option>
                    <option value="account1">Account 1</option>
    
                            </select>
                    <br/>
                    <h3 className="">Is subscription/billing trial payment?</h3>
                    <div className="radios">
                        <div>
                    <input
                    type="radio"
                    value="Yes"
                    id="yes"
                    />
                    <label for="yes">Yes</label>
                    
                    </div>

                    <div>
                    <input
                    type="radio"
                    value="No"
                    id="no"
                    />
                    <label for="no">No</label>
                    </div>
                    </div>
                    <br/>
                    <h3 className="">Would you like to continue at the end of the trial?</h3>
                    <div className="radios">
                        <div className="r">
                    <input
                    type="radio"
                    value="Yes"
                    id="yes"
                    />
                    <label for="yes">Yes</label>
                    </div>

                    <div>
                    <input
                    type="radio"
                    value="No"
                    id="no"
                    />
                    <label for="no">No</label>
                    </div>
                    </div>
                    <br/>
                   <div className="duration"> 
                    <input
                    className="sub__duration"
                    type="text"
                    placeholder="How long is the trial"
                    />
                    <h3 className="month">Months</h3>
                    </div>
                    <br/>
                    <button className="formBtn">Enter</button>
            </form>
        </div>
     );
}
 
export default RegistrationBody;