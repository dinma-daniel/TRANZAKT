import SideNav from "./SideNav";
import InsightSection from './InsightSection';
import ResponsivenessPrompt from "./ResponsivenessPrompt";

export default function PersonalInsightPage(props) {
    return (
        <>
            <SideNav />
            <InsightSection history={props.history}/>
            <ResponsivenessPrompt />
        </>
    );
}