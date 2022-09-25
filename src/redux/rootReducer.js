import { combineReducers } from "redux";
import reducer from "../store";
import { cardReducer } from "./reducer/cartReducer";

export const rootReducer=combineReducers({

    reducerZohrab:reducer,
    card:cardReducer
})