import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './ui/Navigation';
import Form from './components/Form';
import useFitness from './hooks/useFitness';
import UserList from './components/UserList';
import './App.css';
import Macros from './components/Macros';
import Exercise from './pages/Exercises';

function App() {

  const { submitRequest, items, macros } = useFitness()

  const onSubmit = values =>{
    submitRequest(values)
  }
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Form submitInputs={onSubmit} />
        <UserList items={items}/>
        <Macros macros={macros}/>
        <Exercise />
      </Router>
    </div>
  );
}

export default App;
