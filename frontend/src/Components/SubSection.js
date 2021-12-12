import {motion} from 'framer-motion';
const SubSection = (props) => {
    return ( 
        <div className="sub__section">
            <div className="sub__section__body">
                <div className="iconbody">
                <div className="left">

</div>
            <div className="iconSec__right">
                <img className="iconSectionIcon" src={require('../images/Notification.png').default}/>
                <img className="iconSectionIcon" src={require('../images/Sign_out_circle_light.png').default} onClick={() => props.history.replace('/welcome')}/>
            </div>
            
            </div>
            <h3>Subscriptions</h3>
           
            <motion.div className="sub__container"
            initial={{
                opacity: 0, 
                    y: 100
                }}
                animate={{
                    opacity: 1, 
                    y: 0
                }}
                transition={{
                    delay: 0.6
                }}
            >
                <h4>Sub Name</h4>
                <h4>Desccription</h4>
                <h4>Start Date</h4>
                <h4>End Date</h4>
            </motion.div>
            </div>
        </div>
     );
}
 
export default SubSection;