export default function InsightSection(props) {
    return (
        <div className="insightColumn pageColumn">
            <header className="insightSectionHeader">
                <h1 >Personal Insight</h1>
                <section className="iconSection">
                    <img className="iconSectionIcon" src={require('../images/Notification.png').default} />
                    <button> <img onClick={() => props.history.replace('/welcome')} className="iconSectionIcon" src={require('../images/Sign_out_circle_light.png').default} /></button>
                </section>
            </header>
            <section className="mainInsightSection">
                <p>Here are some things we noticed while handling working with your finance</p>
                <div className="insightCarousel"></div>
            </section>
        </div>
    );
}