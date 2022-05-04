import UsersService from'../../Services/Users';
import ScoresService from'../../Services/Scores';
import { Component, Fragment } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart } from "react-google-charts";



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);



export default class Stats extends Component{
  constructor(props) {
    super(props);
    this.state = {
        user:{
          Hs1: 0,
          Hs2: 0,
          Hs3: 0,
          score:1,
          maxtime: 0,
          time: 0,
          countries: {}
        },
        attempts:{
          variable:0,
          attlist:[],
          score:[],
          labels:[],
          win1:0,
          win2:0,
          win3:0,
          lose1:0,
          lose2:0,
          lose3:0,
        },
    };
  }

  getStats(){
    ScoresService.getGlobalScores().then(response => {
      if(response.status === 200){
        let { user } = this.state;
        user['score'] = 0;
        var Hs1 = 0;
        var Hs2 = 0;
        var Hs3 = 0;
        for (let i = 0; i < response['data'].length; i++) {
          if( Hs1 < response['data'][i]['Hs1']){
            Hs1 = response['data'][i]['Hs1'];
          }
          if( Hs2 < response['data'][i]['Hs2']){
            Hs1 = response['data'][i]['Hs2'];
          }
          if( Hs3 < response['data'][i]['Hs3']){
            Hs3 = response['data'][i]['Hs3'];
          }
        }
        user['Hs1'] = Hs1;
        user['Hs2'] = Hs2;
        user['Hs3'] = Hs3;
        this.setState({user})
      }else if(response.status === 401){
      }
      }).catch(e => {

      });
      ScoresService.getAttempts().then(response => {
        let { attempts } = this.state;
        if(response.status === 200){
          var attlist = [];
          var score = [];
          var labels = [];
          for (let index = 0; index < response['data'].length; index++) {
            attlist.push(response['data'][index]);
            labels.push(index);
            score.push(response['data'][index]['score']);
            if(response['data'][index]['level_id'] === 7 &&  response['data'][index]['status'] === true){
              attempts.win1 = attempts.win1 +1;
            }
            if(response['data'][index]['level_id'] === 8 &&  response['data'][index]['status'] === true){
              attempts.win1 = attempts.win2 +1;
            }
            if(response['data'][index]['level_id'] === 9 &&  response['data'][index]['status'] === true){
              attempts.win1 = attempts.win3 +1;
            }
            if(response['data'][index]['level_id'] === 7 &&  response['data'][index]['status'] === false){
              attempts.lose1 = attempts.lose1 +1;
            }
            if(response['data'][index]['level_id'] === 8 &&  response['data'][index]['status'] === false){
              attempts.lose2 = attempts.lose2 +1;
            }
            if(response['data'][index]['level_id'] === 9 &&  response['data'][index]['status'] === false){
              attempts.lose3 = attempts.lose3 +1;
            }
          }
          attempts['attlist'] = attlist;
          attempts['labels'] = labels;
          attempts['score'] = score;
          this.setState({attempts})
        }else if(response.status === 401){
        }
      }).catch(e => {
        console.log(e)

      });
      ScoresService.getSessionTime().then(response => {
        let { user } = this.state;
        if(response.status === 200){
          var time = 0;
          var count = 0;
          var maxtime = 0;
          for (let index = 0; index < response['data'].length; index++) {
            time = response['data'][index]['time'] + time;
            count = count+1;
            if( maxtime < response['data'][index]['time'] ){
              maxtime = response['data'][index]['time'];
            }
          }
          user['maxtime'] = Math.floor(maxtime/60);
          user['time'] = Math.floor((time / count)/60 ) ;
          this.setState({user})
        }else if(response.status === 401){
        }
      }).catch(e => {
        console.log(e)

      });
      var countries = [];
      UsersService.getUsers().then(response => {
        let { user } = this.state;
        if(response.status === 200){
          for (let index = 0; index < response['data'].length; index++) {
            countries.push(response['data'][index]['country'].normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
          }
          const counts = {};

          for (const num of countries) {
            counts[num] = counts[num] ? counts[num] + 1 : 1;
          }
          user.countries = counts;

          this.setState({user})

        }else if(response.status === 401){
        }
        }).catch(e => {

        });

    }

  componentDidMount(){
  }

  render() {
    if(this.state.user.score===1){
      this.getStats();
    }
    const labels = this.state.attempts.labels;
    const data = {
      labels,
      datasets: [{
        label: 'Puntuaje',
        data: this.state.attempts.score,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Victorias Vs. Derrotas por nivel',
        },
      },
      type:'bar',
      interaction: {
        intersect: false,
      },
      scales: {
        xAxes: {
          stacked: true,
        },
        yAxes: {
          stacked: true,
        },
      },
    };

    const dataBars = {
      labels: ["Nivel 1", "Nivel 2", "Nivel 3"],
      datasets: [
        {
          label: 'Perdidas',
          data: [this.state.attempts.lose1, this.state.attempts.lose2, this.state.attempts.lose3],
          backgroundColor: 'rgb(255, 99, 132)',
          stack: 'Stack 0',
        },
        {
          label: 'Ganadas',
          data: [this.state.attempts.win1, this.state.attempts.win2, this.state.attempts.win3],
          backgroundColor: 'rgb(75, 192, 192)',
          stack: 'Stack 1',
        },
      ],
    };

    const piedata = {
      labels: Object.entries(this.state.user.countries).map(([k,v]) => k),
      datasets: [
        {
          label: 'Países',
          data: Object.entries(this.state.user.countries).map(([k,v]) => v),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    const pieOpts = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Países registrados',
        },
      },
    };
    const scoreOpts = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Historíco de scores',
        },
      },
    }
    return (
      <Fragment>
        <div class="row text-center">
          <div class="col-12">
            <br/>
            <h1 className='dark-text'>Nuestras Estadísticas</h1>
          </div>
        </div>
        <br />
        <div class="row text-div">
          <div class="col-4">
            <h2 className='dark-text'>Top score nivel 1: {this.state.user.Hs1}</h2>
          </div>
          <div class="col-4">
            <h2 className='dark-text'>Top score nivel 2: {this.state.user.Hs2}</h2>
          </div>
          <div class="col-4">
            <h2 className='dark-text'>Top score nivel 3: {this.state.user.Hs3}</h2>
          </div>
        </div>
        <br /><br />
        <div class="row text-div">
          <div class="col-6">
            <h2 className='dark-text'>Tiempo máximo de sesión: {this.state.user.maxtime} minutos</h2>
          </div>
          <div class="col-6">
            <h2 className='dark-text'>Tiempo promedio de sesión: {this.state.user.time} minutos</h2>
          </div>
        </div>
        <br /><br />
        <div class="row text-div">
          <div class="col-6">
            <Line data={data} options={scoreOpts} />

          </div>
          <div class="col-6">
            <Bar options={options} data={dataBars} />
          </div>
        </div>
        <div class="row text-div">
          <div class="col-4" />
          <div class="col-4">
            <Pie data={piedata} options={pieOpts} />
          </div>
        </div>
        {/*
        <div class="row text-div">
          <div class="col-2" />
          <div class="col-8">
            <h1>Top jugadores</h1>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Usuario</th>
                  <th scope="col">Putuación</th>
                  <th scope="col">Minutos en sesión</th>
                  <th scope="col">País</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.topPlayers.map((val, idx)=> {
                    return (
                      <tr >
                        <td> {this.state.topPlayers[idx].user_name}</td>
                        <td> {this.state.topPlayers[idx].score}</td>
                        <td> {this.state.topPlayers[idx].sessiontime}</td>
                        <td> {this.state.topPlayers[idx].country}</td>
                      </tr>
                    )
                })
                }
              </tbody>
            </table>
          </div>
        </div>
              */}

        <br />
      </Fragment>
    );
  }
}
