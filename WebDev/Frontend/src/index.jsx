import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';

import store from './store';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import NotFound from './Pages/NotFound/NotFound';

import './Complements/Styles/input.scss';
import './Complements/Styles/card.scss';
import './Complements/Styles/text.scss';
import './Complements/Styles/div.scss';
import './Complements/Styles/body.scss';
import './Complements/Styles/span.scss';
import './Complements/Styles/button.scss';
import './Complements/Styles/img.scss';
import './Complements/Styles/footer.scss';
import './Complements/Styles/gallery.scss';
import './Complements/Styles/Charts.scss';
import * as serviceWorker from './serviceWorker';
import Index from './Pages/Index/Index';
import Objectives from './Pages/Index/Sections/Objectives';
import Context from './Pages/Index/Sections/Context';
import Handbook from './Pages/Index/Sections/Handbook';
import NavBar from './Components/Navbar/NavBar';
import About from './Pages/Index/Sections/About';
import Stats from './Pages/Stats/Stats';
import Profile from './Pages/Users/Profile/Profile';
import MyStats from './Pages/Stats/MyStats';
import UserList from './Pages/Users/List/UserList';
import Download from './Pages/Download/Download';

function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/objectives" component={Objectives} />
          <Route path="/context" component={Context} />
          <Route path="/handbook" component={Handbook} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Download} />
          <Route path="/download" component={Download} />
          <Route path="/stats" component={Stats} />
          <Route path="/profile" component={Profile} />
          <Route path="/mystats" component={MyStats} />
          <Route exact path="/ListUsers" component={UserList} />
          <Route exact path="/User/:userId" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
render(<App />, document.getElementById('root'));
serviceWorker.unregister();
