import SideNav from './SideNav';
import MainContent from './MainContent';
export default function WelcomePage(props) {
    return (
        <div className="welcomePage">
            <SideNav/>
            <MainContent/>
            <section className="subscriptionSection pageColumn"></section>
        </div>
    );
}