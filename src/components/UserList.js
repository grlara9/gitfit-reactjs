import React from 'react'
import Users from './Users'

const UserList = ({items}) =>{
 console.log("USERLIST ARRAY>>", items)
    return(
       <div className='userlist'>
          {items.map((item) =>(
            <Users key={item.id} item={item}/>
        ))}
       </div>
    )
}

export default UserList