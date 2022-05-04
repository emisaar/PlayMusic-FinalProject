import React, { Component, Fragment } from 'react';
import  disk  from '../../../Complements/Images/disk.jpg'

export default class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Fragment>
      <div class="row text-center">
          <div class="col-12">
            <br />
            <h1 className='dark-text'>Sobre el proyecto</h1>
            <br/>
          </div>
      </div>
      <div class="row text-div">
        <div class="col-8">
          <br />
          <br />
          <br />
          <br />
          <p className='dark-text'>Play Music es un videojuego musical interactivo, enfocado en percusiones. En él, acompañarás a Tobby en su travesía para liberar a Melody City de la malvada SILENT Corporation, superando diferentes obstáculos musicales, ganando puntos y aprendiendo nuevas cosas en el camino…
¿Qué estás esperando?  ¡Ven a jugar!
</p>
        </div>
        <div class="col-4">
          <img src={disk} alt="" className='info-img' />
        </div>
      </div>
      <br />
      </Fragment>
    );
  }
}
