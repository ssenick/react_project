import Friends from "./Friends";
import {connect} from "react-redux";

// const FriendsContainer = (props) => {
//    return <Friends friends={props.store.getState().aside.friends}/>
// };

const mapStateToProps = (state) => ({friends: state.aside.friends})

const FriendsContainer = connect(mapStateToProps)(Friends);
export default FriendsContainer;