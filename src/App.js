import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './ui/Navigation';
import Form from './components/Form';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

      <Navigation />

      <Form />

      </Router>
    </div>
  );
}

export default App;
