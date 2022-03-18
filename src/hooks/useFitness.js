import React from 'react'

const useFitness =() =>{
    
    const bmrValue = async(height, weight, age, sex) => {
        if (sex === "female") {
          return Math.ceil(655 + 9.6 * parseInt(weight) + 1.8 * parseInt(height) - 4.7 * parseInt(age));
        } else {
          return (66 + 6.23 * parseInt(weight) + 12.7 * parseInt(height) - 6.8 * parseInt(age));
        }
      }

      const bmrAct = async(activity, bmr) => {
        var act;
        switch (activity) {
          case "Sedentary":
            act = 1.2 * bmr;
            break;
          case "Lightly Active":
            act = 1.375 * bmr;
            break;
          case "Moderately Active":
            act = 1.53 * bmr;
            break;
          case "Active":
            act = 1.725 * bmr;
            break;
          case "Very Active":
            act = 1.9 * bmr;
            break;
        }
        return act;
      }

      const bmrMod = async(goal) => {
        var bmrMod;
        switch (goal) {
          case "Gain Muscle":
            bmrMod = 1.15;
            break;
          case "Weight Loss":
            bmrMod = 0.8;
            break;
          case "Eat Healthy":
            bmrMod = 1;
            break;
        }
        return bmrMod;
      }
    

    const submitRequest = async values =>{
        console.log("SE ISO>>", values)
        const response =await bmrValue(values.height, values.weight, values.age, values.sex)
        console.log("RESULTADO>>>", response)

        const bmrMod = await bmrMod(values.goal)
        console.log("bmrmod>>>", bmrMod)
        


    }

    return{
        submitRequest
    }

}

export default useFitness