// todo action 
// import constants 
import {
    ADD_TODO,
    TOGGLE_TODO,
    TODO_ERROR,
    TODO_SUCCESS,
  } from '../constants/ActionTypes';
  
  export function addtodo(data) {
    return {
      type: ADD_TODO,
      data,
    };
  }
  export function toggleCompletedtodo(data) {
    return {
      type: TOGGLE_TODO,
      data,
    };
  }
  export function todoSuccess(data) {
    return {
      type: TODO_SUCCESS,
      data,
    };
  }
  export function todoError(data) {
    return {
      type: TODO_ERROR,
      data,
    };
  }