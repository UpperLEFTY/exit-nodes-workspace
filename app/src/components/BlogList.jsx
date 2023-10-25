/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { luxon } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  post: {
    padding: theme.spacing(2),
    '&.dark': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText
    }
  }
}));

const BlogPost = ({ darkMode }) => {
  const [post, setPost] = useState({});
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/blog-list/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving blog post: ', error);
      });
  }, [id]);

  return (
    <Paper className={`${classes.post} ${darkMode ? 'dark' : ''}`}>
      <Typography variant='h4'>
        {post.title}
      </Typography>
      <Typography variant='subtitle1'>
        {format(new Date(post.date), 'dd,mm,yyyy')}
      </Typography>
      <Typography variant='body1'>
        {post.content}
      </Typography>
    </Paper>
  );
};



export default BlogPost;
