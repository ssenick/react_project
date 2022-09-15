import {combineReducers, legacy_createStore as createStore} from "redux";
import asideReduce from "./aside-reducer";

import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reduser";


let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   aside: asideReduce,
   usersPage: usersReducer,
});


let store = createStore(reducers);
window.store = store;

export default store;
