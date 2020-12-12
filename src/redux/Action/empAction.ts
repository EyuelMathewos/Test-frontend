export const ADD_EMP = "ADD_EMP";
export const EDIT_EMP = "EDIT_EMP";
export const DELETE_EMP = "DELETE_EMP";
export const LIST_EMP = "LIST_EMP";
export const UPDATE_EMP_FORM="UPDATE_EMP_FORM";

export const GET_EMP = "GET_EMP";
export const REQ_ADD_EMP = "REQ_ADD_EMP";
export const REQ_EDIT_EMP = "REQ_EDIT_EMP";
export const REQ_DELETE_EMP = "REQ_DELETE_EMP";
export const REQ_LIST_EMP = "REQ_LIST_EMP";

type Employees = [{
    _id:string,
    name: String,
    dateOfBirth: String,
    gender: String,
    salary: String
   }]

interface AppState{
    employeeState:{employees : Employees};
   }


export const addEmployee = (empstate:Object)=>({
    type: ADD_EMP,
    payload: empstate
});

export const reqAddEmployee = (empstate:Object)=>({
    type: REQ_ADD_EMP,
    payload: empstate
});

export const editEmployee = (emp:Object)=>({
    type: EDIT_EMP,
    payload: emp
});

export const reqEditEmployee = (emp:Object)=>({
    type: REQ_EDIT_EMP,
    payload: emp
});

export const deleteEmployee = (id:string)=>({
    type: DELETE_EMP,
    payload: id
});
export const reqDeleteEmployee = (id:String)=>({
    type: REQ_DELETE_EMP,
    payload: id
});

export const listEmployee = (empstate:Object)=>({
    type: LIST_EMP,
    payload: empstate
});
export const getlistEmployee = ()=>({
    type: GET_EMP
});
export const updateEmployeeForm = (empstate:Object)=>({
    type: UPDATE_EMP_FORM,
    payload:empstate
});

