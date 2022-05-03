import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './ui/Navigation';
import Form from './components/Form';
import useFitness from './hooks/useFitness';
import UserDetails from './components/UserDetails';
import './App.css';
import Macros from './components/Macros';
import Exercise from './pages/Exercises';

function App() {

  const { submitRequest, items, macros } = useFitness()

  const onSubmit = values =>{
    submitRequest(values)
  }
  return (
    <Router>
    <div className="App">
        <Navigation />
        <main>
      <Routes>
           <Route path="/" element={ <Form submitInputs={onSubmit} />} />
       
       

        <Route path="/exercise" element={<Exercise />} />
      </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
