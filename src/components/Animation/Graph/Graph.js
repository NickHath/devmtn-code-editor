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

    const { highlightVal } = this.props;
    return (
      <div className="animation-graph">
        {gridArray.map((val, i) => {
          const inputHighlighted = highlightVal.input && (highlightVal.input === val.input);
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
                    className="memory-location"
                    key={i}
                    style={{
                      color: inputHighlighted ? "#89BDFF" : "#00E676",
                      border: inputHighlighted ? "1px solid #89BDFF" : "1px solid #00E676",
                      backgroundColor: inputHighlighted ? "rgba(137, 189, 255, 0.35)" : "rgba(0, 230, 118, 0.35)",
                    }}
                  >
                    <div>({i + 1100})</div>
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
