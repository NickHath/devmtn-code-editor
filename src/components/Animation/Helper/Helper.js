import React from "react";
import { Motion, spring } from "react-motion";

export default class Helper extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: true
    };
  }

  render() {
    return (
      <div style={{ position: "fixed", bottom: 10, right: 150 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "fixed",
            bottom: 10,
            width: "50px",
            height: "auto",
            zIndex: 3
          }}
        >
          <div className="animation-hands">hands</div>
          <div className="animation-hands">hands</div>
        </div>

        <Motion
          defaultStyle={{ head: 200, body: 200, hands: 0 }}
          style={{
            head: this.state.clicked ? spring(200) : spring(0),
            body: this.state.clicked ? spring(200) : spring(0),
            ears: this.state.clicked ? spring(200) : spring(0)
          }}
        >
          {mot => {
            return (
              <div
                className="animation-monkey"
                style={{
                  transform: `translateY(${mot.head}px)`
                }}
                onClick={() => this.setState({ clicked: !this.state.clicked })}
              >
                <div
                  className="animation-head"
                  style={{
                    transform: `translateY(${mot.head}px)`
                  }}
                >
                  Head
                </div>
                <div
                  className="animation-body"
                  style={{ transform: `translateY(${mot.body}px)` }}
                >
                  Body
                </div>
              </div>
            );
          }}
        </Motion>
      </div>
    );
  }
}
