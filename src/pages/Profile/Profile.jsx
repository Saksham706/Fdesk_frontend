import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data.user);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">{profile.name[0]}</div>
          <h2>{profile.name}</h2>
          <button className="change-password">Change Password</button>
        </div>
        <div className="profile-details">
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>WhatsApp:</strong> Subscribed</p>
          <p><strong>Mobile No:</strong> <span className="missing">Update the Mobile No.</span></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
