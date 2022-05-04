import { Component, Fragment } from 'react';
import Emi from '../../../Complements/Images/emi.jpeg'
import Poncho from '../../../Complements/Images/poncho.jpeg'
import Alex from '../../../Complements/Images/alex.jpeg'
import Gael from '../../../Complements/Images/gael.jpeg'
import Logo from '../../../Complements/Images/Logo_circle.png'
import ReactTooltip from 'react-tooltip';
import { Popup } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


export default class About extends Component{
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
            <h1 className='dark-text'>¿Quienes somos?</h1>
            <br/>
            <img src={Logo} alt="" className='about-logo' />
          </div>
        </div>
        <br />
        <br />
        <div class="row">
          <div className="col-12">
            <div className="gallery">
              <div class="gallery__column">
              <a class="gallery__link">
                  <figure class="gallery__thumb">
                    <Popup
                      trigger={<img src={Emi} class="gallery__image"  />}
                      position="top center"
                    >
                      Estudiante de 4to semestre en Ingeniería en Tecnologías Computacionales. <br /> Interés por la programación, web development y data analytics. <br />Mis hobbies son jugar videojuegos, aprender idiomas, gastronomía, <br />viajar, escuchar música  y practicar yoga.
                    </Popup>

                    <figcaption class="gallery__caption">Emiliano Saucedo Arriola</figcaption>
                  </figure>
                </a>
              </div>
              <div class="gallery__column">
                <a class="gallery__link">
                  <figure class="gallery__thumb">
                    <Popup
                      trigger={<img src={Gael} class="gallery__image" />}
                      position="top center"
                    >
                      Me llamo Gael Eduardo Pérez Gómez y soy estudiante de la carrera ITC <br /> en el Tecnológico de Monterrey. Soy desarrollador Fullstack con 3 años  <br /> de experiencia y técnico en programación del IPN. En mis tiempos libres  <br />me gusta mucho aprender sobre nuevas tecnologías, salir con mis amigos o ir a  <br /> fiestas, amo la música y sé tocar el bajo y la guitarra.
                    </Popup>
                    <figcaption class="gallery__caption">Gael Eduardo Pérez Gómez</figcaption>
                  </figure>
                </a>
              </div>
              <div class="gallery__column">
                <a class="gallery__link">
                  <figure class="gallery__thumb">
                    <Popup
                      trigger={<img src={Alex} class="gallery__image" />}
                      position="top center"
                    >
                      Mi nombre es Alejandro Díaz Villagómez, tengo 19 años y actualmente vivo en la <br /> Ciudad de México. Estoy cursando mi 4to semestre en la carrera de <br /> Ingeniería en Tecnologías Computacionales (ITC) en el Tecnológico de Monterrey <br /> Campus Ciudad de México. Me encanta el fútbol, la tecnología y pasar <br /> tiempo con familiares y amigos.
                    </Popup>
                    <figcaption class="gallery__caption">Alejandro Díaz Villagómez</figcaption>
                  </figure>
                </a>
              </div>
              <div class="gallery__column">
                <a class="gallery__link">
                  <figure class="gallery__thumb">
                    <Popup
                      trigger={<img src={Poncho} class="gallery__image" />}
                      position="top center"
                    >
                      Mi nombre es Alfonso Pineda, tengo 19 años y estudio desarrollo de software. <br />  Me gusta invertir mi tiempo libre en la fotografía y video; además <br />  de ver deportes de automovilismo, la Fórmula 1 es mi favorito. <br />  Me considero una persona comprometida, honesta y dedicada.
                    </Popup>
                    <figcaption class="gallery__caption">Alfonso Pineda</figcaption>
                  </figure>
                </a>
              </div>

            </div>
          </div>
        </div>
        <br />
      </Fragment>
    );
  }
}
