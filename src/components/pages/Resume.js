import React from 'react';

// renders  code for resume section, including list of skills  and downloadable resume
function Resume() {
  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="d-flex w-50 flex-column justify-content-center align-items-center text-center">
        <h3>Resume</h3>
        <h5>Technical Skills:</h5>
        <p>JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express,
React, Node, Handlebars, jQuery, jQuery UI, Bootstrap, Python, Sequelize</p>
        <h5>Other Skills:</h5>
        <p>Microsoft Excel, PowerPoint, Word</p>
        <a href="https://drive.google.com/file/d/1vI5HW-Z7eMg4IGimtN41F95RE3Zdgmit/view?usp=sharing">Link to Resume</a>
      </div>
    </div> 
  );
}

export default Resume;