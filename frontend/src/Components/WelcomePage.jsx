import SideNav from './SideNav';
export default function WelcomePage(props) {
    return (
        <div className="welcomePage">
            <SideNav/>
            <main className="mainContent pageColumn"></main>
            <section className="subscriptionSection pageColumn"></section>
        </div>
    );
}