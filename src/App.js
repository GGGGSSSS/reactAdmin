import React, { Component } from "react";
// import {Button} from 'antd';
import "./App.less";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
    console.log(this);
  }

  render() {
    console.log(this);
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

console.dir(
  <Form.Item>
    <Form.Item name="remember" valuePropName="checked" noStyle="1">
      <Checkbox>Remember me</Checkbox>   
    </Form.Item>
    <a className="login-form-forgot" href="">
      Forgot password
    </a>
  </Form.Item>
);

export default App;
