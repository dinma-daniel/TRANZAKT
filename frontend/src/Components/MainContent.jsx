export default function MainContent(props){
    return (
        <main className="mainContent pageColumn">
            <h1 className="mainHeader">Welcome Name!</h1>
            <div className="welcomeContent"></div>
            <section className="accountSection">
                <h2 className="accountsSectionTitle">Your Accounts</h2>
                <p className="seeMoreSection">see more</p>
                <div className="accountsTableContainer"></div>
            </section>
            <section className="insightSection">
                <h2 className="insightsSectionTitle">Personal Insight</h2>
                <p className="seeMoreSection">see more</p>
                <div className="insightsInfoContainer"></div>
            </section>
        </main>
    );
}