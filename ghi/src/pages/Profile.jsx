import React from 'react';

const Profile = () => {
    return (
        <div className="profile">
            <img src="profile-pic.jpg" alt="Profile" />
            <div className="dropdown">
                <button className="dropbtn">Username</button>
                <div className="dropdown-content">
                    <a href="#">Logout</a>
                    <a href="#">Update Profile</a>
                </div>
            </div>
        </div>
    );
};

export default Profile;
