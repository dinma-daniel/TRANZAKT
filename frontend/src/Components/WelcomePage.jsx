import SideNav from './SideNav';
import MainContent from './MainContent';
import SubscriptionSection from './SubscriptionSection';
// Commented out the mono import statement because it was causing problems at my end
// ./src/Components/mono.jsx
// Module not found: Can't resolve '@mono.co/connect.js' in 'C:\Users\ronal\joeboys\frontend\src\Components'
// import Mono from "./mono";
export default function WelcomePage(props) {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
        window.location.href = "/"
    }
    return (<>
            
            <SideNav />
        <div className="welcomePage">
            <MainContent />
            <SubscriptionSection />
            {/* <Mono /> */}
        </div>
            </>
    );
}
