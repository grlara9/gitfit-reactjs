import React, {useState} from 'react'
import './Form.css'
const Form = props =>{

    const [searchValue, setSearchValue] = useState('');


    const handleFormSubmit = e => {
        e.preventDefault();
        props.search(searchValue)
    }
    return(
        <form>
            <label>Name</label>
        <input
          type="text"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="Enter Name"
          />
        <label>Age</label>
        <input
          type="text"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="Enter Your Age"
          />
        
        <label>Height</label>
        <input
          type="text"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="Height in Inches"
          />

        <label>Weight</label>
        <input
          type="text"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="Enter Weight in Lbs"
          />
        <label>What is your Goal</label>
        <select id="goal" class="browser-default">
                  <option value="" > select an option </option>
                  <option value="weightloss">Weight Loss</option>
                  <option value="weightgain">Gain Muscle</option>
                  <option value="eathealthy">Eat Healthy</option>
                </select>

                <label for="physicalactivity">Physical Activity</label>
                <select id="activity" class="browser-default">
                  <option value="" > select an option </option>
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Lightly Active</option>
                  <option value="moderate">Moderately Active</option>
                  <option value="active">Active</option>
                  <option value="veryactive">Very Active</option>
                </select>
          <button type="submit"onClick={handleFormSubmit}>SEARCH</button>
     </form>
    )
}
export default Form