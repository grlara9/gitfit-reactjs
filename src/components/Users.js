import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom'

const Users =({name}) =>{
   
    return(
        <Card style={{ color: 'green' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                
                
                  <Link to='/userDetails.js' >
                  <p>
                    <strong>Name</strong>: {name}</p>
                
                 </Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}
export default Users