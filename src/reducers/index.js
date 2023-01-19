import changeTheNumber from './upDown';

import { combineReducers } from "redux";

const reducer = combineReducers(
    {
    //   myNumber:changeTheNumber
        changeTheNumber
    }
);

export default reducer;