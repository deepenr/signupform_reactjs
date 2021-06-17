import React, { Component } from "react";

export default class ClassForm extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      password: null
    };
  }
  submit() {
    console.warn(this.state);
  }

  render() {
    return (
      <div className="Form">
        <label className="name"> Name </label>
        <input
          type="text"
          name="user"
          onChange={event => this.setState({ name: event.target.value })}
        />
        <br /> <br />
        <label className="password"> Password </label>
        <input
          type="password"
          name="password"
          onChange={event => this.setState({ password: event.target.value })}
        />
        <br /> <br />
        <button onClick={() => this.submit()}>submit </button>
      </div>
    );
  }
}
