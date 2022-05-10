import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './ui/Navigation';
import Form from './components/Form';
import useFitness from './hooks/useFitness';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Macros from './components/Macros';
import Exercise from './pages/Exercises';
import UserDetails from './components/UserDetails';
import {useState} from 'react'
import userList from './components/userList';
function App() {

  const { submitRequest, items, macros } = useFitness()
  const [user, setUser] = useState([
		{
			id: nanoid(),
			name: 'This is my second note!',
			date: '21/04/2021',
      age: '23',
      height: '34',
      weight: '134',
      goal: 'gain muscle',
      physical: 'active',
      sex: 'male',
		},
		{
			id: nanoid(),
			name: 'This is my second note!',
			date: '21/04/2021',
      age: '23',
      height: '34',
      weight: '134',
      goal: 'gain muscle',
      physical: 'active',
      sex: 'male',

		},
		{
			id: nanoid(),
			name: 'This is my second note!',
			date: '21/04/2021',
      age: '23',
      height: '34',
      weight: '134',
      goal: 'gain muscle',
      physical: 'active',
      sex: 'male',
		},
		{
			id: nanoid(),
			name: 'This is my second note!',
			date: '21/04/2021',
      age: '23',
      height: '34',
      weight: '134',
      goal: 'gain muscle',
      physical: 'active',
      sex: 'male',
    }
	]);

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
      <UserList user={user}/>
      </main>
    </div>
    </Router>
  );
}

export default App;
