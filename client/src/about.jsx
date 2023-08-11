import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import aboutImage from './about.png';


const About = () => {
  return (
    <div className='box'>
      <div className='row'>
        <div className='col-lg-6 col-md-12'>
          <img src={aboutImage} className='image' alt='About' />
        </div>
        <div className='col-lg-6 col-md-12'>
          <h1>About this website</h1>
          <p>
            This is a website where you can share your files as quickly as possible.
            Just upload your file to the website, and it will generate a link. Share
            the link with the person you want to share the desired file. This way is
            much more efficient than sending files through email or any other way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
