import React, { useEffect } from 'react';
import ErrorHandler from './ErrorHandler';

const UserCard = ({id,name,username,email}) => {
    if(!id){
        return new Error("Id does not exsist")
    }
    return(
        <div style={{width:"400px",border:"1px solid black", borderRadius:"20px",textAlign:"center"}}>
            <p><strong>{id}</strong></p>
            <p><strong>{name}</strong></p>
            <p><strong>{username}</strong></p>
            <p><strong>{name}</strong></p>
            <p><strong>{email}</strong></p>

        </div>
    )
}

export default UserCard