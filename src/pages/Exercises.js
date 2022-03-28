import React,{useState} from "react";

const Exercise = () =>{
    const [exercise, setExercise] = useState()

    return(
        <div className="container">
            <h1>Select your Workout Experience</h1>
            <select className="exercise" name ="exercise" value={} onChange={handleChange}>
                <option value="" > select an option </option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>
        </div>
    )
}
export default Exercise