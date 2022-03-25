import React, {useState} from 'react'
import {omit} from 'lodash'

const useForm = () =>{
    const [errors, setErrors] = useState({})
    console.log("Errors>>", errors)
    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'name':
                if(value.length == "" || value.length == null){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        name:'Name is Required'
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "name");
                    setErrors(newObj);
                    
                }
                break;
        
            case 'age':
                if(
                    !new RegExp( /^[0-9]+$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        age:'Only Numbers accepted'
                    })
                }else{

                    let newObj = omit(errors, "age");
                    setErrors(newObj);
                    
                }
            break;

            case 'height':
                if(
                    !new RegExp( /^[0-9]+$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        height:'Only Numbers accepted'
                    })
                }else{

                    let newObj = omit(errors, "height");
                    setErrors(newObj);
                    
                }
            break;

            case 'weight':
                if(
                    !new RegExp( /^[0-9]+$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        weight:'Only Numbers accepted'
                    })
                }else{

                    let newObj = omit(errors, "weight");
                    setErrors(newObj);
                    
                }
            break;

            case 'goal':
                if(value == "0" || value == null){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        goal:'Goal is Required'
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "goal");
                    setErrors(newObj);
                    
                }
                break;
            
            default:
                break;
        }
    }


    return{
        validate,
        errors
    }
}

export default useForm