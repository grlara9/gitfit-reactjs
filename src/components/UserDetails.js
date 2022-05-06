import {useState} from 'react'

import { Button, Collapse } from 'react-bootstrap';


const UserDetails = () =>{

    const [open, setOpen] = useState(false);

  return (
    <>
      <Button
       
        variant="primary" size="lg"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        BMR
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        Based off of your physical stats, your Basal Metabolic Rate (BMR) is: 1450.25
        </div>
      </Collapse>

      <Button
       
       variant="primary" size="lg"
       onClick={() => setOpen(!open)}
       aria-controls="example-collapse-text"
       aria-expanded={open}
     >
       BMR
     </Button>
     <Collapse in={open}>
       <div id="example-collapse-text">
       Based off of your physical stats, your Basal Metabolic Rate (BMR) is: 1450.25
       </div>
     </Collapse>

     <Button
       
       variant="primary" size="lg"
       onClick={() => setOpen(!open)}
       aria-controls="example-collapse-text"
       aria-expanded={open}
     >
       BMR
     </Button>
     <Collapse in={open}>
       <div id="example-collapse-text">
       Based off of your physical stats, your Basal Metabolic Rate (BMR) is: 1450.25
       </div>
     </Collapse>

     <Button
       
       variant="primary" size="lg"
       onClick={() => setOpen(!open)}
       aria-controls="example-collapse-text"
       aria-expanded={open}
     >
       BMR
     </Button>
     <Collapse in={open}>
       <div id="example-collapse-text">
       Based off of your physical stats, your Basal Metabolic Rate (BMR) is: 1450.25
       </div>
     </Collapse>
    </>
    )
}

export default UserDetails