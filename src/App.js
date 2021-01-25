import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home'
import When from './pages/When/When'
import Who from './pages/Who/Who'
import About from './pages/About/About'
import { Navbar, Footer } from './components'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/when" exact component={When}/>
        <Route path="/who" exact component={Who}/>
        <Route path="/about" exact component={About}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
