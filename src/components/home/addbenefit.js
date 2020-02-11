import React, { Component } from "react";
import ZapacademyService from '../../Http/Services/ZapacademyService';
import Validations from '../../actions/validations';
import "./addbenefit.css";

class Addbenefit extends Component {

  constructor(props) {
    super(props)
    this.zapacademyservice = new ZapacademyService();
    this.validation = new Validations();
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      curp: '',
      curpError: '',
      name: '',
      father_surname: '',
      mother_surname: '',
      gender: '',
      street: '',
      int_number: '',
      ext_number: '',
      postal_code: '',
      colonia: '',
      municipio: '',
      state: '',
      phone: '',
      phoneError: '',
      cellphone: '',
      cellphoneError: ''
    }
  }

  handleChange(e) {
    if (e.target.name === 'curp') {
      var curpValidate = this.validation.validateCURP(e.target.value)
      if (curpValidate) {
        this.setState({ curpError: 'CURP valido' })
      }
      else {
        this.setState({ curpError: 'CURP invalido' })
      }
    }


    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  goBack() {
    this.props.history.push('/home')
  }

  submit() {
    const { curp, name, father_surname, mother_surname, gender, street, int_number, ext_number,
      postal_code, colonia, municipio, state, phone, cellphone } = this.state
  }

  render() {
    return (
      <div>
        <center>
          <h1>Añadir usuario</h1>
          <br />
          <input type="text" placeholder="curp" name="curp" value={this.state.curp} onChange={this.handleChange} />
          <h1>{this.state.curpError}</h1>
          <br />
          <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
          <h1>{}</h1>
          <br />
          <input type="text" placeholder="father_surname" name="father_surname" value={this.state.father_surname} onChange={this.handleChange} />
          <h1>{}</h1>
          <br />
          <input type="text" placeholder="mother_surname" name="mother_surname" value={this.state.mother_surname} onChange={this.handleChange} />
          <h1>{}</h1>
          <br />
          <input type="text" placeholder="gender" name="gender" value={this.state.gender} onChange={this.handleChange} />
          <h1>{}</h1>
          <br />
          <input type="text" placeholder="street" name="street" value={this.state.street} onChange={this.handleChange} />
          <h1>{}</h1>
          <br />
          <input type="text" placeholder="int_number" name="int_number" value={this.state.int_number} onChange={this.handleChange} />
          <h1>{}</h1>
          <br />
          <input type="text" placeholder="ext_number" name="ext_number" value={this.state.ext_number} onChange={this.handleChange} />
          <h1>{}</h1>
          <br />
          <input type="text" placeholder="postal_code" name="postal_code" value={this.state.postal_code} onChange={this.handleChange} />
          <h1>{}</h1>
          <br />
          <input type="text" placeholder="colonia" name="colonia" value={this.state.colonia} onChange={this.handleChange} />
          <h1>{}</h1>
          <br />
          <input type="text" placeholder="municipio" name="municipio" value={this.state.municipio} onChange={this.handleChange} />
          <h1>{}</h1>
          <br />
          <input type="text" placeholder="state" name="state" value={this.state.state} onChange={this.handleChange} />
          <h1>{}</h1>
          <br />
          <input type="text" placeholder="phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
          <h1>{}</h1>
          <br />
          <input type="text" placeholder="cellphone" name="cellphone" value={this.state.cellphone} onChange={this.handleChange} />
          <h1>{}</h1>
          <br />
          <button type="button" onClick={this.submit.bind(this)}>submit</button>
          <button type="button" onClick={this.goBack.bind(this)}>Regresar</button>
        </center>
      </div>
    )
  }

}
export default Addbenefit;


/*
submit() {
    const { curp, name, father_surname, mother_surname, gender, street, int_number, ext_number,
      postal_code, colonia, municipio, state, phone, cellphone } = this.state

    const payload = {
      "curp": curp,
      "nombre": name,
      "apellido_paterno": father_surname,
      "apellido_materno": mother_surname,
      "sexo": gender,
      "calle": street,
      "numero_int": int_number,
      "numero_ext": ext_number,
      "cp": postal_code,
      "colonia": colonia,
      "municipio": municipio,
      "estado": state,
      "telefono": phone,
      "celular": cellphone
    }

    let newBeneficiary = this.zapacademyservice.addBeneficiary(payload);
    newBeneficiary
      .then((data) => {
        console.log(data);
      })
  }
*/