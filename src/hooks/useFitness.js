import React from 'react'

const useFitness =() =>{
    
    const bmrValue = (height, weight, age, sex) => {
        if (sex === "female") {
          return Math.ceil(655 + 9.6 * parseInt(weight) + 1.8 * parseInt(height) - 4.7 * parseInt(age));
        } else {
          return (66 + 6.23 * parseInt(weight) + 12.7 * parseInt(height) - 6.8 * parseInt(age));
        }
      }
    

    const submitRequest = async values =>{
        console.log("SE ISO>>", values)
        const response =await bmrValue(values.height, values.weight, values.age, values.sex)

        console.log("RESULTADO>>>", response)
    }

    return{
        submitRequest
    }

}

export default useFitness