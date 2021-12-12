import SideNav from "./SideNav";
import InsightSection from './InsightSection';

export default function PersonalInsightPage(props) {
    return (
        <>
            <SideNav />
            <InsightSection history={props.history}/>
        </>
    );
}