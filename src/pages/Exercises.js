import React,{useState, useEffect} from "react";
import Beginner from "../components/BeginnerPlan";
import Intermediate from "../components/IntermediatePlan";
import Advanced from "../components/AdvancedPlan"

const Exercise = () =>{
    const [exercise, setExercise] = useState("selectExercise")
    console.log("ASDFG>>>", exercise)

    const [beginnerContentVisible, setBeginnerContentVisible] = useState(false)
    const [IntermediateContentVisible, setIntermediateContentVisible] = useState(false)
    const [AdvancedContentVisible, setAdvancedContentVisible] = useState(false)

    useEffect(()=> {
        exercise === "beginner" 
        ? setBeginnerContentVisible(true) 
        :setBeginnerContentVisible(false);
        exercise === 'intermediate' ? setIntermediateContentVisible(true) : setIntermediateContentVisible(false);
        exercise === 'advanced' ? setAdvancedContentVisible(true) : setAdvancedContentVisible(false);
    }, [exercise]);
   

    const handleChange = event =>{
        setExercise(event.target.value)

    }


    return(
        <div className="container">
            <h1>Select your Workout Experience</h1>
            <div className="exercise">
            <select  value={exercise} onChange={handleChange}>
                <option value="selectExercise" > Select Level of exercise </option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>
            </div>
            {beginnerContentVisible && <Beginner />}
            {IntermediateContentVisible && <Intermediate />}
            {AdvancedContentVisible && <Advanced />}

        </div>
    )
}
export default Exercise