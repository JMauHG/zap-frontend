import React from 'react';
import { Redirect, Link, withRouter } from "react-router-dom";
import Logout from '../components/logout'

class Home extends React.Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem("token")
    let loggedIn = true

    if (token !== "mytoken") {
      loggedIn = false
    }

    this.state = {
      loggedIn
    }
  }

  logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("login");
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.logout} >Logout</button>
      </div>
    )
  }
}
export default Home