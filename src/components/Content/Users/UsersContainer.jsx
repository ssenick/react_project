import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAc, subscribeAc, unSubscribeAc} from "../../../redux/users-reduser";
import UsersC from "./UsersC";


const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      subscribe: (userID) => {
         dispatch(subscribeAc(userID));
      },
      unsubscribe: (userID) => {
         dispatch(unSubscribeAc(userID));
      },
      setUsers: (users) => {
         dispatch(setUsersAc(users))
      }

   }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);
export default UsersContainer;