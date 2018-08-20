import React from "react";
import { Link } from "react-router-dom";
import "./CodeEditor.css";

// all tokens will be imported here
import VarKeywordToken from "../Token/tokens/VarKeywordToken";
import VarNameToken from "../Token/tokens/VarNameToken";
import StringToken from "../Token/tokens/StringToken";
import OperatorToken from "../Token/tokens/OperatorToken";

// animation jazz
import AnimationLanding from "./../Animation/AnimationLanding";
import { Motion, spring } from "react-motion";

// object that maps from .json types to their appropriate class constructors
const componentNames = {
  VarKeyword: VarKeywordToken,
  VarName: VarNameToken,
  String: StringToken,
  Operator: OperatorToken
};

export default class CodeEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      animationTrig: false
    };
    this.toggleTrigger = this.toggleTrigger.bind(this);
  }
  toggleTrigger() {
    this.setState({ animationTrig: !this.state.animationTrig });
  }
  render() {
    const tokenComponents = this.props.tokens.map(token => {
      // the .json might include a string for formatting, like '{\n'
      if (typeof token === "string") {
        return token;
      } else {
        // or it could be an object specifing a token component
        const { type, defaultValue, locked, expected } = token;
        // this stores the correct component in a temporary variable to be rendered
        const CurrentToken = componentNames[type];
        return (
          <Motion
            defaultStyle={{
              x: 0,
              color: 0
            }}
            style={{
              x: this.state.animationTrig
                ? spring(10, { stiffness: 200, damping: 1 })
                : spring(0, { stiffness: 150, damping: 5 }),
              color: this.state.animationTrig
                ? spring(1, { stiffness: 60, damping: 15 })
                : spring(0, { stiffness: 60, damping: 15 })
            }}
          >
            {mot => {
              return (
                <CurrentToken
                  defaultValue={defaultValue}
                  locked={locked}
                  expected={expected}
                  mot={mot}
                  toggleTrigger={this.toggleTrigger}
                />
              );
            }}
          </Motion>
        );
      }
    });

    return (
      <div className="code-editor-wrapper">
        <div className="nav-links">
          <Link className="link" to="/">
            <p className="nav-button">
              Home
              <br />
              {"<"}
            </p>
          </Link>
          {this.props.next ? (
            <Link className="link" to={`/1/${this.props.next}`}>
              <p className="nav-button">
                Next
                <br />
                {">"}
              </p>
            </Link>
          ) : null}
        </div>
        <div className="editor">
          <div>
            <div className="instructions-code">
              {/* WHERE THE MAGIC HAPPENS */}
              <h1 className="title">{this.props.title}</h1>
              <p className="description">{this.props.description}</p>
              {tokenComponents}
            </div>
            <div className="lesson-json">
              <span style={{ color: "red" }}>
                JSON used to generate this code (each object is a component):
              </span>
              <br />
              {JSON.stringify(this.props.tokens)};<br />
              <span style={{ color: "red" }}>
                Number of components generated:
              </span>
              <br />
              {
                this.props.tokens.filter(token => typeof token !== "string")
                  .length
              }
            </div>
          </div>
          <AnimationLanding />
        </div>
      </div>
    );
  }
}
