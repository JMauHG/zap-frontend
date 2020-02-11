import React from 'react';
import './events.css';
import ZapacademyService from '../../Http/Services/ZapacademyService';

class Events extends React.Component {

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
    zapacademyservice.getBeneficiarytList(event)
    .then((data) => {
      this.setState({users : data})
      console.log(this.state.users)
    })
  }

  renderUser(user) {
    const { search } = this.state;
    const serachCURP = user.CURP.toLowerCase().indexOf(search.toLowerCase()) === -1
    const serachName = user.nombre.toLowerCase().indexOf(search.toLowerCase()) === -1
    const searchPaterno = user.apellido_paterno.toLowerCase().indexOf(search.toLowerCase()) === -1
    const searchMaterno = user.apellido_materno.toLowerCase().indexOf(search.toLowerCase()) === -1
    if (search !== "" && serachCURP && serachName && searchPaterno && searchMaterno) {
      return null
    }

    return (
      <tr key={user.id}>
        <td >{user.id}</td>
        <td onClick={this.handleClick.bind(this, user.CURP)}>{user.CURP}</td>
        <td >{user.nombre}</td>
        <td >{user.apellido_paterno}</td>
        <td >{user.apellido_materno}</td>
        <td >{user.apellido_materno}</td>
      </tr>
    )
  }

  clickedUser(curp) {
    this.props.history.push('/events/stadistics', curp)
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
              <th>No. registro</th>
                <th>CURP</th>
                <th>Nombre</th>
                <th>Apellido paterno</th>
                <th>Apellido materno</th>
                <th>Asistencia</th>
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
export default Events