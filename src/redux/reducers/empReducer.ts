import { Action } from "typesafe-actions";
import {ADD_EMP} from "../Action/empAction"
const initialState = {
  "employees": []
}
;
const empReducer = (state=initialState , action:Action) => {
    switch(action.type) {
           case ADD_EMP :
            return action
           default :
            return state
  };
  };
export default empReducer;