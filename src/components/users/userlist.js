import React from 'react';
import './userlist.css';
import ZapacademyService from '../../Http/Services/ZapacademyService';

class Userlist extends React.Component {

  constructor(props) {
    super(props);

  }
  state = {
    users: [],
    search: "",
    click: ""
  }

  componentDidMount() {
    let event = 1
    const zapacademyservice = new ZapacademyService();
    zapacademyservice.getUserList(event)
      .then((data) => {
        this.setState({ users: data })
      })
  }

  renderUser(user) {
    const { search } = this.state;
    const serachName = user.name.toLowerCase().indexOf(search.toLowerCase()) === -1
    const searchEmail = user.email.toLowerCase().indexOf(search.toLowerCase()) === -1
    if (search !== "" && serachName & searchEmail) {
      return null
    }

    return (
      <tr key={user.id}>
        <td >{user.id}</td>
        <td onClick={this.handleClick.bind(this, user.id)}>{user.name}</td>
        <td >{user.email}</td>
      </tr>
    )
  }

  clickedUser(id) {
    this.props.history.push('/users/user', id)
  }

  handleClick = e => {
    this.clickedUser(e)

  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div className="container center">
        <div className="col">
          <input type="text" placeholder="searchuser" name="searchuser" onChange={this.handleChange} />
        </div>
        <div className="col">
          <table>
            <tbody >
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
              </tr>
              {
                this.state.users.map(user => {
                  return this.renderUser(user)
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default Userlist;