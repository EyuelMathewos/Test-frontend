import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'qs';
//const delay = (ms:number) => new Promise(res => setTimeout(res, ms))
let data : Object=[]; 
function* helloSaga() {
  yield console.log('Hello Sagas!')
  }
  type Employees = [{
  
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
    payload: Object;
  }
  export function* addEmployeeAsync(action:actionType) {
    
     yield console.log('calling add employee')
    
    axios.post('http://localhost:4000/addemployee',qs.stringify(action.payload))
    .then(function (res) {
       console.log(res)
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(data)
    yield put({ type: "ADD_EMP", payload: action.payload });

  }

  export function* employeelistAsync(action:actionType) {
    
    yield console.log('Hello Sagas form a sagaå!')
    
    axios.get('http://localhost:4000/getemployeelist')
    .then(function (res) {
     console.log(typeof res.data)
     console.log(res.data)
     
     console.log(data)
    
    //  res.data.map((content:Employees, idx:number) => (
      
    //   data.push(content)
      
    // ))
    data={employeeState:{employees : res.data}};
   // console.log(action.payload)
    console.log(data)

    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(data)
    yield put({ type: "LIST_EMP", payload: data });

  }
  



  export function* watchEmployeeListAsync() {
    yield takeLatest('GET_EMP', employeelistAsync)
    yield takeLatest('REQ_ADD_EMP', addEmployeeAsync)
  }

   function* rootSaga() {
    yield all([
      helloSaga(),
      watchEmployeeListAsync()
    ])
  }
  export default rootSaga