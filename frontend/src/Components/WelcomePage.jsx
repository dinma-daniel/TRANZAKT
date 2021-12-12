import SideNav from './SideNav';
import MainContent from './MainContent';
import SubscriptionSection from './SubscriptionSection';

export default function WelcomePage(props) {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
        window.location.href = "/"
    }
    return (
        <div className="welcomePage">
            <SideNav />
            <MainContent />
            <SubscriptionSection />
            
        </div>
    );
}
