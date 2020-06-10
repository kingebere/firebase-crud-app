import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Appy from "./src/Appy";
import './index.css';
import Edit from './src/Components/Edit';
import Create from './src/Components/Create';
import Show from './src/Components/Show';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        <Route exact path='/' component={Appy} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
      </div>
  </Router>,
      </header>
    </div>
  );
}

export default App;
