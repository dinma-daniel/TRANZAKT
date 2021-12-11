import SubscriptionSectionRow from './SubscriptionSectionRow';
import {useState} from 'react';
export default function SubscriptionSection(props) {
    const [subscriptions, setSubscriptions] = useState([
        ['DSTV', '25th September'],
        ['Spotify', '25th September'],
        ['Netflix', '25th September'],
        ['Figma', '25th September'],
        ['Youtube', '25th September']
    ])
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
                    <tr>
                        <th>Subs Made</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {subscriptions.map(subscription => <SubscriptionSectionRow subName={subscription[0]} dueDate={subscription[1]} key={subscriptions.indexOf(subscription)}/>)}
                </tbody>
            </table>
            <div className="billing">Keep track of your billing</div>
            <img className="billingImage" src={require('../images/credit-card.png').default} />
        </section>
    );
}