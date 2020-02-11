import React from 'react';
import { Redirect } from "react-router-dom";
import logo from "../../images/zap_academy.png"
import './navbar.css';


class NavigationBar extends React.Component {
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

  /*logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("login");
  }
  <button onClick={this.logout} >Logout</button>
  
  */

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />
    }
    return (
      <div className="container center">
        <nav className="menu">
          <h1 style={{
            backgroundImage : 'url(' + logo +')'
          }} className="menu__logo">Epic Co.</h1>
          <div className="menu__right">
            <ul className="menu__list">
              <li className="menu__list-item"><a className="menu__link" href="/home">Home</a></li>
              <li className="menu__list-item"><a className="menu__link" href="/users">Users</a></li>
              <li className="menu__list-item"><a className="menu__link" href="/events">Events</a></li>
              <li className="menu__list-item"><a className="menu__link" href="/logout">Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavigationBar;