import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom'
import './Users.css'

const Users =({name}) =>{ 
   
    return(
        
            <Card className="Card">
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                
                
                  <Link to='/details' >
                  <p>
                    <strong>Name</strong>: {name}</p>
                
                 </Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
       
       
    )
}
export default Users