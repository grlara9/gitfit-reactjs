import React, {useState, useEffect} from 'react'
import './Form.css'

const Form = props =>{
  const [inputs, setInputs] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = event =>{
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value})
  }

  const onSubmit = e => {
    e.preventDefault();
    setErrors(validate(inputs))
    props.submitInputs(inputs)
  }

 

  

  const validate = (inputs) => {
    const errors = {};
    const regex = /^[0-9]*$/;

    if (!inputs.name) {
      errors.name = "Name is required!";
    }
    if (!inputs.age) {
      errors.age = "Age is required!";
    } else if (!regex.test(inputs.age)) {
      errors.age = "Age must be entered in numbers";
    }
    if (!inputs.height) {
      errors.height = "Height is required!";
    } else if (!regex.test(inputs.height)) {
      errors.height = "Height must be entered in numbers";
    }
    if (!inputs.weight) {
      errors.age = "Weight is required!";
    } else if (!regex.test(inputs.weight)) {
      errors.weight = "Weight must be entered in numbers";
    }
    if (!inputs.goal) {
      errors.goal = "Goal is required!";
    }
    if (!inputs.activity) {
      errors.activity = "Activity is required!";
    }
    if (!inputs.sex) {
      errors.sex = "Sex is required!";
    }
   
    return errors;
  };

    return(
      <>
       {Object.keys(errors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(inputs, undefined, 2)}</pre>
      )}
      <section className='heading'>
        <h1 className="logo">gitFit App</h1>
        <h4 className="title">Welcome to the gitFit App. Here you will find everything you need to reach your fitness goals! </h4>
      </section>
         
          
        <section className='form'>
        <form>
          <div className='form-group'>
            <label>Name</label>
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                placeholder="Enter Name"
                required
                />
            {errors.name && <h3>{errors.name}</h3>}
          </div>

          <div className='form-group'>
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={inputs.age}
            onChange={handleChange}
            placeholder="Enter Your Age"
            required
            />
            {errors.age && <h3>{errors.age}</h3>}
          </div>

          <div className='form-group'>
          <label>Height</label>
          <input
            type="text"
            name="height"
            value={inputs.height}
            onChange={handleChange}
            placeholder="Height in Inches"
            required
            />
            {errors.height && <h3>{errors.height}</h3>}
            </div>

            <div className='form-group'>
          <label>Weight</label>
          <input
            type="text"
            name="weight"
            value={inputs.weight}
            onChange={handleChange}
            placeholder="Enter Weight in Lbs"
            required
            />
            {
            errors.weight && <h3>{errors.weight}</h3>
            }
            </div>

            <div className='form-group'>
          <label>What is your Goal</label>
          <select class="browser-default" name="goal" value={inputs.goal} onChange={handleChange} required>
            <option value="" > select an option </option>
            <option value="weightloss">Weight Loss</option>
            <option value="weightgain">Gain Muscle</option>
            <option value="eathealthy">Eat Healthy</option>
          </select>
          {
            errors.goal && <h3>{errors.goal}</h3>
            }
            </div>

            <div className='form-group'>
          <label>Physical Activity</label>
          <select name="activity"value={inputs.activity} onChange={handleChange} class="browser-default" required>
            <option value="" > select an option </option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Lightly Active</option>
            <option value="moderate">Moderately Active</option>
            <option value="active">Active</option>
            <option value="veryactive">Very Active</option>
          </select>
          {
            errors.activity && <h3>{errors.activity}</h3>
            }
            </div>

            <div className='form-group'>
          <label>Gender</label>
          <select name ="sex" value={inputs.sex} onChange={handleChange} class="browser-default" required>
            <option value="" > select an option </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {
            errors.sex && <h3>{errors.sex}</h3>
            }
          </div>
          <div className='form-group'>
          <button type="submit"  onClick={onSubmit}>SEARCH</button>
          </div>
        </form>
        </section>
        
     </>
    )
  }
export default Form