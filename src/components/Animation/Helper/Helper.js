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
      <div style={{ position: "fixed", bottom: 10, right: 150, zIndex: 3 }}>
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
                  style={{
                    width: "100%",
                    height: "100px",
                    // backgroundColor: "red",
                    position: "fixed",
                    bottom: 200,
                    // zIndex: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      height: "15px",
                      width: "15px",
                      backgroundColor: "red"
                    }}
                  >
                    ball
                  </div>
                  <div className="zigzag">hands</div>
                </div>
                <div
                  className="animation-head"
                  style={{
                    transform: `translateY(${mot.head}px)`
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2px"
                    }}
                  >
                    <div>
                      <div
                        className="animation-brows"
                        style={{
                          transform: "rotate(-10deg)"
                        }}
                      />
                      <div className="animation-eyes" />
                    </div>
                    <div>
                      <div className="animation-brows" />
                      <div className="animation-eyes" />
                    </div>
                  </div>
                  <div className="animation-mouth" />
                </div>
                <div
                  className="animation-body"
                  style={{
                    transform: `translateY(${mot.body}px)`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center"
                  }}
                >
                  <div className="tie bow" />
                  <div className="tail" />
                </div>
              </div>
            );
          }}
        </Motion>
      </div>
    );
  }
}
