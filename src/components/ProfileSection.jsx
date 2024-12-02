// import React from "react";
import "./ProfileSection.css";

const ProfileSection = () => {
  return (
    <aside className="profile-section">
      <img src="jessica-taylor.jpg" alt="Jessica Taylor" className="profile-pic" />
      <h3>Jessica Taylor</h3>
      <p><strong>Date of Birth:</strong> August 23, 1996</p>
      <p><strong>Gender:</strong> Female</p>
      <p><strong>Contact:</strong> (415) 555-1234</p>
      <p><strong>Emergency:</strong> (415) 555-5678</p>
      <p><strong>Insurance:</strong> Sunrise Health Assurance</p>
      <button>Show All Information</button>
    </aside>
  );
};

export default ProfileSection;
