import AboutProfile from "./AboutProfile";
import {connect} from "react-redux";

// const AboutProfileContainer = (props) => {
//    return <AboutProfile aboutProfile={props.store.getState().profilePage.aboutProfile}/>
// }


const mapStateToProps = (state) => ({aboutProfile: state.profilePage.aboutProfile});

const AboutProfileContainer = connect(mapStateToProps)(AboutProfile);
export default AboutProfileContainer;