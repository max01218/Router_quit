import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router,Route} from 'react-router-dom'
import BasicTextFields from './Login';
import App from './App';

ReactDOM.render(
  <Router>
    <div>
      <Route  exact path="/" component={BasicTextFields}/>
      <Route  path="/about" >
      <App/>
      </Route>
    </div>
  </Router>,
  document.getElementById('root'));
  reportWebVitals();