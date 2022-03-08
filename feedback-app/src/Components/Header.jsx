import React from 'react';
import PropTypes from 'prop-types';

function Header({text, bgColor, textColor}) {
    const headerStyles ={
        backgroundColor: bgColor,
        color:textColor
    }
  return (
    <header style={headerStyles }>
    <div className="container">
        <h2>{ text }</h2>
    </div>
    
    </header>
  )
};

Header.defaultProps = { // Default msg to display if there is nothing passed to Header component.
    text: 'Default Message',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6af9'
};
Header.propTypes ={
    text: PropTypes.string.isRequired, // Similar to an interface.
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}


export default Header