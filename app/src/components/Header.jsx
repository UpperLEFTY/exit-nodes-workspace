/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    '&.dark': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText
    }
  }
}));

const Header = ({ darkMode, setDarkMode }) => {
  const [blogTitle, setBlogTitle] = useState('');
  const classes = useStyles();

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
    <header className={`${classes.header} ${darkMode ? 'dark' : ''}`}>
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
