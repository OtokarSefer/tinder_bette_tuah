import React, { useState, useEffect } from 'react';
import './card.css';

const Card = ({ nameList, descriptionList, imagesList, likeProfile, likedProfiles }) => {
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  const [description, setDescription] = useState('');
  const [description2, setDescription2] = useState('');
  const [description3, setDescription3] = useState('');
  const [image, setImage] = useState('');

  const randomizeProfile = () => {
    const randomName = nameList[Math.floor(Math.random() * nameList.length)];
    const randomName2 = nameList[Math.floor(Math.random() * nameList.length)];
    const randomDescription = descriptionList[Math.floor(Math.random() * descriptionList.length)];
    const randomDescription2 = descriptionList[Math.floor(Math.random() * descriptionList.length)];
    const randomDescription3 = descriptionList[Math.floor(Math.random() * descriptionList.length)];
    const randomImage = imagesList[Math.floor(Math.random() * imagesList.length)];

    setName(randomName);
    setName2(randomName2);
    setDescription(randomDescription);
    setDescription2(randomDescription2);
    setDescription3(randomDescription3);
    setImage(randomImage);
  };

  const handleLike = () => {
    const newProfile = {
      name: `${name}, ${name2}`,
      description: `${description}, ${description2}, ${description3}`,
      image,
    };

    likeProfile(newProfile); // Call the likeProfile function passed from App
    randomizeProfile(); // Randomize after liking
  };

  const likeProfile = (profile) => {
    setLikedProfiles((prevLikedProfiles) => {
      const updatedProfiles = [...prevLikedProfiles, profile];
      localStorage.setItem('likedProfiles', JSON.stringify(updatedProfiles)); // Save to localStorage
      return updatedProfiles;
    });
  };
  

  useEffect(() => {
    randomizeProfile();
  }, []);

  return (
    <div className="card">
      <img src={image} alt="Profile" className="profile-image" />
      <h3>{name}, {name2}</h3>
      <p>{description}, {description2}, {description3}</p>

      <div className="paddingForButton">
        <button className="button like" onClick={handleLike}>Like</button>
        <button className="button reject" onClick={randomizeProfile}>Reject</button>
      </div>
    </div>
  );
};

export default Card;
