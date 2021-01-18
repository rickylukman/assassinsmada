import React from 'react';
import TentangKita from './components/Content';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path='/' component={TentangKita}></Route>
    </Router>
  );
}

export default App;
