import React from 'react';
import pic from "../../assets/profile-pic.png";

// returns about section with picture and short bio
function About() {
  return (
      <div className="d-flex flex-column align-items-center">
        <h3>About</h3>
        <img className="w-50" src={pic} alt="Profile"></img>
        <p className="text-center">
          Full stack web developer with background in chemical engineering and management consulting.
        </p>
        <p className="text-center">
          Interested in designing games, music, and good food.
        </p>
      </div>
  );
}

export default About;