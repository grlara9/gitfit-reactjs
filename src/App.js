import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './ui/Navigation';
import Form from './components/Form';
import useFitness from './hooks/useFitness';
import UserList from './components/UserList';
import './App.css';

function App() {

  const { submitRequest, items } = useFitness()

  const onSubmit = values =>{
    console.log("si llego el valor", {values})
    submitRequest(values)
  }
  return (
    <div className="App">
      <Router>

      <Navigation />


      <Form submitInputs={onSubmit} />
      <UserList items={items}/>
      </Router>
    </div>
  );
}

export default App;
