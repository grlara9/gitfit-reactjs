import Card from "react-bootstrap/Card";


const Users =({name}) =>{
   
    return(
        <Card style={{ color: 'green' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                
                
                    <p>
                    <strong>Name</strong>: {name}</p>
                
                 
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}
export default Users