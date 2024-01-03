import React, { useState } from 'react'
import axios from "axios"

const AdminDashboard = () => {

    const [userId, setUserId] = useState("");
    const uri = window.location.origin == "http://localhost:3000" ? "http://localhost:3001" : window.location.origin;

    const deleteUser = () => {
        axios.delete(`${uri}/api/users/userid/${userId}`)
    }

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <hr />
            <div className='delete-users'>
                <h3>Delete User By Id: </h3>
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter user's ID to delete" />
                <button onClick={() => deleteUser()}>Delete User</button>
            </div>
        </div>
    )
}

export default AdminDashboard;