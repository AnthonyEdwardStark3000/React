import React from 'react';
import Card from '../Components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
    <div className="about">
    <h1>About this Project</h1>
    <p>This is an React Application to Leave feedback and Review for application</p>
    <p>version 1.0.0</p>
    <p><Link to='/'>Back to home</Link></p>
    </div>
    </Card>
  )
}

export default AboutPage