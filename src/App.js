import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './ui/Navigation';
import Form from './components/Form';

import './App.css';

function App() {

  const onSubmit = value =>{
    console.log("si llego el valor", {value})
    submitRequest(value)
  }
  return (
    <div className="App">
      <Router>

      <Navigation />


      <Form submitInputs={onSubmit} />
      </Router>
    </div>
  );
}

export default App;
