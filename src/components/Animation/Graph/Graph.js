import React from "react";

export default class Graph extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    console.log("from graph", this.props);
    return <div style={{ display: "flex", justifyContent: "" }} />;
  }
}
