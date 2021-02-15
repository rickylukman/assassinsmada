import React from 'react';
import './App.css'
import GlobalStyle from './globalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage'
import When from './pages/When'
import Who from './pages/Who'
import About from './pages/About'
import { Navbar, Footer } from './components'
import BasicLayout from './layout/Basic'



function App() {

  return (
    <BasicLayout>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/when" component={When} />
          <Route path="/who" component={Who} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </BasicLayout>

  );
}

export default App;
