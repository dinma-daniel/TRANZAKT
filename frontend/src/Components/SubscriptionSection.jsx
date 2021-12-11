export default function SubscriptionSection(props) {
    return (
        <section className="subscriptionSection pageColumn">
            <section className="iconSection">
                <img className="iconSectionIcon" src={require('../images/Notification.png').default}/>
                <img className="iconSectionIcon" src={require('../images/Sign_out_circle_light.png').default}/>
            </section>
            <h2 className="subscriptionsHeader">Subscriptions</h2>
            <p className="seeMoreSection">see more</p>
            <table className="subscriptionDetails">
                <thead>
                    <th>Subs Made</th>
                    <th>Due Date</th>
                </thead>
                <tbody>
                    <tr>
                        <td>DSTV</td>
                        <td>25th September</td>
                    </tr>
                </tbody>
            </table>
            <div className="billing">Keep track of your billing</div>
            <img className="billingImage" src={require('../images/credit-card.png').default} />
        </section>
    );
}