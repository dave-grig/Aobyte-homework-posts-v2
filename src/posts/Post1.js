import React from 'react'
import {useState, useEffect} from 'react'

import './Post.css'
import AddIcon from '@material-ui/icons/Add';

// material ui imports
import { Avatar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Comment } from '../comments/Comment'
import { commentsData } from '../comments/commentsData'
import { Grid } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export const Post1 = ({img, name, text, currentPostIndex}) => {
    const [comments, setComments] = useState([]);
    const [authorName, setAuthorName] = useState("");
    const [commentText, setCommentText] = useState("");
    const [rate, setRate] = useState(null);
    const classes = useStyles();
    const handleAddComment = (e) => {
        setComments([...comments, {
            authorName: authorName,
            commentText: commentText,
            rate: rate
        }]);
    }

    const handleAuthorName = (e) => {
        setAuthorName(e.target.value);
    }

    const handleCommentText = (e) => {
        setCommentText(e.target.value);
    }

    const handleSelectRate = (e) => {
        setRate(+e.target.value);
    }

    return (
        <>
            <Paper className="post__paper">
                <Box className="post__img-wrapper">
                    <Avatar className="post__img" alt="comment author" src={img} />
                    <Typography className="post__text" variant="h6">{name}</Typography>
                </Box>
                <Typography variant="body1">{text}</Typography>
            </Paper>
            
                <Button onClick={handleAddComment}>
                    Add comment <AddIcon />
                </Button>
                <Box>
                    <TextField onChange={handleAuthorName}/>
                    <TextField rows={3} onChange={handleCommentText} />                    
                    <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Rate</InputLabel>
        <Select
          native
          value={rate}
          onChange={handleSelectRate}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>

        </Select>
      </FormControl>
                </Box>
            <Typography variant="body1">
                Comments
            </Typography>
            
            {/* {commentsData.map((comment,index) => {
                return (
                    <Grid container justify="center" key={index}>
                        <Grid item xs={6}>
                            <Comment name={comment.name} img={comment.img} text={comment.text} rate={comment.rate}/>
                        </Grid>
                    </Grid>
                )
            })} */}

            {comments.map((comment,index) => {
                return (<Grid container justify="center" key={index}>
                        <Grid item xs={6}>
                            <Comment img={null} name={comment.authorName} text={comment.commentText} rate={comment.rate} handleAddComment={handleAddComment}/>
                        </Grid>
                    </Grid>)
            })}
        </>
    )
}