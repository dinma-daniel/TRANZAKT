import SideNav from "./SideNav"
import RegistrationBody from "./RegistrationBody";
import SubSection from "./SubSection";
import ResponsivenessPrompt from "./ResponsivenessPrompt";
const Subscription = (props) => {
    return ( 
    <>
            <SideNav />
        <div className="sub__body">
            <RegistrationBody />
            <SubSection history={props.history}/>
        </div>
        <ResponsivenessPrompt />
    </>
     );
}
 
export default Subscription;