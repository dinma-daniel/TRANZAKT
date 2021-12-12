const SubSection = () => {
    return ( 
        <div className="sub__section">
            <div className="sub__section__body">
                <div className="iconbody">
                <div className="left">

</div>
            <div className="iconSec__right">
                <img className="iconSectionIcon" src={require('../images/Notification.png').default}/>
                <img className="iconSectionIcon" src={require('../images/Sign_out_circle_light.png').default}/>
            </div>
            
            </div>
            <h3>Subscriptions</h3>
           
            <div className="sub__container">
                <h4>Sub Name</h4>
                <h4>Desccription</h4>
                <h4>Start Date</h4>
                <h4>End Date</h4>
            </div>
            </div>
        </div>
     );
}
 
export default SubSection;