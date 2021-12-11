import SideNav from './SideNav';
import MainContent from './MainContent';
import SubscriptionSection from './SubscriptionSection';
export default function WelcomePage(props) {
    return (
        <div className="welcomePage">
            <SideNav/>
            <MainContent/>
            <SubscriptionSection/>
        </div>
    );
}