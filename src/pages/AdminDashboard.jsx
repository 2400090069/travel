import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  const [stats] = useState({
    totalUsers: 1250,
    totalHosts: 45,
    totalBookings: 320,
    totalListings: 89
  });

  const [pendingApprovals] = useState([
    { id: 1, type: 'homestay', name: 'Sunset Villa', submittedBy: 'John Host' },
    { id: 2, type: 'guide', name: 'Maria Guide', submittedBy: 'Maria' },
  ]);

  const [users] = useState([
    { id: 1, name: 'Alice Tourist', email: 'alice@example.com', role: 'tourist' },
    { id: 2, name: 'Bob Host', email: 'bob@example.com', role: 'host' },
    { id: 3, name: 'Charlie Guide', email: 'charlie@example.com', role: 'guide' },
  ]);

  const handleApproval = (id, action) => {
    console.log(`${action} item ${id}`);
    // In real app, this would update the database
  };

  const handleDeleteUser = (id) => {
    console.log(`Delete user ${id}`);
    // In real app, this would delete from database
  };

  return (
    <div>
      <Navbar />
      <main>
        <h2>Admin Dashboard</h2>
        <p>Welcome, Admin! Manage the platform here.</p>

        {/* Statistics */}
        <section className="stats-section">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>{stats.totalUsers}</p>
          </div>
          <div className="stat-card">
            <h3>Total Hosts</h3>
            <p>{stats.totalHosts}</p>
          </div>
          <div className="stat-card">
            <h3>Total Bookings</h3>
            <p>{stats.totalBookings}</p>
          </div>
          <div className="stat-card">
            <h3>Total Listings</h3>
            <p>{stats.totalListings}</p>
          </div>
        </section>

        {/* Pending Approvals */}
        <section>
          <h3>Pending Approvals</h3>
          <div className="approvals-list">
            {pendingApprovals.map(item => (
              <div key={item.id} className="approval-item">
                <h4>{item.name}</h4>
                <p>Type: {item.type}</p>
                <p>Submitted by: {item.submittedBy}</p>
                <button onClick={() => handleApproval(item.id, 'approve')} className="approve-btn">Approve</button>
                <button onClick={() => handleApproval(item.id, 'reject')} className="reject-btn">Reject</button>
              </div>
            ))}
          </div>
        </section>

        {/* User Management */}
        <section>
          <h3>User Management</h3>
          <div className="users-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button onClick={() => handleDeleteUser(user.id)} className="delete-btn">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
