import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './ui/Navigation';
import Form from './components/Form';
import useFitness from './hooks/useFitness';
import './App.css';

function App() {

  const { submitRequest } = useFitness()

  const onSubmit = values =>{
    console.log("si llego el valor", {values})
    submitRequest(values)
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
