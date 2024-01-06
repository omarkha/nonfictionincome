import React, { useState } from 'react'
import axios from "axios"

const AdminDashboard = () => {

    const [userId, setUserId] = useState("");
    const [businessId, setBusinessId] = useState("");
    const uri = window.location.origin == "http://localhost:3000" ? "http://localhost:3001" : window.location.origin;

    const deleteUser = () => {
        axios.delete(`${uri}/api/users/userid/${userId}`)
    }

    const deleteBusiness = () => {
        axios.delete(`${uri}/api/businesses/byid/`, { id: businessId })
    }

    const listUsers = async () => {
        await axios.get(`${uri}/api/users`).then(res => {
            console.log(res.data)
        })
    }


    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <hr />
            <div className='delete-users'>
                <h3>Delete User By Id: </h3>
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter user's ID to delete" />
                <button onClick={() => deleteUser()}>Delete User</button>
                <hr />
                <button onClick={() => listUsers()}>List Users</button>
                <h3>Delete Business By Id: </h3>
                <input type="text" value={businessId} onChange={(e) => setBusinessId(e.target.value)} placeholder="Enter user's ID to delete" />
                <button onClick={() => deleteBusiness()}>Delete User</button>
                <hr />
            </div>
        </div>
    )
}

export default AdminDashboard;