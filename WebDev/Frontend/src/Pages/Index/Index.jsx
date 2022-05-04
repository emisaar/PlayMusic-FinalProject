import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Main from './Sections/Main';

export default class Index extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <body>
        <div class="row text-center">
            <div class="col-12" id="img-container">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1 className='welcome-text'>Play music</h1>
                    <h2 className='light-text secondary-welcome'>Aprende mientras juegas. </h2>

            </div>
        </div>
        <div>
        <br />
        <Main />
        </div>
      </body>
    );
  }
}
