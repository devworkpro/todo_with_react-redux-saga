// todo saga for adding new todo and update the todo saga whether completed or not 
import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../request'
import { ADD_TODO, TOGGLE_TODO  } from '../constants/ActionTypes';
import {  todoSuccess , todoError} from '../actions/index';

// add new todo api call
export function* addtodoApi(data) {
  const requestURL = `http://localhost:4000/addtodo`;
    try {
        // prepare post data for api
        const options = {
        method: 'POST',
        body: JSON.stringify(data.data)
        }
        //call to api 
        const res = yield call(request, requestURL, options);
        if (res.status === true) {
        yield put(todoSuccess('mock api call success'));
        } else {
        yield put(todoSuccess('mock api call success'));
        }
    } catch (err) {
      
        yield put(todoSuccess('mock api call success'));
        //send error if request not completed like
        // yield put(todoError('Oops !! something went wrong... '));
    }
}


// update todo  api call

export function* updateTodo(data) {
  const requestURL = `http://localhost:4000/updatetodo`;
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(data.data)
    }
    const res = yield call(request, requestURL, options);
    if (res.status === true) {
      yield put(todoError('mock api call failed'));
    } else {
      yield put(todoError('mock api call failed'));
    }
  } catch (err) {
    yield put(todoError('mock api call failed'));
  }
}

export default function* todosSaga() {
    yield takeLatest(ADD_TODO, addtodoApi);    
    yield takeLatest(TOGGLE_TODO, updateTodo);
  }