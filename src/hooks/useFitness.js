import React from 'react'

const useFitness =() =>{
    
    const bmrValue = (height, weight, age, sex) => {
        if (sex === "female") {
          return Math.ceil(655 + 9.6 * parseInt(weight) + 1.8 * parseInt(height) - 4.7 * parseInt(age));
        } else {
          return (66 + 6.23 * parseInt(weight) + 12.7 * parseInt(height) - 6.8 * parseInt(age));
        }
      }

      const bmrMod = (goal) => {
        var bmrMod;
        switch (goal) {
          case "weightgain":
            bmrMod = 1.15;
            break;
          case "weightloss":
            bmrMod = 0.8;
            break;
          case "eathealthy":
            bmrMod = 1;
            break;
        }
        return bmrMod;
      }

   


      const bmrAct = (activity, bmr) => {
        var act;
        switch (activity) {
          case "sedentary":
            act = 1.2 * bmr;
            break;
          case "light":
            act = 1.375 * bmr;
            break;
          case "moderate":
            act = 1.53 * bmr;
            break;
          case "active":
            act = 1.725 * bmr;
            break;
          case "veryactive":
            act = 1.9 * bmr;
            break;
        }
        return act;
      }

    
    
     

    const submitRequest =  values =>{
    
        let response = bmrValue(values.height, values.weight, values.age, values.sex)
        if(!response) return

        console.log("THIS IS GOAL>>", values.goal)

        const bm = bmrMod(values.goal)

        console.log("bm", bm)

        const ba = bmrAct(values.activity, response)
        
        console.log("BA>>>", ba)

       
        


    }

    return{
        submitRequest
    }

}

export default useFitness