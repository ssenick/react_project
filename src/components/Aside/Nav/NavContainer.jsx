import Nav from "./Nav";
import {connect} from "react-redux";


// const NavContainer = (props) => {
//    let state = props.store.getState();
//    return <Nav navList={state.aside.navList}/>
// };

const mapStateToProps = (state) => {
   return {
      navList: state.aside.navList,
   }
}
const NavContainer = connect(mapStateToProps)(Nav);
export default NavContainer;
