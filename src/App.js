import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './ui/Navigation';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

      <Navigation />
      </Router>
    </div>
  );
}

export default App;
