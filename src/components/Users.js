import Card from "react-bootstrap/Card";


const Users =({item}) =>{
    console.log("ITEM LASTONE>>>", item)
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <p><strong>ID</strong>: {item.id}</p>
                
                    <p>
                    <strong>Name</strong>: {item.name}</p>
                
                    <p>
                        <strong>Age:</strong> {item.age}</p>
                    <p>
                        <strong>Height</strong>: {item.height} 
                    </p>
                    <p>
                        <strong>Weight</strong>:  {item.weight}
                    </p>
                    <p>
                        <strong>Goal</strong>: {item.goal}
                    </p>
                    <p>
                        <strong>Physical Activity</strong>: {item.activity}
                    </p>
                    <p>
                        <strong>Sex</strong>: {item.sex} <i class="material-icons">expand_more</i>
                    </p>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}
export default Users