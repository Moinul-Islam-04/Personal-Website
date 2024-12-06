import React, { useState } from 'react';
import './About.css'


const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const personalInfo = {
    name: "Moinul Islam",
    bio: "A passionate software developer with a keen interest in technology and personal growth. When I'm not coding, you'll find me exploring new challenges and pushing my limits.",
    education: "Computer Science, Florida State University, 2026",
    interests: ["Software Development", "Machine Learning", "Fitness", "Community Service"]
  };

  const organizations = [
    {
      name: "Tech Innovators Club",
      role: "Vice President",
      description: "Leading initiatives to promote technological innovation and skill development among students.",
      duration: "Sept 2023 - Present"
    },
    {
      name: "Community Outreach Program",
      role: "Volunteer Coordinator",
      description: "Organizing and coordinating community service projects and local initiatives.",
      duration: "Jan 2023 - Present"
    }
  ];

  const gymImages = [
    { id: 1, src: "/api/placeholder/400/300", alt: "Workout Session 1" },
    { id: 2, src: "/api/placeholder/400/300", alt: "Fitness Event" },
    { id: 3, src: "/api/placeholder/400/300", alt: "Team Training" },
    { id: 4, src: "/api/placeholder/400/300", alt: "Personal Achievement" }
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="about-container">
      <div className="about-profile">
        <img 
          src="/api/placeholder/300/300" 
          alt="Profile" 
          className="profile-image"
        />
        <h1>{personalInfo.name}</h1>
        <p className="bio">{personalInfo.bio}</p>
        
        <div className="info-section">
          <h2>Education</h2>
          <p>{personalInfo.education}</p>
        </div>

        <div className="info-section">
          <h2>Interests</h2>
          <div className="interests-list">
            {personalInfo.interests.map((interest, index) => (
              <span key={index} className="interest-tag">{interest}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="organizations-section">
        <h2>Organizations</h2>
        {organizations.map((org, index) => (
          <div key={index} className="organization-card">
            <h3>{org.name}</h3>
            <p className="org-role">{org.role}</p>
            <p className="org-description">{org.description}</p>
            <p className="org-duration">{org.duration}</p>
          </div>
        ))}
      </div>

      <div className="gym-gallery">
        <h2>My Fitness Journey</h2>
        <div className="gallery-grid">
          {gymImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openImageModal(image)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p>{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;