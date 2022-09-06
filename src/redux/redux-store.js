import {combineReducers, legacy_createStore as createStore} from "redux";
import asideReduce from "./aside-reducer";

import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   aside: asideReduce,
});


let store = createStore(reducers);

export default store;
