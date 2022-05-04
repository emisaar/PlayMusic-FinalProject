import { Component } from "react";
import 'react-phone-input-2/lib/material.css'
import UsersService from'../../../Services/Users'
import Input from "../../../Components/Input/Input";

export default class Profile extends Component{

  constructor(props) {
    super(props);
    this.state = {
      user:{
      }
    };
  }


  loadData = () =>{
    let { user } = this.state;
    UsersService.getUser(localStorage.getItem('user_id')).then(response => {
      if(response.status === 200){
        user['name'] = response.data.name;
        user['email'] = response.data.email;
        user['user'] = response.data.user_name;
        user['dob'] = response.data.dob;
        user['country'] = response.data.country;

        this.setState({user})
      }else if(response.status === 401){
      }
      }).catch(e => {

      });
    }

  render(){
    if(this.state.user.name===undefined){
      this.loadData();
    }

    return(
      <div className="row">
        <br />
        <br />
        <div className="col">
          <div className="d-flex justify-content-center" style={{ paddingTop:'1rem' }} >
            <h1>Perfil de  Usuario</h1>
          </div>
          <div className="row">
          <div className="col-1"/>
            <div className="col-10">
              <div className="card radius-card text-center">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                          <br />
                          <div className="row">
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="text" className="form__field" placeholder="Nombre" name="name" id="name" required value={this.state.user.name} onChange={this.handleChange} disabled />
                                <label htmlFor="name" className="form__label">Nombre</label>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="text" className="form__field" placeholder="user" name="user" id="user" required value={this.state.user.user} onChange={this.handleChange} disabled />
                                <label htmlFor="user" className="form__label">Usuario</label>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="email" className="form__field" placeholder="email" name="email" id="email" required value={this.state.user.email} onChange={this.handleChange} disabled />
                                <label htmlFor="email" className="form__label">Correo electrónico</label>
                              </div>
                            </div>
                          </div>
                          <br />
                          <br />
                          <div className="row">
                            <div className="col-6" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="date" className="form__field" placeholder="dob" name="dob" id="dob" required value={this.state.user.dob} onChange={this.handleChange} disabled />
                                <label htmlFor="dob" className="form__label">Fecha de Nacimiento</label>
                              </div>
                            </div>
                            <div className="col-6" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="text" className="form__field" placeholder="country" name="country" id="country" required value={this.state.user.country} onChange={this.handleChange} disabled />
                                <label htmlFor="country" className="form__label">País</label>
                              </div>
                            </div>
                          </div>
                          <br /><br />



                        </div>
                    </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      );
    }
}
