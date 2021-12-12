import {motion} from 'framer-motion';
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
            <motion.section 
              className="mainInsightSection"
              initial={{
                  opacity: 0, 
                  scale: 0.9
              }}
              animate={{
                  opacity: 1, 
                  scale: 1
              }}
              transition={{
                  duration: 0.6, 
                  delay: 0.5
              }}
              >
                <p>Here are some things we noticed while handling working with your finance</p>
                <div className="insightCarousel"></div>
            </motion.section>
        </div>
    );
}