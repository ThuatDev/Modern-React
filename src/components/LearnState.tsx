import React, { Component } from "react";

interface State {
  website: string;
}

export default class LearnState extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { website: "web react class component" };
    this.handleUpdate = this.handleUpdate.bind(this); // Binding the method to the class instance
  }

  handleUpdate() {
    // No need to pass props, as it's not being used
    // If you want to update the state, you should provide an updated state
    this.setState({ website: "Updated website" });
  }

  render() {
    return (
      <div>
        Học React {this.state.website}
        <br />
        <button onClick={this.handleUpdate} className="bg-blue-500 text-white">
          BUTTON
        </button>
      </div>
    );
  }
}
