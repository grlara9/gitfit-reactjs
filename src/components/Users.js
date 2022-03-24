import Card from "react-bootstrap/Card";


const Users =() =>{
<Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <p>
            <strong>ID</strong>: 12334</p>
          
            <p>
              <strong>Name</strong>: Guillermo</p>
           
              <p>
                <strong>Age:</strong> 23</p>
              <p>
                <strong>Height</strong>: 123 
              </p>
              <p>
                <strong>Weight</strong>:  145lbs
              </p>
              <p>
                <strong>Goal</strong>: gain wait
              </p>
              <p>
                <strong>Physical Activity</strong>: light
              </p>
              <p>
                <strong>Sex</strong>: male <i class="material-icons">expand_more</i>
              </p>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
</Card>
}
export default Users