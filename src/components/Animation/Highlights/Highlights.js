import React from "react";
import { Motion, spring } from "react-motion";

export default class Highlights extends React.Component {
  constructor() {
    super();
    this.state = {
      pop: 0
    };
  }

  enter() {
    this.setState({ pop: 5 });
    this.props.hoverHighlight(this.props.name);
  }

  leave() {
    this.setState({ pop: 0 });
    this.props.hoverHighlight(this.props.name);
  }

  render() {
    return (
      <Motion
        defaultStyle={{ x: 300 }}
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
              onMouseEnter={() => this.enter()}
              onMouseLeave={() => this.leave()}
            >
              Variable Name: {this.props.name} // Data Type: {this.props.type}
            </div>
          );
        }}
      </Motion>
    );
  }
}
