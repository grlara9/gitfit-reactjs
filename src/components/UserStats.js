import React from 'react'
import Card from "react-bootstrap/Card";

const UserStats = () =>{

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <p>
            <strong>ID</strong>:</p>
          
            <p>
              <strong>Name</strong>:</p>
           
              <p>
                <strong>Age:</strong> </p>
              <p>
                <strong>Height</strong>:  
              </p>
              <p>
                <strong>Weight</strong>:  lbs
              </p>
              <p>
                <strong>Goal</strong>: 
              </p>
              <p>
                <strong>Physical Activity</strong>: 
              </p>
              <p>
                <strong>Sex</strong>: 
              </p>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
</Card>
    )
}

export default UserStats