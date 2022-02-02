import React from 'react'
import HOC from './HOC';

const UserList = ({data}) => {
    return(
        <div style={{backgroundColor:'red'}}>
        {
            data.map(({name}) => (
                <p color='white'><strong>{name}</strong></p>
            ))
        }
        </div>
    )
}

const UserListComponent = HOC(UserList,"users")

export default UserListComponent;