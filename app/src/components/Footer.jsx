/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    '&.dark': {
      backgroundColor: '#000000',
      color: '#ffffff'
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={`${classes.footer} footer`}>
      <div className='container'>
        <div>
          <a href='mailto:upperlefty@zoho.eu?Subject=Hi,%20Essence!&body=Just%20wanted%20to%20reach%20out%20and...' aria-label='Email upperlefty'>
            upperlefty@zoho.eu
          </a>
        </div>
        <p>&copy; 2024 Exit-Nodes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
