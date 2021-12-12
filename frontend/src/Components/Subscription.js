import SideNav from "./SideNav"
import RegistrationBody from "./RegistrationBody";
import SubSection from "./SubSection";
const Subscription = () => {
    return ( 
    <>
            <SideNav />
        <div className="sub__body">
            <RegistrationBody />
            <SubSection />
        </div>
    </>
     );
}
 
export default Subscription;