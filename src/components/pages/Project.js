import React from 'react';

// renders code to generate cards in portfolio section
function Project({item, index}) {
  return (
    <div className="my-2 py-2 bg-light d-flex flex-column justify-content-center align-items-center" key={index}>
      <p>{item.title}</p>
      <a href={item.github}>GitHub Link</a>
      <a href={item.deployed}>Deployed Application Link</a>
      <img className="w-50" src={item.image} alt={item.title}></img>
    </div>
  );
}

export default Project;
