import { Component, Fragment } from 'react';
import partitures from '../../../Complements/Images/context1.jpeg'
import happy from '../../../Complements/Images/context2.jpeg'
import tobby from '../../../Complements/Images/Tobby.png'

export default class Context extends Component{
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
            <h1 className='dark-text'>Contexto del juego</h1>
            <br/>
          </div>
        </div>
        <div class="row text-div">
          <div class="col-6">
            <img src={happy} alt="" className='info-img tobby' />
          </div>
          <div class="col-6">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Melody City solía ser una ciudad llena de vida y música, poblada por sus ciudadanos apasionados por las percusiones que rodeaban cada rincón de la ciudad. </p>
          </div>
        </div>
        <br />
        <div class="row text-div">
          <div class="col-6">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Un día, sin previo aviso, la ciudad fue invadida por SILENT Corporation, una dictadura militar, dirigida por el malvado Führer Mute, el cual, su principal objetivo era erradicar toda melodía y música de la ciudad mediante la Guerra Silenciosa.</p>
          </div>
          <div class="col-6">
            <img src={partitures} alt="" className='info-img' />
          </div>
        </div>
        <br />
        <div class="row text-div">
          <div class="col-6">
            <img src={tobby} alt="" className='info-img tobby' />
          </div>
          <div class="col-6">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Ante su llegada, la ciudad se fue apagando lentamente y los instrumentos fueron sancionados y limitados para evitar su presencia en el condado.
Por cuestiones del destino, Tobby, un niño curioso de una ciudad vecina arribó a Melody City con la intención de interactuar con los nativos, sin saber que habían sido sometidos por la malvada corporación.</p>
<br />
<p>Tras dialogar con algunos miembros de la resistencia de la ciudad, acordaron una estrategia para derrocar al malvado Führer. ¡Acompaña a nuestro protagonista en su lucha contra SILENT Corporation y aprende en el proceso!</p>
          </div>
        </div>
        <br />
        <br />
        <br />

      </Fragment>
    );
  }
}
