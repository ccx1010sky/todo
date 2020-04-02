import React, { Component } from "react";
import PropTypes from "prop-types";
// import Add from "./add";

class List extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    );
  }
}
List.propTypes = {
  todos: PropTypes.array.isRequired
};

export default List;
