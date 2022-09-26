import { combineReducers } from "redux";
import reducer from "../store";
import { cardReducer } from "./reducer/cartReducer";
import { singleReducer } from "./reducer/singleProductReducer";
import { filterReducer } from "./reducer/filterReducer";

export const rootReducer=combineReducers({

    reducerZohrab:reducer,
    card:cardReducer,
    singleObject:singleReducer,
    filteredArr:filterReducer
})