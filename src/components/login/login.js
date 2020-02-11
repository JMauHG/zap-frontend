import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ZapacademyService from '../../Http/Services/ZapacademyService';
import "./login.css";

class Login extends Component {

  constructor(props) {
    super(props)

    const token = localStorage.getItem("token")
    let loggedIn = true

    if (token !== "mytoken") {
      loggedIn = false
    }

    this.state = {
      username: '',
      password: '',
      loggedIn
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleForm = this.handleForm.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleForm(e) {
    e.preventDefault()
    const { username, password } = this.state

    const payload = {
      'email': username,
      'password': password
    }

    const zapacademyservice = new ZapacademyService();
    zapacademyservice.getUserLogin(payload)
      .then((data) => {
        this.setState({ users: data.user }, function () {
          if (this.state.users.role === 'Admin') {
            localStorage.setItem("token", "mytoken");
            localStorage.setItem("auth", this.state.users.token);
            localStorage.setItem("event", "1")
            this.setState({
              loggedIn: true
            })
          }
        })
      })

  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/home" />
    }
    return (
      <div>
        <center>
          <h1>Login</h1>
          <form onSubmit={this.handleForm}>
            <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange} />
            <br />
            <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <br />
            <input type="submit" />
            <br />
          </form>
        </center>
      </div>
    )
  }

}
export default Login;