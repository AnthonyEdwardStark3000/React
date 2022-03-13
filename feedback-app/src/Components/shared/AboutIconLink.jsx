import React from 'react';
import { FaQuestion } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

function AboutIconLinked() {
  return (
    <div className='about-link'>
    <Link to='/about' />
    <FaQuestion size={30} />
    </div>
  )
}

export default AboutIconLinked