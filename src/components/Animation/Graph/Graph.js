import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Motion, spring } from "react-motion";

//Creates the empty array used for the grid
let gridArray = _.times(9, _.constant(""));

class Graph extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    //This is the logic for what spot the new incoming variable object needs to be placed on the grid.  Needs reworking for objects and arrays
    if (this.props.arrOfVar.length > 0) {
      _.fill(
        gridArray,
        this.props.arrOfVar[this.props.arrOfVar.length - 1],
        this.props.arrOfVar.length - 1,
        this.props.arrOfVar.length
      );
    }
    return (
      <div
        className="animation-graph"
        style={{
          display: "grid",
          gridTemplateColumns: "33.3% 33.3% 33.3%",
          gridTemplateRows: "33.3% 33.3% 33.3%",
          backgroundColor: "pink",
          margin: 0
        }}
      >
        {gridArray.map((val, i) => {
          return (
            <Motion
              defaultStyle={{ x: 10, opacity: 0 }}
              style={{
                x: val.input ? spring(0, { stiffness: 200, damping: 5 }) : 10,
                opacity: val.input
                  ? spring(1, { stiffness: 30, damping: 15 })
                  : 0
              }}
            >
              {mot => {
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      border: "1px solid black",
                      padding: "2px",
                      backgroundColor: this.props.highlightVal.input
                        ? this.props.highlightVal.input === val.input
                          ? "blue"
                          : "pink"
                        : "pink"
                    }}
                  >
                    <div>Memory Location: {i + 1100}</div>
                    <div
                      style={{
                        transform: `translateX(${mot.x}px)`,
                        opacity: mot.opacity
                      }}
                    >
                      {val.input}
                    </div>
                    <div
                      style={{
                        transform: `translateX(-${mot.x}px)`,
                        opacity: mot.opacity
                      }}
                    >
                      {val.dataType}
                    </div>
                  </div>
                );
              }}
            </Motion>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    arrOfVar: state.arrOfVar
  };
}

export default connect(mapStateToProps)(Graph);
