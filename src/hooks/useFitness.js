import React from 'react'

const useFitness =() =>{

    const submitRequest = async values =>{
        console.log("SE ISO>>", values)
    }

    return{
        submitRequest
    }

}

export default useFitness