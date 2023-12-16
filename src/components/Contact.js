import React, { useRef } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
    const progressBarRef = useRef(null);

    const handleClick = () => {
      gsap.to(progressBarRef.current, {
        height: '100%',
        duration: 2,
        backgroundColor: 'blue',
        ease: 'power2.inOut',
      });
    };

  return (
    <div className='contact_hero_section'>
<div className="vertical-progress-container">
      <div ref={progressBarRef} className="vertical-progress-bar"></div>
    </div>
    <button className="progressButton" onClick={handleClick}>Start Progress</button>
    </div>
    
  );
};

export default Contact;
