import SideNav from './SideNav';
import MainContent from './MainContent';
import SubscriptionSection from './SubscriptionSection';
import Mono from "./mono";



export default function WelcomePage(props) {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
        window.location.href = "/login"
    }
    return (<>

        <SideNav />
        <div className="welcomePage">
            <MainContent />
            <SubscriptionSection />
        </div>
    </>
    );
}
