import React from 'react';
import '../App.css';
import waxseal from '../img/waxseal.png'
import quill from '../img/quill.png'
import {connect} from 'react-redux'
import Quotes from './Quotes'

const { bindActionCreators } = require('redux');
const { Component } = require('react');

const addTodo = (id, task) => (
  {
    type: 'ADD_TODO',
    payload: {id: id, task: task, isDone: false},
  }
);

const AsyncremoveTodo = (id, task)=> (
  {
    type: 'REMOVE_TODO',
    payload: {id, task}
  }
)

const removeTodo = (id, task)=> {
  return dispatch => {
    setTimeout(()=> {
      dispatch(AsyncremoveTodo(id, task))
    }, 3500)
  }
}


let taskidx = 0;

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });

  }

  handleSubmit = (e)=> {
    e.preventDefault();
    const { addTodo } = this.props;
    addTodo(taskidx++,this.state.input, false);
    this.setState({
      input: ''
    })  
  }
  
  handleCheck = (e)=> {
    const {removeTodo} = this.props;
    removeTodo(e.target.id, e.target.value);
  }

  handleEnter =(e)=> {
   
    if (e.key === 'Enter') {
      e.preventDefault();
      const { addTodo } = this.props;
      addTodo(taskidx++,this.state.input, false);
      this.setState({
        input: ''
      })
    }
  }

  render(){
    return(
      <div className="flex">
        <div className="container">
        <form className="inputform">
            <input placeholder="Type your task" onChange={this.handleChange} onKeyDown={this.handleEnter} value={this.state.input} className="taskinput"/>
            <img src={quill} className="taskaddbtn" onClick={this.handleSubmit} />
        </form>
          <img src={waxseal} className="titleimage" />
          <h3　className="todotitle">Todo Task List</h3>
          <ul className="taskUl">
            {
              this.props.addtodoReducer?
                (this.props.addtodoReducer.map
                  (item=>
                  <li key={item.id} className="taskList flex">
                    <input type="checkbox" className="taskcheck" id={item.id} value={item.task} onClick={this.handleCheck} />
                    <label for={item.id} className={item.isdone ? "" : "done"} className="taskitem">
                      {item.task}
                    </label>
                  </li>)):
                (<div>No Task Item</div>)
            }
          </ul>
        </div>
        <Quotes />
        
      </div>
    ) 
  }
}
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
  addTodo,removeTodo
}, dispatch)

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp;
