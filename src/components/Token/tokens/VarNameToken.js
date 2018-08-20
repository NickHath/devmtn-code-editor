import React from "react";
import Token from "../Token";
import { connect } from "react-redux";
import { animationTrigger, updateArrOfVar } from "./../../../ducks/reducer";

class VarNameToken extends Token {
  constructor() {
    super();
    this.state = {
      input: "",
      display: ""
    };
  }

  handleBlur(input, expected, dataType) {
    let correct = this.validateToken.call(this, input, expected, dataType);
    if (correct) {
      this.setState({ wrong: false });
      this.props.updateArrOfVar({ input: this.state.input, dataType });
      this.props.animationTrigger(true);
    } else {
      //infinite loop when using an alert?
      // alert(`Wrong value... we expected: ${expected}`);
      this.props.toggleTrigger();
      setTimeout(() => {
        this.props.toggleTrigger();
      }, 200);
    }
  }

  render() {
    const { locked, defaultValue, expected, mot } = this.props;
    const { input, display } = this.state;
    // const boxStyle = {
    //   width: expected && `${expected.length}em`,
    //   borderColor: "#89BDFF",
    //   transform: "translateX(0px)"
    // };

    return (
      <div
        className="token var-name"
        onClick={() => this.setState({ display: "" })}
      >
        {display ||
          defaultValue || (
            <input
              onFocus={() => this.props.animationTrigger(false)}
              onBlur={() => this.handleBlur(input, expected, "string")}
              onKeyUp={e =>
                e.keyCode === 13
                  ? this.handleBlur(input, expected, "string")
                  : null
              }
              defaultValue={input}
              className="input-box"
              onChange={e => this.setState({ input: e.target.value })}
              style={{
                width: expected && `${expected.length}em`,
                borderColor: "#89BDFF",
                transform: `translateX(${mot.x}px)`
              }}
            />
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { animationTrigger, updateArrOfVar }
)(VarNameToken);
