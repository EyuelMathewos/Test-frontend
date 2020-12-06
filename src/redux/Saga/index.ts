import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
const delay = (ms:number) => new Promise(res => setTimeout(res, ms))
let data : Array<object>=[]; 
function* helloSaga() {
  yield console.log('Hello Sagas!')
  }



  export function* incrementAsync() {
    //yield delay(1000)
    yield console.log('Hello Sagas form a sagaå!')
    
    axios.get('http://localhost:4000/getemployeelist')
    .then(function (res) {
     console.log(typeof res.data)
     console.log(res.data)
     data=res.data

    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(data)
    yield put({ type: "LIST_EMP", payload: data });

  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchIncrementAsync() {
    yield takeLatest('GET_EMP', incrementAsync)
  }

   function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
  }
  export default rootSaga