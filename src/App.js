import React from "react";
import Add from "./add.js";
import List from "./list.js";
import Delete from "./delete.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    //initialize the todos Array with data
    //todos is a Array inside state object
    this.state = {
      todos: ["sayhii", "drink", "sleep"]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  //传递addTodo method to Add组件标签
  //update state
  addTodo(todo) {

    const { todos } = this.state;
    todos.unshift(todo);
    this.setState({ todos });
  }
  //删除todo
  deleteTodo(todo) {
    const { todos } = this.state;
    todos.shift(todo);
    this.setState({ todos });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todolist">
        <h1> To Do List</h1>
        {/* 传递addTodo method to Add组件标签 */}
        <Add count={todos.length} addTodo={this.addTodo} />

        <Delete count={todos.length} deleteTodo={this.deleteTodo} />
        {/* passing property Array to List Component */}
        {/* props is a object ,todos is a Array inside object props */}
        <List todos={todos} />
      </div>
    );
  }
}

export default App;
