//import { Action } from "typesafe-actions";
//import {Action} from "redux"
import {ADD_EMP} from "../Action/empAction";
import {LIST_EMP} from "../Action/empAction";
import {GET_EMP} from "../Action/empAction";
export interface initalStateType {
  employees: Array<object>
}

const initialState:initalStateType = {
  employees: []
}
;
export interface actionType {
  type: string;
  payload: Object;
}
let employees={};
const empReducer = (state=initialState , action:actionType) => {
  employees=action.payload
    switch(action.type) {
           case ADD_EMP :
            return {...state,action}
            
            case LIST_EMP :

              return {...state,
                employees: state.employees.concat(action.payload)}
            case GET_EMP :
              return {...state}
           default :
            return state
  };
  };
export default empReducer;