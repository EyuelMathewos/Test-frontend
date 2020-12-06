export const ADD_EMP = "ADD_EMP";
export const EDIT_EMP = "EDIT_EMP";
export const DELETE_EMP = "DELETE_EMP";
export const LIST_EMP = "LIST_EMP";
export const GET_EMP = "GET_EMP";





export const addEmployee = (empstate:Object)=>({
    type: ADD_EMP,
    payload: empstate
});

export const editEmployee = (id:string)=>({
    type: EDIT_EMP,
    payload: id
});

export const deleteEmployee = (id:string)=>({
    type: DELETE_EMP,
    payload: id
});

export const listEmployee = (empstate:Array<object>)=>({
    type: LIST_EMP,
    payload: empstate
});
export const getlistEmployee = ()=>({
    type: GET_EMP
});

export type EmpAction = 
|  {type:"ADD_EMP"; payload: Object}
|  {type:"EDIT_EMP"; payload: string}
|  {type:"DELETE_EMP"; payload: string}
|  {type:"LIST_EMP"; payload: Object}
