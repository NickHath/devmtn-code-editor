import React from "react";
import { Motion, spring } from "react-motion";

export default class Highlights extends React.Component {
  constructor() {
    super();
    this.state = {
      pop: 0
    };
  }

  enter(val) {
    this.setState({ pop: 3 });
    this.props.hoverHighlight(val, "enter");
  }

  leave(val) {
    this.setState({ pop: 0 });
    this.props.hoverHighlight(val, "leave");
  }

  render() {
    return (
      <Motion
        defaultStyle={{ x: 300, zIndex: 0 }}
        style={{ x: spring(0, { stiffness: 90, damping: 11 }) }}
      >
        {mot => {
          return (
            <div
              style={{
                width: "100%",
                height: "30px",
                backgroundColor: "pink",
                boxShadow: `${this.state.pop}px ${this.state.pop}px ${
                  this.state.pop
                }px black`,
                transform: `translateX(${mot.x}px)`
              }}
              onMouseEnter={() => this.enter(this.props.data)}
              onMouseLeave={() => this.leave(this.props.data)}
            >
              Variable Name: {this.props.data.input} -- Data Type:{" "}
              {this.props.data.type}
            </div>
          );
        }}
      </Motion>
    );
  }
}
