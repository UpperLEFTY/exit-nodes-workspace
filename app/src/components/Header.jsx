import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Header = ({ darkMode, setDarkMode }) => {
  const [blogTitle, setBlogTitle] = useState('');

  useEffect(() => {
    axios.get('/api/blog-title')
      .then((response) => {
        setBlogTitle(response.data.title);
      })
      .catch((error) => {
        console.error('Error retrieving blog title: ', error);
      });
  }, []);

  return (
    <header className={`App-header ${darkMode ? 'dark' : ''}`}>
      <h1>
        {blogTitle}
      </h1>
      <button
        type='button'
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
};

export default Header;
