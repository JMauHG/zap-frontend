import React from 'react';
import ZapacademyService from '../../Http/Services/ZapacademyService';
import './stadistics.css'

class Stadistics extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        benefitInfo: {},
        selectedFile: null
    }

    componentDidMount() {
        const CURP = this.props.location.state;
        const event = 1;

        const zapacademyservice = new ZapacademyService();
        zapacademyservice.getBeneficiaryInfo(CURP, event)
            .then((data) => {
                this.setState({ benefitInfo: data });
            })
    }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
    }

    uploadHandler = () => {
        console.log(this.state.selectedFile)

    }


    renderUser(benefitInfo) {
        return (
            <div className="pokemon">
                <div className="Name">
                    <h2>Nombre</h2>
                    <h2>{benefitInfo.nombre}</h2>
                </div>
                <div className="Apellido Paterno">
                    <h2>Apellido Paterno</h2>
                    <h2>{benefitInfo.apellido_paterno}</h2>
                </div>
                <div className="Apellido Materno">
                    <h2>Apellido Materno</h2>
                    <h2>{benefitInfo.apellido_materno}</h2>
                </div>
                <div className="CURP">
                    <h2>CURP</h2>
                    <h2>{benefitInfo.CURP}</h2>
                </div>
                <div className="No. registro">
                    <h2>No. registro</h2>
                    <h2>{benefitInfo.id}</h2>
                </div>
                <div className="Telefono">
                    <h2>Telefono</h2>
                    <h2>{benefitInfo.telefono}</h2>
                </div>
                <div className="Celular">
                    <h2>Celular</h2>
                    <h2>{benefitInfo.celular}</h2>
                </div>
                <div className="Asistencia">
                    <h2>Asistencia</h2>
                    <h2>{benefitInfo.id}</h2>
                </div>
            </div>
        )
    }
    
    render() {

        return (
            <div className="container center">
                <input type="file" onChange={this.fileChangedHandler}></input>
                <button onClick={this.uploadHandler}> Upload </button>
                {this.renderUser(this.state.benefitInfo)}
            </div>
        )
    }
}


export default Stadistics;