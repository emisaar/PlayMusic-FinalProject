import React, { Component } from 'react';
import './Login.scss';
import Logo from '../../Complements/Images/Logo.png';
import Swal from 'sweetalert2'
import LoginService from'../../Services/Login';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Input from '../../Components/Input/Input';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{
        user_name:'',
        password:''
      }
    };
  }
  handleChange = (event) =>{
    let { user } = this.state;
    user[event.target.id] = event.target.value;
    this.setState({ user });
  }
  componentDidMount (){
    document.getElementById('Navbar').remove()
  }

  handleSubmit = () =>{
    let { user } = this.state;
        var userdata = {
          user_name: user.user_name,
            password: user.password,
        }
            LoginService.Login(userdata).then(response => {
                if(response.status === 201){
                    Swal.fire({
                        title: 'Inicio de sesión exitoso',
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    });
                    localStorage.setItem('token', response.data.jwt)
                    localStorage.setItem('user_name', userdata.user_name)
                    localStorage.setItem('type', response.data.user_type)
                    localStorage.setItem('user_id', response.data.user_id)
                    window.location.reload()
                }else if(response.status === 401){
                    Swal.fire({
                        title: 'Error',
                        text: response.data.message,
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    });
                }
            }).catch(e => {
                console.log(e)
                Swal.fire({
                    title: 'Error',
                    text: 'Verifica tus credenciales',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            });
}

  render() {
    const mytoken = localStorage.getItem('token');
    if(mytoken === undefined || mytoken === null){
        //pass
    }else{
        let url = location.href;
        url = url.replace("/login", "");
        url = url+"/Home"
        window.location.assign(url);
    }
    return (
      <div>
        <div className="row d-flex justify-content-center">
          <div className="login-bar">
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="" height="70" className="d-inline-block align-top" />
            </a>
          </div>
          <div className="card login-card text-center">
            <div className="card-header">
              <h2 className="card-title dark-text bold-text">INICIAR SESIÓN</h2>
            </div>
            <div className="card-body">
              <span className="span-space-little" />
              <ValidatorForm
                onError={errors => console.log(errors)}
                onSubmit={this.handleSubmit}>
                <Input label='Nombre de usuario'  name='user_name' onChange={this.handleChange} type='text' value={this.state.user.user_name} required={true} />
                <br />
                <Input label='Contraseña' name='password' type='password' value={this.state.user.password} onChange={this.handleChange} required={true} />
                <br />
                <button type="submit" className="btn btn-primary access-btn">Ingresar</button>
                <br />
                <br />
                <a href="/signup" className="btn signup-red-btn">Crear cuenta</a>
                <br />
                <br />
              </ValidatorForm>
            </div>
          </div>
          <span className="span-space" />
        </div>
      </div>
    );
  }
}

export default Login;
