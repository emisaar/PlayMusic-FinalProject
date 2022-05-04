import { Component, Fragment } from 'react';
import inter from '../../../Complements/Images/level2.jpeg'
import easy from '../../../Complements/Images/level1.jpeg'
import hard from '../../../Complements/Images/level3.jpeg'

export default class Handbook extends Component{
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
            <h1 className='dark-text'>¿Cómo jugar?</h1>
            <br/>
          </div>
        </div>
        <div class="row text-div">
          <div class="col-4">
            <img src={easy} alt="" className='info-img' />
          </div>
          <div class="col-8">
            <br />
            <br />
            <br />
            <p className='dark-text'>Dificultad: Fácil <br/>
              En esta modalidad se despliega una sola nota posible, la cual es tocada con la barra espaciadora (spacebar). Se espera que el usuario presione la barra espaciadora en el momento indicado, es decir, cuando la nota pase encima del indicador estático.
              Como se puede apreciar, hay 3 vidas disponibles, las cuales se pierden cada que el usuario cometa un error. Si se consigue una racha, el puntaje aumentará exponencialmente (este punto aplica para las 3 dificultades).
            </p>
          </div>
        </div>
        <br />
        <div class="row text-div">
          <div class="col-8">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Dificultad: Intermedia <br/>
              Esta segunda opción del videojuego contempla 4 notas musicales, las cuales son tocadas por las flechas de tu ordenador y, de manera similar al nivel fácil, el jugador debe presionar las teclas en el momento indicado. Sin embargo, se agregan obstáculos, los cuales si los presionas te restan vidas.
              Debido a que es una dificultad mayor, se otorgan más vidas al jugador.
            </p>
          </div>
          <div class="col-4">
            <img src={inter} alt="" className='info-img' />
          </div>
        </div>
        <br />
        <div class="row text-div">
          <div class="col-4">
            <img src={hard} alt="" className='info-img' />
          </div>
          <div class="col-8">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Dificultad: Difícil <br />
              La tercera dificultad representa el último nivel del videojuego, y por lo mismo, es el más complejo. En este nivel nuevamente tenemos la participación de 4 notas diferentes (flechas de tu teclado) y los obstáculos, sin embargo, este nivel implica mayor velocidad de reacción e incluso, se espera que el usuario pueda presionar 2 teclas simultáneamente en diversas ocasiones.
              Siendo la dificultad más compleja, se añaden más vidas al jugador.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div class="row text-div">
          <a class="download-handbook" href='/PlayMusic.pdf' download>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
              <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
            </svg>
            Descargar Manual en PDF
          </a>
        </div>
        <br />
        <br />
      </Fragment>
    );
  }
}
