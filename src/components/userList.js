import Users from './Users'
import './UserList.css'
const UserList = ({user}) =>{
    return(
        <div className="user-list">
            {user.map((users)=>(
                <Users 
                    id={users.id}
                    name={users.name}
                    date={users.date}
                    age={users.age}
                    height={users.height}
                    weight={users.weight}
                    goal={users.goal}
                    physical={users.physical}
                    sex={users.sex}
                />
            ))}
        </div>
    )
}

export default UserList