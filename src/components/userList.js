import Users from './Users'
import './UserList.css'
const UserList = ({user}) =>{
    return( 
        <div className="user-list">
            {user.map((users)=>(
                <Users users={users}/>
            ))}
        </div>
    )
}

export default UserList