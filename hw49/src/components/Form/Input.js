import "./Input.css";
import React, { Component } from "react";

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      taskTodo: [],
    };
  }

  handleChangeTask = (event) => {
    this.setState({ value: event.target.value });
  };

  handleAddTask = (event) => {
    event.preventDefault();
    this.setState({
      value: "",
      taskTodo: [...this.state.taskTodo, this.state.value],
    });
  };

  render() {
    return (
      <div className="bg-cont">
        <div className="inner-cont">
          <ol>
            {this.state.taskTodo.map((item, index) =>
              item === "" ? (
                ""
              ) : (
                <li
                  key={index}
                  onClick={(event) =>
                    event.currentTarget.classList.toggle("special")
                  }
                >
                  {item}
                </li>
              )
            )}
          </ol>
        </div>
        <div className="block">
          <input value={this.state.value} onChange={this.handleChangeTask} />
          <button onClick={this.handleAddTask}>Add task</button>
        </div>
      </div>
    );
  }
}
