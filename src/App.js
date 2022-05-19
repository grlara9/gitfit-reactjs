import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './ui/Navigation';
import Form from './components/Form';
import useFitness from './hooks/useFitness';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Macros from './components/Macros';
import Exercise from './pages/Exercises';
import Details from './pages/Details';
import {useState} from 'react'
import UserList from './components/userList'
function App() {

  const { submitRequest, items, macros } = useFitness()
  const [user, setUser] = useState([
		{
			id: 12345,
			name: 'Guillermo',
			date: '21/04/2021',
      age: '23',
      height: '34',
      weight: '134',
      goal: 'gain muscle',
      physical: 'active',
      sex: 'male',
		},
		{
			id: 123456,
			name: 'Roberto',
			date: '21/04/2021',
      age: '23',
      height: '34',
      weight: '134',
      goal: 'gain muscle',
      physical: 'active',
      sex: 'male',

		},
		{
			id: 126345,
			name: 'jessica',
			date: '21/04/2021',
      age: '23',
      height: '34',
      weight: '134',
      goal: 'gain muscle',
      physical: 'active',
      sex: 'male',
		},
		{
			id: 765433,
			name: 'julia',
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
            <Route path='/users' element={<UserList user={user}/>} />
            <Route path="/exercise" element={<Exercise />} />
            <Route 
            path='/details/:id' 
            render={({ match }) => (
              <Details
                  users={user.find(
                  (users) => String(users.id) === match.params.id
                )}
              />
            )}
            />
          </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
