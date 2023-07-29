import React from "react";
import "./App.css";

export default class App extends React.Component {
  //new app
  constructor(props) {
    // React.Component. contstructor(props);
    super(props);
    this.state = {
      // isClicked: false,
      todos: [],
      text: ''
    };
    this.onClickHandler = () => {
      const text = this.state.text;
      const todos = [...this.state.todos, text];
      this.setState({
        todos: todos,
        text: ''
      });
    };

    this.onChangeHandler = (e) => {
      this.setState({
        text: e.target.value
      })
    };
  }

  render() {
    return (
      <div className="App">
        Hello World!
        <hr />
        <button onClick={this.onClickHandler}> 
        Add Item
        </button>
          <input type="text" 
          value ={this.state.text}
          onChange={this.onChangeHandler} />
          <h3>ToDo List</h3>
          <ul>
            {this.state.todos.map((todo, index) => {
              return (
                <Todo key={index}> {todo} </Todo>
              );
              })}
              </ul>
      </div>
    );
  }
}

class Todo extends React.Component {
  render() {
    return (
      <li className="Todo">
        <input type="checkbox" /> {this.props.children}
       </li>
    )
  }
}



