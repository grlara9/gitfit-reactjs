import Users from './Users'
const userList = ({user}) =>{
    return(
        <div className="user-list">
            {user.map((users)=>(
                <Users />
            ))}
        </div>
    )
}

export default userList