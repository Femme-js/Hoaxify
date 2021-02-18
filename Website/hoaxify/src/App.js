import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import Home from './components/pages/home';
import About from './components/pages/about'
import Copyright from './components/cprt';
import Contributors from './components/pages/contributors';
import Classfier from './components/pages/classifier';
import More from './components/pages/more';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/classifier" exact component={() => <Classfier />} />
          <Route path="/contributors" exact component={() => <Contributors />} />
          <Route path="/more" exact component={() => <More />} />
        </Switch>
        <Copyright />
      </Router>
    </div>
  );
}

export default App;
