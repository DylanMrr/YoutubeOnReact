import { combineReducers } from "redux";
import sidebarReducer from "./reducers/sidebar";

export const rootReducer = combineReducers({
    sidebar: sidebarReducer
})