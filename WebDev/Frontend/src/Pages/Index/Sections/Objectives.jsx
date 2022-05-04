import { Component, Fragment } from 'react';
import partitures from '../../../Complements/Images/partitures.jpg'
import disk from '../../../Complements/Images/disk.jpeg'
import disk2 from '../../../Complements/Images/disk.jpg'

export default class Objectives extends Component{
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
            <br/>
            <h1 className='dark-text'>Objetivos del juego</h1>
            <br/>
          </div>
        </div>
        <div class="row text-div">
          <div class="col-4">
            <img src={partitures} alt="" className='info-img' />
          </div>
          <div class="col-8">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>La travesía de salvar al pueblo de Melody City de la malvada SILENT Corporation no es una tarea sencilla, sin embargo, este viaje está lleno de momentos de aprendizaje y diversión. En Play Music buscamos que…</p>
          </div>
        </div>
        <br />
        <div class="row text-div">
          <div class="col-4">
            <br />
            <br />
            <br />
            <br />
            <h1>Aproveches al máximo el uso de las tecnologías.</h1>
          </div>
          <div class="col-4">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Hoy en día, la tecnología está inmersa en todas las actividades que realizamos, por ello, es importante hacer buen uso de la misma y aprovechar los beneficios que nos brinda.</p>
          </div>
          <div class="col-4">
            <img src={disk} alt="" className='info-img' />
          </div>
        </div>
        <br />
        <div class="row text-div">
          <div class="col-4">
            <img src={disk2} alt="" className='info-img' />
          </div>
          <div class="col-4">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'> El jugar los diferentes niveles que Play Music tiene te permitirán adquirir mayor agilidad con el teclado y, además, podrás identificar las aportaciones de diferentes instrumentos de percusión en obras musicales. ¡La práctica hace al maestro!</p>
          </div>
          <div class="col-4">
            <br />
            <br />
            <br />
            <br />
            <h1>Mejores tu velocidad y tiempos rítmicos.</h1>
          </div>
        </div>
        <br />
      </Fragment>
    );
  }
}
