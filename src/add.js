import React, { Component } from "react";
import PropTypes from "prop-types";

class Add extends Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);
  }
  //
  add() {
    //读取输入数据（从App组件过来的props）
    const todo = this.todoInput.value;

    // 检查合法性
    if (!todo) {
      return;
    }
    // 添加
    this.props.addTodo(todo);
    //空格
    this.todoInput.value = "";
  }

  render() {
    return (
      <div>
        <input type="text" ref={input => (this.todoInput = input)} />

        <button onClick={this.add}>add #{this.props.count + 1}</button>
      </div>
    );
  }
}
Add.propType = {
  count: PropTypes.number.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default Add;
