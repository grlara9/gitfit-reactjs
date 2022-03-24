import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './ui/Navigation';
import Form from './components/Form';
import useFitness from './hooks/useFitness';
import UserList from './components/UserList';
import './App.css';
import Macros from './components/Macros';

function App() {

  const { submitRequest, items, macros } = useFitness()

  console.log("ARRAY>>>", items)
  console.log("MACROS ON APPJS", macros)
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
      <Macros macros={macros}/>
      </Router>
    </div>
  );
}

export default App;
