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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "fixed",
            bottom: 10,
            width: "50px",
            height: "auto",
            zIndex: 4
          }}
        >
          <div className="animation-hands" />
          <div className="animation-hands" />
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
                        style={{
                          backgroundColor: "black",
                          width: "50px",
                          height: "10px",
                          margin: "1px",
                          transform: "rotate(-10deg)"
                        }}
                      />
                      <div
                        style={{
                          backgroundColor: "blue",
                          width: "50px",
                          height: "50px",
                          margin: "1px",
                          borderRadius: "20px 20px 0 0"
                        }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          backgroundColor: "black",
                          width: "50px",
                          height: "10px",
                          margin: "1px"
                        }}
                      />
                      <div
                        style={{
                          backgroundColor: "blue",
                          width: "50px",
                          height: "50px",
                          margin: "1px",
                          borderRadius: "20px 20px 0 0"
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100px",
                      height: "10px",
                      backgroundColor: "black"
                    }}
                  />
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
