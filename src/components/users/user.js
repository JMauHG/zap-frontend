import React from 'react';
import ZapacademyService from '../../Http/Services/ZapacademyService';
import './user.css'

class User extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        userInfo: {},
        selectedFile: null
    }

    componentDidMount() {
        const id = this.props.location.state;

        const zapacademyservice = new ZapacademyService();
        zapacademyservice.getUserInfo(id)
            .then((data) => {
                this.setState({ userInfo: data });
                console.log(this.state.userInfo)
            })
    }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
    }

    uploadHandler = () => {
        console.log(this.state.selectedFile)

    }


    renderUser(userInfo) {
        return (
            <div className="pokemon">
                <div className="Name">
                    <h2>Nombre</h2>
                    <h2>{userInfo.name}</h2>
                </div>
                <div className="Apellidos">
                    <h2>Apellidos</h2>
                    <h2>{userInfo.lastname}</h2>
                </div>
                <div className="CURP">
                    <h2>Email</h2>
                    <h2>{userInfo.email}</h2>
                </div>
                <div className="No. registro">
                    <h2>Role</h2>
                    <h2>{userInfo.role}</h2>
                </div>
            </div>
        )
    }
    
    render() {
        return (
            <div className="container center">
                <input type="file" onChange={this.fileChangedHandler}></input>
                <button onClick={this.uploadHandler}> Upload </button>
                {this.renderUser(this.state.userInfo)}
            </div>
        )
    }
}


export default User;