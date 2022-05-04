import ScoresService from'../../Services/Scores';
import { Component, Fragment } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default class MyStats extends Component{
  constructor(props) {
    super(props);
    this.state = {
        user:{
          Hs1: 0,
          Hs2: 0,
          Hs3: 0,
          score:1,
          maxtime: 0,
          time: 0
        },
        attempts:{
          variable:0,
          attlist:[],
          score:[],
          labels:[]
        }
    };
  }

  getStats(){
    ScoresService.getScores(localStorage.getItem("user_id")).then(response => {
      if(response.status === 200){
        let { user } = this.state;
        user['score'] = 0;
        user['Hs1'] = response['data']['Hs1'];
        user['Hs2'] = response['data']['Hs2'];
        user['Hs3'] = response['data']['Hs3'];
        this.setState({user})
      }else if(response.status === 401){
      }
      }).catch(e => {

      });
      ScoresService.getAttempts().then(response => {
        let { attempts } = this.state;
        if(response.status === 200){
          var attlist = [];
          var userId = parseInt(localStorage.getItem("user_id"));
          var score = [];
          var labels = [];
          for (let index = 0; index < response['data'].length; index++) {
            if(response['data'][index]['user_id'] === userId ){
              attlist.push(response['data'][index]);
              labels.push(index);
              score.push(response['data'][index]['score']);
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
            var userId = parseInt(localStorage.getItem("user_id"));
            var time = 0;
            var count = 0;
            var maxtime = 0;
            for (let index = 0; index < response['data'].length; index++) {
              if(response['data'][index]['user_id'] === userId ){
                time = response['data'][index]['time'] + time;
                count = count+1;
              }

              if( response['data'][index]['user_id'] === userId && maxtime < response['data'][index]['time'] ){
                maxtime = response['data'][index]['time'];
              }
            }
            user['maxtime'] = Math.floor(maxtime);
            user['time'] = Math.floor(time / count ) ;
            this.setState({user})
          }else if(response.status === 401){
          }
          }).catch(e => {
            console.log(e)

          });
      }

  render() {
    const mytoken = localStorage.getItem('token');
    if(mytoken === undefined || mytoken === null){
        window.location.replace("https://www.playmusic.com.mx");
    }
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
    return (
      <Fragment>
        <div class="row text-center">
          <div class="col-12">
            <br/>
            <h1 className='dark-text'>Mis Estadísticas</h1>
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
            <h2 className='dark-text'>Tiempo máximo de sesión: {this.state.user.maxtime} segundos</h2>
          </div>
          <div class="col-6">
            <h2 className='dark-text'>Tiempo promedio de sesión: {this.state.user.time} segundos</h2>
          </div>
        </div>
        <br /> <br />
        <div class="row text-div">
          <div class="col-12">
            <Line data={data} />

          </div>
        </div>

        <br />
      </Fragment>
    );
  }
}
