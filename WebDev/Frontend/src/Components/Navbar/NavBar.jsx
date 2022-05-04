import store from '../../store';
import jwt from'jsonwebtoken';
import './navBar.scss';
import Logo from '../../Complements/Images/Logo.png';
import Swal from 'sweetalert2'

// eslint-disable-next-line
import $ from 'jquery';
import LoginService from '../../Services/Login'

function logout(){
  var userdata = {
    jwt: localStorage.getItem("token")
  }
  LoginService.Logout(userdata).then(response => {
    if(response.status === 201){
            Swal.fire({
                title: 'Cierre de sesión exitoso',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
            localStorage.clear();
            window.location.replace("https://www.playmusic.com.mx");

        }else if(response.status === 401){
            Swal.fire({
                title: 'Error',
                text: response.data.message,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            localStorage.clear();
            window.location.replace("https://www.playmusic.com.mx");



        }
    }).catch(e => {
        Swal.fire({
            title: 'Error',
            text: 'Verifica tus credenciales',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
        localStorage.clear();
        window.location.replace("https://www.playmusic.com.mx");
    });
}

function NavBar() {
// eslint-disable-next-line
  var type = localStorage.getItem('type');
    if(type=== undefined || type===null){
      return (
        <nav className="navbar navbar-expand-lg" id='Navbar'>
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="" height="50" className="d-inline-block align-top" style={{marginLeft:'1rem'}} />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dfd6c7" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/objectives">Objetivos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/context">Contexto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">Sobre nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/handbook">Manual de juego</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/stats">Estadísticas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/api">Documentación de API</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto flex-grow-1 text-right justify-content-end">
            <li className="navbar-right">
              <a className="nav-link" href="/login">Iniciar sesión</a>
            </li>
            <li className="navbar-right">
              <a className="nav-link" href="/signup">Registrarme</a>
            </li>
            </ul>
          </div>


        </nav>
      );
    }else if(type === 'User'){
      return (
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="" height="50" className="d-inline-block align-top" style={{marginLeft:'1rem'}} />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dfd6c7" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/Home">Descargar juego</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mystats">Mis estadísticas</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto flex-grow-1 text-right justify-content-end">
            <li className="navbar-right">
              <a className="nav-link" href="/Profile">Mi perfil</a>
            </li>
            <li className="navbar-right">
              <button className="nav-link light-text logout" style={{background:'none', textDecoration:'none', border:'none'}} type="button" onClick={logout}>Cerrar sesión</button>
            </li>
            </ul>
          </div>

        </nav>
      );
    }else if(type === 'Admin'){
      return (
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="" height="50" className="d-inline-block align-top" style={{marginLeft:'1rem'}} />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dfd6c7" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/Home">Descargar juego</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mystats">Mis estadísticas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ListUsers">Lista de usuarios</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto flex-grow-1 text-right justify-content-end">
            <li className="navbar-right">
              <a className="nav-link" href="/Profile">Mi perfil</a>
            </li>
            <li className="navbar-right">
              <button className="nav-link" style={{background:'none', textDecoration:'none', border:'none'}} type="button" onClick={logout}>Cerrar sesión</button>
            </li>
            </ul>
          </div>

        </nav>
      );
    }

}

export default NavBar;
