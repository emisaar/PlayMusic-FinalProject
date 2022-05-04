import { Component } from 'react';

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{

      },
      buisness:{
        type:'',
        sucursals: 1
      },
      sucursals:[{ name:'', street:'', ext:'', int:'', neighborhood:'' ,city:'', state:'', zip:'' , employees:'' }]
    };

  }

  render() {
    const mytoken = localStorage.getItem('token');
    if(mytoken === undefined || mytoken === null){
        window.location.replace("https://www.playmusic.com.mx");
    }
    return (
      <div>
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div style={{ height: '100%', width: '100%', padding: '2rem' }}>
              <div className="row">
                <div className="col-6" style={{ height:'55rem', msOverflowY:'scroll' }}>
                  <br />
                  <a class="download-handbook" href='/PlayMusic_Windows.zip' download>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                      <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                    </svg>
                    Descargar para Windows
                  </a>
                </div>
                <div className="col-6">
                  <br />
                  <a class="download-handbook" href='/PlayMusic_MacOS.zip' download>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                      <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                    </svg>
                    Descargar para Mac
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
