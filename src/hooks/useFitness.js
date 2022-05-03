import React, {useState} from 'react'

const useFitness =() =>{

  const [items, setItems] = useState([])
  const [macros, setMacros] = useState(null)
    console.log("ITEMS>>>", items)
    console.log("MACROS>>>", macros)


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

      const addInputs = (values) =>{

        const newItems = {
            id: Math.random(),
            name: values.name,
            age: values.age,
            height: values.height,
            weight: values.weight,
            goal: values.goal,
            activity: values.activity,
            sex: values.sex
        }

        const users = [...items, newItems]
        setItems(users)

      }
    
    
     

    const submitRequest =  values =>{
        addInputs(values)
    
        let basalMetRate = bmrValue(values.height, values.weight, values.age, values.sex)
        if(!basalMetRate) return
        const bmrActivity = bmrAct(values.activity, basalMetRate)
        const bmrRec = (bmrMod(values.goal) * bmrActivity)
        //0.8 means grams of protein. We are multiplying by bodyweight to get how many grams of protein they should eat.
        var protein = Math.round(0.8 * values.weight); 
        //The calories from fat should be 25% of total goal calories. You then need to divide by 9 in order to get the grams of fat they should eat.
        var fat = Math.round((0.25 * bmrRec) / 9); 
         //The remaining macro is carbs. We just subtract the amount of calories from protein AND fat from the total goal calories. We then divide by 4 to get the amount of carbs in grams.
        var carbs = Math.round((bmrRec - protein * 4 - fat * 9) / 4);

        console.log("PROTEIN FAT CARBS>>>", protein, fat, carbs)

        setMacros({basalMetRate, bmrActivity, bmrRec, protein, fat, carbs})
      }

    return{
        submitRequest,
        items, 
        macros
    }

}

export default useFitness