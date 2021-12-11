import { Link } from "react-router-dom";

export default function SubscriptionSection(props) {
    return (
        <section className="subscriptionSection pageColumn">
            <section className="iconSection">
                <img className="iconSectionIcon" src={require('../images/Notification.png').default}/>
                <img className="iconSectionIcon" src={require('../images/Sign_out_circle_light.png').default}/>
            </section>
            <h2 className="subscriptionsHeader">Subscriptions</h2>
            <Link to="/subscription">
            <p className="seeMoreSection">see more</p>
            </Link>
            <div className="subscriptionDetails"></div>

        </section>
    );
}