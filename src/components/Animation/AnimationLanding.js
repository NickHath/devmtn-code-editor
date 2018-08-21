import React, { Component } from "react";
import "./animationStyle.css";
import Helper from "./Helper/Helper";
import Highlights from "./Highlights/Highlights";
import Graph from "./Graph/Graph";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentVal: ""
    };
    this.hoverHighlight = this.hoverHighlight.bind(this);
  }

  hoverHighlight(val, action) {
    action === "enter"
      ? this.setState({ currentVal: val })
      : this.setState({ currentVal: "" });
  }

  render() {
    const arrOfVar = this.props.arrOfVar;
    return (
      <div className="animation-workspace">
        <Helper style={{ zIndex: 3 }} />
        <Graph highlightVal={this.state.currentVal} data={arrOfVar} />
        <div className="animation-highlights">
          {arrOfVar.map((val, i) => {
            return (
              <Highlights
                key={i}
                hoverHighlight={this.hoverHighlight}
                data={val}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { arrOfVar: state.arrOfVar };
}

export default connect(mapStateToProps)(App);
