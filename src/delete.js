import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Delete extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete() {
    const  todo  = this.
    this.props.deleteTodo(todo);
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
       
        <button onClick={this.delete}>delete #{this.props.count}</button>
      </div>
    );
  }
}
Delete.propTypes = {
  count: PropTypes.number.isRequired,
  todos: PropTypes.array.isRequired
};
