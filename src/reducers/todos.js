import {
  ADD_TODO,
  TOGGLE_TODO,
  TODO_ERROR,
  TODO_SUCCESS
} from '../constants/ActionTypes'
//initialize state
const initialState = {
    todo: [],
    loading: false, // loading --> loading indicator while api sending request 
    success: false, // success --> api request has succeeded or not 
    error: null,    // error -> api return any error 
}

export default function todos(state = initialState, action) {
  console.log('action',action)
  switch (action.type) {
    case ADD_TODO:
      //add new todo here 
      // in real api ommit  line 20  and set state todo by api response data
      // loading --> true while api sending request 
        const newtodo = (state.todo).push(action.data)
        return Object.assign({}, state, {
          loading: true,
          error: false,
          success: false,
          todos:newtodo
          
        })
    case TOGGLE_TODO:
      // update that todo completed or not 
      const toggletodo = state.todo.map((item,thisindex)=>{
        if(thisindex === action.data) {
          item.completed = !item.completed;
          return item;
        } else {
          return item;
        }
        
      })
      return Object.assign({}, state, {
        loading: true,
        error: false,
        success: false,
        todos:toggletodo
        
      })
    case TODO_ERROR:
      // api send any error 
        return Object.assign({}, state, {
          loading: false,
          error: (action.data).toString(),
          success: false,
          todos:state.todo
          
        })
    case TODO_SUCCESS:
      // api request completed without error 
        return Object.assign({}, state, {
          loading: false,
          error: false,
          success:(action.data).toString(),
          todos:state.data
          
        })
    default:
      return state
  }
}
