import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);
    const userStyle = {
        border: '2px solid tomato',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div style={userStyle}>
            <h3>Users: {users.length}</h3>
        </div>
    )
}