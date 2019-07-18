import React from 'react'
import { connect } from 'react-redux'
// import loading indicator to show loading indicator while fetching api
import LoadingIndicator from './LoadingIndicator'

// create app class 


class App extends React.Component{
  constructor(props){
    super(props);
    // initialize state
    this.state= {
      input: '', // todo name 
      toggle: false,
    };
    // bind event handlers
    this.addTask = this.addTask.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  
  // add new todo 
  addTask(){
    // new todo
    const newTodo ={name: this.state.input,completed: false};

    // dispatch an action 
    this.props.dispatch({ type: 'ADD_TODO',data:newTodo });

    this.setState({input : ''})
  }


  //update todo completed or not 
  
  toggleCompleted(index){
    // in real api index will replced with todo id 

    // dispatch action 
    this.props.dispatch({ type: 'TOGGLE_TODO',data:index })
     this.setState({toggle : !this.state.toggle});
  }

  render(){
    // map todo into jsx list
    const { todo, loading , error, success } = this.props;
    const todolist = todo.map((item,index)=>
        <li 
        style={{color : item.completed ? 'green':'black'}}
        key={`${item.name}${index}`}
        ><input type="checkbox" onClick={this.toggleCompleted.bind(this, index)}/>
        {item.name}
        </li>
      )
    return (
      <section className="main">
        <h1>Add Todo</h1>
        
        <input 
        onChange={(e)=>{this.setState({input:e.target.value})}} 
        value={this.state.input}
        placeholder="add task name"/>

        <button onClick={this.addTask}>Add task</button>

        {/* // show loading indcator while fetching api request */}
        {/* {loading && <LoadingIndicator />} */}

        {/* // show success messages on api request */}
        {success && <span >{success}</span>}

        {/* // show error message returned by api  */}
        {error && <span >{error }</span>}
        {todolist}
      
    </section>
    )
  }
}



export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const mapStateToProps = state => ({
  error: state.todos.error,
  loading: state.todos.loading,
  success: state.todos.success,
  todo: state.todos.todo,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)