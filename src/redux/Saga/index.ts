import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'qs';
//const delay = (ms:number) => new Promise(res => setTimeout(res, ms))
 
function* helloSaga() {
  yield console.log('Hello Sagas!')
  }
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

   export interface actionType {
    type: string;
    payload: object|String;
  }
  
  let data :Object ;
  export function* addEmployeeAsync(action:actionType) {
    
     yield console.log('calling add employee')
    
    yield axios.post('http://localhost:4000/addemployee',qs.stringify(action.payload))
    .then(function (res) {
       console.log(res)
       data=res.data;
       
    })
    .catch(function (error) {
      console.log(error);
    });
    //console.log(data)
    yield put({ type: "ADD_EMP", payload:  data });

  }
  export function* deleteEmployeeAsync(action:actionType) {
    
    yield console.log('calling delete employee')
   yield console.log(action.payload)
   yield axios.delete('http://localhost:4000/deleteemployee/'+action.payload)
   .then(function (res) {
      console.log(res)
   })
   .catch(function (error) {
     console.log(error);
   });
   //console.log(data)
   yield put({ type: "DELETE_EMP", payload:  action.payload });
   yield put({ type: "GET_EMP"});
 
 }
  export function* employeelistAsync(action:actionType) {
    
    yield console.log('Hello Sagas form a sagaå!')
    
    yield axios.get('http://localhost:4000/getemployeelist')
    .then(function (res) {
     console.log(typeof res.data)
     console.log(res.data)
     
    //  console.log(data)
    
    //  res.data.map((content:Employees, idx:number) => (
      
    //   data.push(content)
      
    // ))
    data=res.data;
    
   // console.log(action.payload)
     console.log(data)

    })
    .catch(function (error) {
      console.log(error);
    });
    yield console.log("data from list emp api")
    yield console.log(data)
    yield put({ type: "LIST_EMP", payload: data });

  }
  



  export function* watchEmployeeListAsync() {
    yield takeLatest('GET_EMP', employeelistAsync)
    yield takeLatest('REQ_ADD_EMP', addEmployeeAsync)
    yield takeLatest('REQ_DELETE_EMP', deleteEmployeeAsync)
  }

   function* rootSaga() {
    yield all([
      helloSaga(),
      watchEmployeeListAsync()
    ])
  }
  export default rootSaga