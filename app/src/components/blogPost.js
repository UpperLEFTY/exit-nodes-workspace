/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => {
  // Rest of the code remains unchanged
});

const BlogPost = ({ darkMode }) => {
  const [post, setPost] = useState({});
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/blog-post/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving post: ', error);
      });
  }, [id]);

  return (
    <Paper className={`${classes.post} ${darkMode ? 'dark' : ''}`}>
      <Typography variant='h4'>
        {post.title}
      </Typography>
      <Typography variant='subtitle1'>
        {post.author}
        {' '}
      </Typography>
      <Typography variant='body1'>
        {post.content}
      </Typography>
    </Paper>
  );
};

export default BlogPost;

BlogPost.propTypes = {
  darkMode: PropTypes.bool.isRequired
};
