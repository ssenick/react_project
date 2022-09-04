import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let initialState = {
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
};


const contentReduce = (state = initialState, action) => {
   return state;
}
export default contentReduce;