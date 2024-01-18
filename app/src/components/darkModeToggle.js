/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Switch from '@mui/material/Switch';
import axios from 'axios';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(darkMode);

  const handleDarkModeToggle = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);

    axios
      .post('/api/dark-mode', { darkMode: !isDarkModeEnabled })
      .then(() => {
        setDarkMode(!isDarkModeEnabled);
      })
      .catch((error) => {
        console.error('Error toggling dark mode: ', error);
        // Reset the toggle to the previous state if error occurs
        setIsDarkModeEnabled(!isDarkModeEnabled);
      });
  };

  useEffect(() => {
    setIsDarkModeEnabled(darkMode);
  }, [darkMode]);

  return (
    <div className='dark-mode-toggle'>
      <Switch
        checked={isDarkModeEnabled}
        onChange={handleDarkModeToggle}
        name='darkModeToggle'
        inputProps={{ 'aria-label': 'Dark mode toggle' }}
      />
    </div>
  );
};

DarkModeToggle.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
};

export default DarkModeToggle;
