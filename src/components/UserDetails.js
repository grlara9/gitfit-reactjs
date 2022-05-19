import {useState} from 'react'
import './UserDetails.css'
import { Button, Collapse } from 'react-bootstrap';
 

const UserDetails = (props) =>{

    const [open, setOpen] = useState(false);

  return (
    <div className='user-details'>
      <div className='button-details'>
      <Button
       
        variant="primary" size="lg"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {props.title}
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        {props.statement}: {props.calculation}
        </div>
      </Collapse>

     
     </div>
    </div>
    )
}

export default UserDetails