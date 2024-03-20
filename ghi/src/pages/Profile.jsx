import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector(state => state.user);

    const handleProfilePicUpdate = () => {
        // Implement logic to update profile picture
        console.log('Updating profile picture...');
    };

    const handleProfileUpdate = () => {
        // Implement logic to update profile details
        console.log('Updating profile...');
    };

    return (
        <div className="profile">
            <div className="profile-header">
                <img src={user.profilePic || "default-profile-pic.jpg"} alt="Profile" className="profile-picture" />
                <button className="update-pic-btn" onClick={handleProfilePicUpdate}>
                    Change Picture
                </button>
            </div>
            <div className="profile-details">
                <h2 className="profile-name">{user.name}</h2>
                <p className="profile-email">{user.email}</p>
                {/* Additional user details */}
            </div>
            <div className="profile-actions">
                <button className="update-profile-btn" onClick={handleProfileUpdate}>
                    Edit Profile
                </button>
                <button className="logout-btn">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
