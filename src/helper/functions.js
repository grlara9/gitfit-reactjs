export default function validateInfo(inputs) {
    
    let errors = {};
  
    if (!inputs.value.trim()) {
      errors.username = 'Name required';
    }  
    
    
  
   
    return errors;
  }