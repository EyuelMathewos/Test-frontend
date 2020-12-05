export const ADD_EMP = "ADD_EMP";
export const EDIT_EMP = "EDIT_EMP";
export const DELETE_EMP = "DELETE_EMP";
export const LIST_EMP = "LIST_EMP";

export const addEmployee = (empstate:Object)=>({
    type: typeof ADD_EMP,
    payload: empstate
});

export const editEmployee = (id:string)=>({
    type: typeof EDIT_EMP,
    payload: id
});

export const deleteEmployee = (id:string)=>({
    type: typeof DELETE_EMP,
    payload: id
});

export const listEmployee = (empstate:Object)=>({
    type: typeof LIST_EMP,
    payload: empstate
});
