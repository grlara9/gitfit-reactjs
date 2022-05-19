import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom'
import './Users.css'

const Users =({users}) =>{  
    console.log("uses", users)
   return(
       <Card className="Card">
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                
                
                  <Link to={`/details/${users.id}`} >
                  <p>
                    <strong>Name</strong>: {users.name}</p>
                
                 </Link>
               
            </Card.Body>
        </Card>
       
       
    )
}
export default Users