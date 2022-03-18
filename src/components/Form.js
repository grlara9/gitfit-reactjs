import React, {useState} from 'react'
import './Form.css'
const Form = props =>{

    const [inputs, setInputs] = useState([]);

    const handleChange = e =>{
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value})
    }

    const onSubmit = e => {
        e.preventDefault();
        props.submitInputs(inputs)
        
    }
    return(
        <>
        
        <form>
        <h1 className="logo">gitFit App</h1>
        <h4 className="title">Welcome to the gitFit App. Here you will find everything you need to reach your fitness goals! </h4>
            <label>Name</label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Enter Name"
          required
          />
        <label>Age</label>
        <input
          type="text"
          name="age"
          value={inputs.age}
          onChange={handleChange}
          placeholder="Enter Your Age"
          required
          />
        
        <label>Height</label>
        <input
          type="text"
          name="height"
          value={inputs.height}
          onChange={handleChange}
          placeholder="Height in Inches"
          required
          />

        <label>Weight</label>
        <input
          type="text"
          name="weight"
          value={inputs.weight}
          onChange={handleChange}
          placeholder="Enter Weight in Lbs"
          required
          />
        <label>What is your Goal</label>
        <select class="browser-default" name="goal" value={inputs.goal} onChange={handleChange} required>
                  <option value="" > select an option </option>
                  <option value="weightloss">Weight Loss</option>
                  <option value="weightgain">Gain Muscle</option>
                  <option value="eathealthy">Eat Healthy</option>
                </select>

                <label>Physical Activity</label>
                <select name="activity"value={inputs.activity} onChange={handleChange} class="browser-default" required>
                  <option value="" > select an option </option>
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Lightly Active</option>
                  <option value="moderate">Moderately Active</option>
                  <option value="active">Active</option>
                  <option value="veryactive">Very Active</option>
                </select>

                <label>Gender</label>
                <select name ="sex" value={inputs.sex} onChange={handleChange} class="browser-default" required>
                  <option value="" > select an option </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
          <button type="submit"onClick={onSubmit}>SEARCH</button>
     </form>
     </>
    )
}
export default Form